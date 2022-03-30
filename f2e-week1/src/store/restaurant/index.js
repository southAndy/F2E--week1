import API from "@/service/getAPI";

export const restaurantDatas = {
  namespaced: true,
  state: {
    restaurantData: [
      {
        name: "地方特產",
        image: require("@/assets/image/Rectangle 93.svg"),
      },
      {
        name: "中式美食",
        image: require("@/assets/image/unsplash_qDZ-Xd8dX6w.png"),
      },
      {
        name: "甜點冰品",
        image: require("@/assets/image/unsplash_pn5c-CLWGzY.svg"),
      },
      {
        name: "異國料理",
        image: require("@/assets/image/unsplash_qDBbM9Erwo4.svg"),
      },
      {
        name: "伴手禮",
        image: require("@/assets/image/unsplash_qDZ-Xd8dX6w.png"),
      },
      {
        name: "素食",
        image: require("@/assets/image/unsplash_qDZ-Xd8dX6w.svg"),
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
