import axios from "axios";

//創立一個axios的實例，統一提供app使用
const touristAPI = axios.create({
  //baseURL:要一直被呼叫的API
  baseURL: "https://ptx.transportdata.tw/MOTC/v2/Tourism/",
  headers: {
    Accept: "application/json",
  },
});
//test

export default {
  getScenicSpotAPI() {
    return touristAPI.get("/ScenicSpot?%24top=500&%24format=JSON");
    //
  },
  getActivitiesAPI() {
    return touristAPI.get("/Activity?%24top=500&%24format=JSON");
  },
  getRestaurantAPI() {
    return touristAPI.get("/Restaurant?%24top=500&%24format=JSON");
  },
  //todo 重新設計觸發API函式：https://motc-ptx-api-documentation.gitbook.io/motc-ptx-api-documentation/api-te-se/odata
  scenicSpot: {
    getDataByClass(className = "") {
      let ASCIIClassName = encodeURI(className);
      console.log("ScenicSpot", ASCIIClassName);

      //todo 進階寫法：axios官方物件寫法
      //原始寫法
      // return touristAPI.get(
      //   `ScenicSpot?%24filter=contains(Class1%2C%20%27${ASCIIClassName}%27)&%24top=500&%24format=JSON`
      // );
      return touristAPI.get("ScenicSpot", {
        params: {
          $filter: `contains(Class1, '${className}')`,
          $top: 500,
          $format: "JSON",
        },
      });
    },
    getFilteredDatas(city = "/", keyword = "") {
      let ASCIIedKeyword = encodeURI(keyword);

      return touristAPI.get(
        `ScenicSpot/${city}?%24filter=contains(DescriptionDetail%2C%27${ASCIIedKeyword}%27)&%24top=500&%24format=JSON`
      );
    },
  },
  activities: {
    getDataByClass(className = "") {
      let ASCIIClassName = encodeURI(className);
      console.log(`將${className}轉換為${ASCIIClassName}`);
      return touristAPI.get(
        `Activity?%24filter=contains(Class1%2C%20%27${ASCIIClassName}%27)&%24top=500&%24format=JSON`
      );
    },
    getFilteredDatas(city = "/", keyword = "") {
      let ASCIIedKeyword = encodeURI(keyword);

      return touristAPI.get(
        `Activity/${city}?%24filter=contains(Description%2C%27${ASCIIedKeyword}%27)&%24top=500&health=false&%24format=JSON`
      );
    },
  },
  restaurant: {
    getDataByClass(className = "") {
      let ASCIIClassName = encodeURI(className);
      console.log(ASCIIClassName);
      return touristAPI.get(
        `Restaurant?%24filter=contains(Class%2C%20%27${ASCIIClassName}%27)&%24top=500&%24format=JSON`
      );
    },
    getFilteredDatas(city = "/", keyword = "") {
      let ASCIIedKeyword = encodeURI(keyword);

      return touristAPI.get(
        `Restaurant/${city}?%24filter=contains(Description%2C%27${ASCIIedKeyword}%27)&%24top=500&health=false&%24format=JSON`
      );
    },
  },
};

