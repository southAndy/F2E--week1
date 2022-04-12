import API from "@/service/getAPI";

export const festivalDatas = {
  namespaced: true,
  state: {
    festivalData: [
      {
        name: "自然風景類",
        image: require("@/assets/image/activities/unsplash_pn5c-CLWGzY.png"),
      },
      {
        name: "觀光工廠類",
        image: require("@/assets/image/Rectangle 93.svg"),
      },
      {
        name: "遊憩活動類",
        image: require("@/assets/image/activities/Rectangle 94.png"),
      },
      {
        name: "休閒農業類",
        image: require("@/assets/image/activities/Rectangle 95.svg"),
      },
      {
        name: "生態類",
        image: require("@/assets/image/activities/unsplash_7tvbRQ5AKs4.png"),
      },
      {
        name: "溫泉類",
        image: require("@/assets/image/activities/unsplash_I8K-lIkvqYI.png"),
      },
      {
        name: "古蹟類",
        image: require("@/assets/image/activities/Rectangle 98.svg"),
      },
      // dd
    ],
    apiDataByClass: null,
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

      let apiData = await API.activities
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
