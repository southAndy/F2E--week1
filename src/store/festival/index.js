import API from "@/service/getAPI";
import natureImg from "@/assets/image/activities/unsplash_pn5c-CLWGzY.png"
import factoryImg from "@/assets/image/Rectangle93.svg"
import recreationImg from "@/assets/image/activities/Rectangle94.png"
import farmImg from "@/assets/image/activities/Rectangle95.svg"
import ecologyImg from "@/assets/image/activities/unsplash_7tvbRQ5AKs4.png"
import hotSpringImg from "@/assets/image/activities/unsplash_I8K-lIkvqYI.png"
import historicImg from "@/assets/image/activities/Rectangle98.svg"

export const festivalDatas = {
  namespaced: true,
  state: {
    festivalData: [
      {
        name: "自然風景類",
        image: natureImg,
      },
      {
        name: "觀光工廠類",
        image: factoryImg,
      },
      {
        name: "遊憩活動類",
        image: recreationImg,
      },
      {
        name: "休閒農業類",
        image: farmImg,
      },
      {
        name: "生態類",
        image: ecologyImg,
      },
      {
        name: "溫泉類",
        image: hotSpringImg,
      },
      {
        name: "古蹟類",
        image: historicImg,
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
