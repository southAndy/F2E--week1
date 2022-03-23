<template>
  <div class="restaurant">
    <Breadcrumb />
    <Button />
    <!-- <Swiper /> -->
    <div class="serach">
      <div class="topic_container">
        <h3 class="serach_theme">熱門主題</h3>
        <Topic
          v-for="topic in festivalData"
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
// import Swiper from "@/components/Swiper.vue";

import API from "@/service/getAPI";

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
      festivalData: [
        // ~ok
        {
          name: "地方特產",
          image: require("../assets/image/Rectangle 93.svg"),
        },
        {
          name: "中式美食",
          image: require("../assets/image/unsplash_qDZ-Xd8dX6w.png"),
        },
        {
          name: "甜點冰品",
          image: require("../assets/image/unsplash_pn5c-CLWGzY.svg"),
        },
        {
          name: "異國料理",
          image: require("../assets/image/unsplash_qDBbM9Erwo4.svg"),
        },
        {
          name: "伴手禮",
          image: require("../assets/image/unsplash_qDZ-Xd8dX6w.png"),
        },
        {
          name: "素食",
          image: require("../assets/image/unsplash_qDZ-Xd8dX6w.svg"),
        },
      ],
      apiDataByClass: null,
    };
  },
  methods: {
    async getDataByClass(className) {
      console.log("此次搜尋類別為：",className);
      await API.restaurant.getDataByClass(className).then((response) => {
        return (this.apiDataByClass = response.data);
      });
      console.log(this.apiDataByClass);
      this.$router.push({
        name: "Result",
        params: {
          id: this.apiDataByClass[0].RestaurantID,
          type: this.apiDataByClass[1].Class,
        },
        query: {
          type: this.apiDataByClass[1].Class,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";
.restaurant {
  padding: 0 25px;

  @include breakpoints.desktop{
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
