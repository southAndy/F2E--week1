import { createStore } from "vuex";
import API from "@/service/getAPI";
import { ApiResponse,RestaurantApi,ScenicSpotApi,ActivitiesApi } from "@/types/api.js";

// import { restaurantDatas } from "./restaurant/index.js";
// import { festivalDatas } from "./festival/index.js";
// import { activitiesDatas } from "./activities/index.js";


interface State {
  resturantData: RestaurantApi[]; //餐廳資料
  activitiesData: ActivitiesApi[]; //活動資料
  scenicSpotData: ScenicSpotApi[]; //景點資料
  isLoading: boolean;
  accessToken: string;
  
}

export default createStore({
  state:<State> {
    resturantData: [],
    scenicSpotData: [],
    isLoading: true,
    accessToken:"",
    activitiesData: []
  },
  getters: {
    getAPI(state) {
      state.isLoading = false;
      return state.isLoading;
    },
    withPictureActivities(state) {
      if(state.activitiesData.length > 0){
        return state?.activitiesData?.filter(
          (data) => data.Picture.PictureUrl1 != undefined
        );
      }else{
        return [{},{},{},{}]
      }
    },
    withCityData(state) {
      const arrAPI = Array.from(state.activitiesData);
      return arrAPI.filter((data) => data.City != undefined);
    },
    scenicSpotDataWithCity(state) {
      let data = state.scenicSpotData ;
      return data.filter((data) => data.City != undefined);
    },
    restaurantDataWithCity(state) {
      let data = state.resturantData || [];
      return data.filter((data) => data.City != undefined);
    },
    filterRepeatCity(state) {
      //[]:等待3種API資料回來前避免報錯
      let data =
        // state?.activitiesData ||
        state?.scenicSpotData ||
        state?.resturantData ||
        [];
      console.log("test:收到什麼資料", data);
      let cityDatas = data?.map((data) => {
        if (data.City !== undefined) {
          return data.City;
        }
      });
      let temp = cityDatas.filter((city) => city !== undefined);
      return new Set(temp);
    },
  },
  mutations: {
    ensureActivitiesAPI(state, payload) {
      state.activitiesData = payload;
    },
    setToken(state,payload){
      state.accessToken = payload
    },
    setLoading(state,payload){
      state.isLoading = payload
    },
    ensureRestaurantAPI(state, apiData) {
      setTimeout(() => {
        state.isLoading = false;
      }, 3000);
      state.resturantData = apiData;
    },
    ensureScenicSpotAPI(state, apiData) {
      setTimeout(() => {
        state.isLoading = false;
      }, 3000);
      state.scenicSpotData = apiData;
    },
  },
  actions: {
    async getActivitiesAPI({ commit }) {
      try{
        commit('setLoading',true)
        let apiData = await API.getActivitiesAPI().then((response) => {
          return response.data;
        });
        commit('setLoading',false)
        commit("ensureActivitiesAPI", apiData);
      }catch(e){
        console.log(e);

      }
    },
    async getRestaurantAPI({ commit, state }) {
      let apiData = await API.getRestaurantAPI().then((response) => {
        return response.data;
      });
      //呼叫mutation修改state
      commit("ensureRestaurantAPI", apiData);
      return state.resturantData;
    },
    async getScenicSpotAPI({ commit }) {
      let apiData = await API.getScenicSpotAPI().then((res)=>{
        return res.data
      })
      //呼叫mutation修改state
      commit("ensureScenicSpotAPI", apiData);
    },
  },
  // modules: {
  //   restaurantDatas,
  //   festivalDatas,
  //   activitiesDatas,
  // },
});
