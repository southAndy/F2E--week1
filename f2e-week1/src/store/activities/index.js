import API from "@/service/getAPI";

export const activitiesDatas = {
  namespaced: true,
  state: {
    activitiesData: [
      {
        name: "節慶活動",
        image: require("@/assets/image/unsplash_qDZ-Xd8dX6w.svg"),
      },
      {
        name: "自行車活動",
        image: require("@/assets/image/unsplash_I8K-lIkvqYI.svg"),
      },
      {
        name: "遊憩活動",
        image: require("@/assets/image/Rectangle 94.svg"),
      },
      {
        name: "產業文化活動",
        image: require("@/assets/image/unsplash_qDBbM9Erwo4.svg"),
      },
      {
        name: "年度活動",
        image: require("@/assets/image/unsplash_qDZ-Xd8dX6w.png"),
      },
      {
        name: "四季活動",
        image: require("@/assets/image/unsplash_qDZ-Xd8dX6w.svg"),
      },
    ],
  },
  getters: {},
  mutations: {
    storeAPI(state, apiData) {
      console.log("從actions取到的資料為", apiData);
      state.apiDataByClass = apiData;
      console.log("state-apiDataByClass值為", state.apiDataByClass);
      // return state.apiDataByClass;
    },
  },
  actions: {
    async sendData({ commit, state }, className) {
      console.log("此次搜尋類別為：", className);

      let apiData = await API.scenicSpot
        .getDataByClass(className)
        .then((response) => {
          console.log("節慶資料為", response.data);
          return response.data;
        });
      //將值存入state
      commit("storeAPI", apiData);

      //把值傳出去
      return state.apiDataByClass;
    },
  },
};
