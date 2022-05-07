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

    isLoading: true,
  },
  getters: {
    getAPI(state) {
      state.isLoading = false;
      return state.isLoading;
    },
    withPictureActivities(state) {
      // const arrAPI = Array.from(state.activitiesData);
      return state?.activitiesData?.filter(
        (data) => data.Picture.PictureUrl1 != undefined
      );
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
      console.log("test:收到什麼資料", data);
      //todo:只保留不重複的縣市名稱
      //todo：map會回傳全部的資料（包括undefined的資料
      let cityDatas = data?.map((data) => {
        if (data.City !== undefined) {
          return data.City;
        }
      });
      let temp = cityDatas.filter((city) => city !== undefined);
      console.log("test:filtered", temp);
      console.log(new Set(temp));
      return new Set(temp);
      //篩選掉重複的值
      // let noRepeatCities = new Set(cityDatas);
      //!indexOf只能判別純陣列內容（物件型別不能）
      // let filterRepeat = cityDatas.filter(
      //   (city, index, array) => array.indexOf(city) === index
      // );
      // console.log("after filtered", filterRepeat);
      // console.log(filterRepeat.splice(0, 1));
      // return filterRepeat.splice(0, 1);
    },
  },
  mutations: {
    ensureActivitiesAPI(state, apiData) {
      // console.log("mutation接收到資料：", apiData != null, apiData);
      setTimeout(() => {
        state.isLoading = false;
      }, 3000);
      state.activitiesData = apiData;
    },
    ensureRestaurantAPI(state, apiData) {
      // console.log("mutation接收到資料：", apiData != null, apiData);
      setTimeout(() => {
        state.isLoading = false;
      }, 3000);
      state.resturantData = apiData;
    },
    ensureScenicSpotAPI(state, apiData) {
      // console.log("mutation接收到資料：", apiData != null, apiData);
      setTimeout(() => {
        state.isLoading = false;
      }, 3000);
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
