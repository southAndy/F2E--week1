import API from "@/service/getAPI";

export const restaurantDatas = {
  namespaced: true,
  state: {
    restaurantData: [
      {
        name: "地方特產",
        image: require("@/assets/image/restaurant/unsplash_bRdRUUtbxO0.png"),
      },
      {
        name: "中式美食",
        image: require("@/assets/image/restaurant/unsplash_jFu2L04tMBc.png"),
      },
      {
        name: "甜點冰品",
        image: require("@/assets/image/restaurant/unsplash_LI368L2RZno.png"),
      },
      {
        name: "異國料理",
        image: require("@/assets/image/restaurant/unsplash_b-2uxjTcxH0.png"),
      },
      {
        name: "伴手禮",
        image: require("@/assets/image/restaurant/unsplash_CnrDuY0tFrg.png"),
      },
      {
        name: "素食",
        image: require("@/assets/image/restaurant/unsplash_4MEL9XS-3JQ.png"),
      },
    ],
    apiData: null,
    //透過類別(class)篩選的資料
    apiDataByClass: null,
  },
  getters: {},
  mutations: {
    storeAPI(state, apiData) {
      console.log("取到的資料為", apiData);
      state.apiDataByClass = apiData;
      console.log("state-apiDataByClass值為", state.apiDataByClass);
      // return state.apiDataByClass;
    },
  },
  actions: {
    async sendData({ commit, state }, className) {
      console.log("此次搜尋類別為：", className);

      let apiData = await API.restaurant
        .getDataByClass(className)
        .then((response) => {
          return response.data;
        });
      //將值存入state
      commit("storeAPI", apiData);

      //! 討論：在action回傳值？
      return state.apiDataByClass;
    },
  },
};
