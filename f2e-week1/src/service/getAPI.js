// import { def } from "@vue/shared";
import axios from "axios";

//創立一個axios的實例，統一提供app使用
const touristAPI = axios.create({
  //baseURL:要一直被呼叫的API
  baseURL: "https://ptx.transportdata.tw/MOTC/v2/Tourism/",
  headers: {
    Accept: "application/json",
  },
});

export default {
  getScenicSpotAPI() {
    return touristAPI.get("/ScenicSpot?%24top=300&%24format=JSON");
  },
  getActivitiesAPI() {
    return touristAPI.get("/Activity?%24top=300&%24format=JSON");
  },
  getRestaurantAPI() {
    return touristAPI.get("/Restaurant?%24top=300&%24format=JSON");
  },
};
