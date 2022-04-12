<template>
  <div class="festival">
    <Breadcrumb />
    <Button @getSelected="sendSelectedDatas" />
    <div class="serach">
      <div class="topic_container">
        <h3 class="serach_theme">熱門主題</h3>
        <Topic
          v-for="topic in getFestivalNames"
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

import API from "@/service/getAPI";

export default {
  name: "Festival",
  components: {
    Topic,
    Button,
    Breadcrumb,
  },
  data() {
    return {
      apiDataByClass: null,
    };
  },
  computed: {
    getFestivalNames() {
      return this.$store.state.festivalDatas.festivalData;
    },
  },
  methods: {
    async getDataByClass(className) {
      this.apiDataByClass = await this.$store.dispatch(
        "festivalDatas/sendData",
        className
      );
      console.log(this.apiDataByClass);
      this.changeRouter(this.apiDataByClass);

      // 在元件呼叫API版
      // await API.activities.getDataByClass(className).then((response) => {
      //   return (this.apiDataByClass = response.data);
      // });
      // console.log(this.apiDataByClass);
      // this.$router.push({
      //   name: "Result",
      //   params: {
      //     id: this.apiDataByClass[0].ActivityID,
      //     type: this.apiDataByClass[1].Class1,
      //   },
      //   query: {
      //     type: this.apiDataByClass[1].Class1,
      //   },
      // });
    },
    async sendSelectedDatas(data) {
      console.log(data);
      let currentRouter = this.$router.currentRoute.value.name;

      console.log(
        `當前路由為${currentRouter} 此次搜尋的城市是 ${data.city}，關鍵字為：${data.keyword}`
      );
      let recievedAPI = await API.scenicSpot
        .getFilteredDatas(data.city, data.keyword)
        .then((response) => {
          return response.data;
        });
      console.log("節慶資料", recievedAPI);
      console.log(this.$route.name);
      this.$router.push({
        name: "Result",
        query: {
          city: data.city,
          keyword: data.keyword,
          path: this.$route.name,
        },
      });
    },
    changeRouter(apiData) {
      this.$router.push({
        name: "Result",
        params: {
          id: apiData[0].ActivityID,
          type: apiData[1].Class1,
        },
        query: {
          type: apiData[1].Class1,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";
.festival {
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
