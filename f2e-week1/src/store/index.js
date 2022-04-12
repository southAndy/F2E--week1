import { createStore } from "vuex";
import API from "@/service/getAPI";

import { restaurantDatas } from "./restaurant/index.js";
import { festivalDatas } from "./festival/index.js";
import { activitiesDatas } from "./activities/index.js";
export default createStore({
  state: {
    //接收API的容器
    activitiesData: null,
    resturantData: null,
    scenicSpotData: null,
  },
  getters: {
    withPictureActivities(state) {
      const arrAPI = Array.from(state.activitiesData);
      return arrAPI.filter((data) => data.Picture.PictureUrl1 != undefined);
    },
    withCityData(state) {
      const arrAPI = Array.from(state.activitiesData);
      return arrAPI.filter((data) => data.City != undefined);
    },
    scenicSpotDataWithCity(state) {
      let data = state.scenicSpotData || [];
      return data.filter((data) => data.City != undefined);
    },
    restaurantDataWithCity(state) {
      let data = state.resturantData || [];
      return data.filter((data) => data.City != undefined);
    },
    //? (module) activities
    filterRepeatCity(state) {
      //[]:等待3種API資料回來前避免報錯
      let data =
        state?.activitiesData ||
        state?.scenicSpotData ||
        state?.resturantData ||
        [];

      //todo：map會回傳全部的資料（包括undefined的資料
      let cityDatas = data?.map((data) => {
        if (data.City !== undefined) {
          return data.City;
        }
      });
      //!indexOf只能判別純陣列內容（物件型別不能）
      return cityDatas.filter(
        (city, index, array) => array.indexOf(city) === index
      );
    },
  },
  mutations: {
    ensureActivitiesAPI(state, apiData) {
      // console.log("mutation接收到資料：", apiData != null, apiData);
      state.activitiesData = apiData;
    },
    ensureRestaurantAPI(state, apiData) {
      // console.log("mutation接收到資料：", apiData != null, apiData);
      state.resturantData = apiData;
    },
    ensureScenicSpotAPI(state, apiData) {
      // console.log("mutation接收到資料：", apiData != null, apiData);
      state.scenicSpotData = apiData;
    },
  },
  actions: {
    async getActivitiesAPI({ commit }) {
      let apiData = await API.getActivitiesAPI().then((response) => {
        return response.data;
      });
      // console.log("action接收到資料：", apiData);
      //呼叫mutation修改state
      commit("ensureActivitiesAPI", apiData);
      // return state.activitiesData;
    },
    async getRestaurantAPI({ commit, state }) {
      let apiData = await API.getRestaurantAPI().then((response) => {
        return response.data;
      });
      // console.log("action接收到資料：", apiData);
      //呼叫mutation修改state
      commit("ensureRestaurantAPI", apiData);
      return state.resturantData;
    },
    async getScenicSpotAPI({ commit }) {
      let apiData = await API.getScenicSpotAPI().then((response) => {
        return response.data;
      });
      // console.log("action接收到資料：", apiData);
      //呼叫mutation修改state
      commit("ensureScenicSpotAPI", apiData);
      // return state.scenicSpotData;
    },
  },
  modules: {
    restaurantDatas,
    festivalDatas,
    activitiesDatas,
  },
});
