import { createStore } from "vuex";
import API from "@/service/getAPI";

export default createStore({
  state: {
    //接收API的容器
    activitiesData: null,
    resturantData: null,
    scenicSpotData: null,
  },
  getters: {
    withPictureActivities(state) {
      //...
      const arrAPI = Array.from(state.activitiesData);
      console.log(arrAPI);
      return arrAPI.filter((data) => data.Picture.PictureUrl1 != undefined);
    },
    withCityData(state) {
      const arrAPI = Array.from(state.activitiesData);
      return arrAPI.filter((data) => data.City != undefined);
    },
  },
  mutations: {
    ensureActivitiesAPI(state, apiData) {
      console.log("接收到api:", apiData != null);
      state.activitiesData = apiData;
    },
    ensureRestaurantAPI(state, apiData) {
      console.log("接收到api:", apiData != null);
      state.resturantData = apiData;
    },
    ensureScenicSpotAPI(state, apiData) {
      console.log("接收到api:", apiData != null);
      state.scenicSpotData = apiData;
    },
  },
  actions: {
    getActivitiesAPI({ commit }) {
      API.getActivitiesAPI().then((response) => {
        let apiData = response.data;
        //呼叫mutation修改state
        commit("ensureActivitiesAPI", apiData);
      });
    },
    getRestaurantAPI({ commit }) {
      API.getRestaurantAPI().then((response) => {
        let apiData = response.data;
        //呼叫mutation修改state
        commit("ensureRestaurantAPI", apiData);
      });
    },
    getScenicSpotAPI({ commit }) {
      API.getScenicSpotAPI().then((response) => {
        let apiData = response.data;
        //呼叫mutation修改state
        commit("ensureScenicSpotAPI", apiData);
      });
    },
  },
  // modules: {},
});
