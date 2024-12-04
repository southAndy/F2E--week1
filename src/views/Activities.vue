<template>
  <div class="activities">
    <Breadcrumb />
    <Button :cityData="apiData" @getSelected="sendSelectedDatas" />
    <div class="serach">
      <div class="topic_container">
        <h3 class="serach_theme">熱門主題</h3>
        <Topic
          v-for="topic in getActivitiyNames"
          :key="topic"
          :festivalList="topic"
          class="topic"
          @click="getDataByClass(topic.name)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Topic from "@/components/Topic.vue";
import Button from "@/components/Button.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

import API from "@/service/getApi.js";

export default {
  name: "Activities",
  components: {
    Topic,
    Button,
    Breadcrumb,
  },
  data() {
    return {
      apiDataByClass: null,
      apiData: [],
      selectedData: null,
    };
  },
  computed: {
    getActivitiyNames() {
      return this.$store.state.activitiesDatas.activitiesData;
    },
    getRouter() {
      return this.$router.query;
    },
  },
  methods: {
    async getDataByClass(className) {
      console.log(className);
      this.apiDataByClass = await this.$store.dispatch(
        "festivalDatas/sendData",
        className
      );
      console.log(55, "類別", this.apiDataByClass);
      this.changeRouter(this.apiDataByClass);
    },
    changeRouter(apiData) {
      console.log("觸發跳轉前");
      console.log(this.$route.name);
      this.$router.push({
        name: "Result",
        query: {
          type: apiData[1].Class1,
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
      let recievedAPI = await API.activities
        .getFilteredDatas(data.city, data.keyword)
        .then((response) => {
          return response.data;
        });
      console.log(recievedAPI);

      this.$router.push({
        name: "Result",
        query: {
          city: data.city,
          keyword: data.keyword,
          path: this.$route.name,
        },
      });
    },
  },
  created() {
    console.log("hi");
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
.activities {
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
