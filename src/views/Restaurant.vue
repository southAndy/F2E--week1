<template>
  <div class="restaurant">
    <Breadcrumb />
    <Button @getSelected="sendSelectedDatas" />
    <!-- <Swiper /> -->
    <div class="serach">
      <div class="topic_container">
        <h3 class="serach_theme">熱門主題</h3>
        <Topic
          v-for="topic in getRestaurantName"
          :key="topic"
          :festivalList="topic"
          class="topic"
          @click="getAPI(topic.name)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Topic from "@/components/Topic.vue";
import Button from "@/components/Button.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
// import Swiper from "@/components/Swiper.vue";
import API from "@/service/getApi";
export default {
  name: "Restaurant",
  components: {
    Topic,
    Button,
    Breadcrumb,
    // Swiper,
  },
  data() {
    return {
      apiDataByClass: null,
    };
  },
  computed: {
    getRestaurantName() {
      //取得餐飲的資料
      return this.$store.state.restaurantDatas.restaurantData;
    },
  },
  methods: {
    async getAPI(className) {
      //沒加上async的話，同步程式碼會先執行，造成取不到資料
      this.apiDataByClass = await this.$store.dispatch(
        "restaurantDatas/sendData",
        className
      );
      console.log(this.apiDataByClass);
      this.changeRouter(this.apiDataByClass);
    },
    changeRouter(apiData) {
      console.log("rest");
      this.$router.push({
        name: "Result",
        query: {
          type: apiData[1].Class,
          path: this.$route.name,
        },
      });
    },
    async sendSelectedDatas(data) {
      console.log(data);
      let currentRouter = this.$router.currentRoute.value.name;

      console.log(
        `當前路由為${currentRouter} 此次搜尋的城市是 ${data.city}，關鍵字為：${data.keyword}`
      );
      let recievedAPI = await API.restaurant
        .getFilteredDatas(data.city, data.keyword)
        .then((response) => {
          return response.data;
        });
      console.log("餐廳資料", recievedAPI);

      this.$router.push({
        name: "Result",
        query: {
          city: data.city,
          keyword: data.keyword,
          path: this.$route.name,
        },
      });
    },

    // 原本在元件發API
    // async getDataByClass(className) {
    //   console.log("此次搜尋類別為：", className);
    //   await API.restaurant.getDataByClass(className).then((response) => {
    //     return (this.apiDataByClass = response.data);
    //   });
    //   console.log("取得資料", this.apiDataByClass);
    //   //將資料傳入函式執行
    //   this.changeRouter(this.apiDataByClass);
    // },
  },
  created() {
    console.log("rest");
  },
  // async created() {
  //   await this.$store.dispatch("getActivitiesAPI");
  //   this.apiData = this.$store.state.activitiesData;
  //   console.log("query", this.$router.currentRoute.value.name);
  // },
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";
.restaurant {
  padding: 0 25px;

  @include breakpoints.desktop {
    padding: 0 45px;
  }

  .serach {
    margin: 50px 0;
    // @include breakpoints.desktop {
    //   padding: 0 45px;
    // }
    &_theme {
      font-size: 25px;
      font-weight: 400;
      text-align: start;
      flex: 85%;
      margin-left: 25px;
      @include breakpoints.desktop {
        marign: 0px;
      }
    }
  }
  .topic_container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @include breakpoints.desktop {
      justify-content: start;
    }
  }
}
</style>
