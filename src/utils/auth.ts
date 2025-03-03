import store from "@/store";
import axios from "axios";

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

  export default getToken;