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
      //...
      const arrAPI = Array.from(state.activitiesData);
      console.log(arrAPI);
      return arrAPI.filter((data) => data.Picture.PictureUrl1 != undefined);
    },
    withCityData(state) {
      const arrAPI = Array.from(state.activitiesData);
      return arrAPI.filter((data) => data.City != undefined);
    },
    scenicSpotDataWithCity(state) {
      console.log("array?", state);
      return state.scenicSpotData.filter((data) => data.City != undefined);
    },
    restaurantDataWithCity(state) {
      return state.resturantData.filter((data) => data.City != undefined);
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
    async getActivitiesAPI({ commit }) {
      let apiData = await API.getActivitiesAPI().then((response) => {
        console.log("23", response.data);
        return response.data;
      });
      console.log("23", apiData);
      //呼叫mutation修改state
      commit("ensureActivitiesAPI", apiData);
      // return state.activitiesData;
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
      let apiData = await API.getScenicSpotAPI().then((response) => {
        return response.data;
      });
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
