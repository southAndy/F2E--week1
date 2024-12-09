import axios from "axios";
import store from "@/store/index.js"

//token 的驗證函式
async function getToken() {

  if(store.state.accessToken){return}
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', import.meta.env.VITE_API_Client_Id);
  params.append('client_secret', import.meta.env.VITE_API_Client_Secret);

  try {
    const response = await axios.post(
      'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',
      params, // 使用 URLSearchParams 格式化 body
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    //存入 vuex 中
    store.commit('setToken',response.data.access_token)    
  } catch (error) {
    console.error('Error fetching token:', error.response?.data || error.message);
  }
}


async function createAxios(params) {
  await getToken()
  const token = store.state.accessToken


  //創立一個axios的實例，統一提供app使用
  const touristAPI = axios.create({
  baseURL: "https://tdx.transportdata.tw/api/basic/v2/Tourism",
  headers: {
    Accept: "application/json",
    Authorization:`Bearer ${store.state.accessToken}`
  },
});
  //新增錯誤攔截器
  touristAPI.interceptors.response.use(
    (response) => response,
    (error) => {
      // 統一錯誤格式
      return Promise.reject({
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
      });
    }
  );
  return touristAPI

}


export default {
  createAxios,
  async getScenicSpotAPI() {
    const touristAPI= await createAxios()
    return touristAPI.get('/ScenicSpot?$top=1000');
    //
  },
  getActivitiesAPI() {
    // return touristAPI.get("/Activity?%24top=500&%24format=JSON");
  },
  getRestaurantAPI() {
    // return touristAPI.get("/Restaurant?%24top=500&%24format=JSON");
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

