import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import store from "@/store/index.ts"
import { ScenicSpotApi } from "@/types/api";
import auth from "@/utils/auth.ts";



async function createAxios(): Promise<AxiosInstance> {

  //取得token
  await auth();
  // 存入vuex中
  store.commit("setToken", store.state.accessToken);

  //創立一個axios的實例，統一提供app使用
  const touristAPI = axios.create({
    baseURL: "https://tdx.transportdata.tw/api/basic/v2/Tourism",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${store.state.accessToken}`
    },
  });
  //新增錯誤攔截器
  touristAPI.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      // 統一錯誤格式
      return Promise.reject({
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
      });
    }
  );
  return touristAPI;

}


export default {
  createAxios,
  async getScenicSpotAPI(): Promise<AxiosResponse<ScenicSpotApi>> {
    const touristAPI = await createAxios();
    return touristAPI.get("/Activity?%24top=500&%24format=JSON");
  },
  async getRestaurantAPI() {
    const touristAPI = await createAxios();
    return touristAPI.get("/Restaurant?%24top=500&%24format=JSON");
  },
  //todo 重新設計觸發API函式：https://motc-ptx-api-documentation.gitbook.io/motc-ptx-api-documentation/api-te-se/odata
  scenicSpot: {
    async getDataByClass(className = "") {
      const touristAPI = await createAxios();
      let ASCIIClassName = encodeURI(className);
      return touristAPI.get("ScenicSpot", {
        params: {
          $filter: `contains(Class1, '${ASCIIClassName}')`,
          $top: 500,
          $format: "JSON",
        },
      });
    },
    async getFilteredDatas(city = "/", keyword = "") {
      const touristAPI = await createAxios();
      let ASCIIedKeyword = encodeURI(keyword);

      return touristAPI.get(
        `ScenicSpot/${city}?%24filter=contains(DescriptionDetail%2C%27${ASCIIedKeyword}%27)&%24top=500&%24format=JSON`
      );
    },
  },
  activities: {
    async getDataByClass(className = "") {
      const touristAPI = await createAxios();
      let ASCIIClassName = encodeURI(className);
      return touristAPI.get(
        `Activity?%24filter=contains(Class1%2C%20%27${ASCIIClassName}%27)&%24top=500&%24format=JSON`
      );
    },
    async getFilteredDatas(city = "/", keyword = "") {
      const touristAPI = await createAxios();
      let ASCIIedKeyword = encodeURI(keyword);

      return touristAPI.get(
        `Activity/${city}?%24filter=contains(Description%2C%27${ASCIIedKeyword}%27)&%24top=500&health=false&%24format=JSON`
      );
    },
  },
  }
