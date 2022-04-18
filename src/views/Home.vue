<template>
  <div class="home" v-if="apiData || resturantData || allTouristData">
    <div class="title_container">
      <div>
        <p class="home_title decorate_line">探索台灣之美</p>
        <p class="home_title">讓我們更親近這片土地</p>
        <p class="home_locate">
          <img src="../assets/image/icon.png" alt="地標圖示" />
          台灣旅遊景點導覽
          <span>Taiwan Travel Guide</span>
        </p>
      </div>
      <Serach />
    </div>

    <!-- fix -->
    <div class="carousel" v-if="getScenicSpotCity">
      <Carousel :placeData="getScenicSpotCity" />
    </div>

    <!-- <div class="recent" v-if="apiData">
      <div>
        <h2 class="recent_title">近期活動</h2>
        <router-link
          :to="{ name: 'Festival' }"
          class="recent_link"
          @click="dropMenu"
          >查看更多活動
          <img src="@/assets/image/Vector.svg" alt="方向鍵>" />
        </router-link>
      </div>
      <!<div class="container">
        <Card
          v-for="(activitiesData, index) in filterActitivties"
          :key="index"
          :activitiesData="activitiesData"
        />
      </div> -->
    <!-- </div>  -->
    <div class="recent" v-if="getScenicSpotCity">
      <div>
        <h2 class="recent_title">熱門打卡景點</h2>
        <router-link :to="{ name: 'Activities' }" class="recent_link"
          >查看更多景點
          <img src="@/assets/image/Vector.svg" alt="方向鍵>" />
        </router-link>
      </div>
      <div class="recent_search" v-if="getScenicSpotCity">
        <ScenicSpotCard
          v-for="data in getScenicSpotCity"
          :key="data"
          :scenicSpotAPI="data"
        />
      </div>
    </div>
    <div class="recent" v-if="getResturantCity">
      <div>
        <h2 class="recent_title">一再回訪的美食</h2>
        <router-link :to="{ name: 'Restaurant' }" class="recent_link"
          >查看更多美食
          <img src="@/assets/image/Vector.svg" alt="方向鍵>" />
        </router-link>
      </div>
      <div class="recent_search">
        <RestaurantCard
          v-for="datas in getResturantCity"
          :key="datas"
          :resturantData="datas"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Serach from "@/components/Serach.vue";
// import Card from "@/components/Card.vue";
import ScenicSpotCard from "@/components/ScenicSpotCard.vue";
import RestaurantCard from "@/components/RestaurantCard.vue";
import Carousel from "@/components/Carousel.vue";

import API from "@/service/getAPI";
// import Swiper from "@/components/Swiper.vue";

export default {
  name: "Home",
  components: {
    Serach,
    // Card,
    RestaurantCard,
    // Swiper,
    Carousel,
    ScenicSpotCard,
  },
  data() {
    return {
      allTouristData: [],
      apiData: null,
      resturantData: null,
    };
  },
  methods: {
    filterActitivtiess() {
      const x = Array.from(this.apiData);
      console.log(
        58,
        x.filter((data) => data.Picture.PictureUrl1 != undefined)
      );
      return x.filter((data) => data.Picture.PictureUrl1 != undefined);
    },
    test(className) {
      API.scenicSpot.getDataByClass(className).then((response) => {
        console.log(response);
      });
    },
  },
  computed: {
    filterActitivties() {
      return this.$store.getters.withPictureActivities;

      //元件寫法
      // const x = Array.from(this.apiData);
      // // console.log("57", this.apiData);
      // console.log(
      //   58,
      //   x.filter((data) => data.Picture != {})
      // );
      // return x.filter((data) => data.Picture.PictureUrl1 != undefined);
    },
    getScenicSpotCity() {
      return this.$store.getters.scenicSpotDataWithCity;

      //元件篩選

      // const x = Array.from(this.allTouristData);
      // console.log(
      //   "有城市的資料為",
      //   this.allTouristData.filter((data) => data.City != undefined)
      // );
      // return this.allTouristData.filter((data) => data.City != undefined);
    },
    getResturantCity() {
      console.log("get resturant city .....");
      return this.$store.getters.restaurantDataWithCity;

      //元件篩選

      // return this.$store.getters.withCityData;

      // const x = Array.from(this.resturantData);
      // // console.log("57", this.apiData);
      // console.log(
      //   58,
      //   x.filter((data) => data.City != undefined)
      // );
      // return x.filter((data) => data.City != undefined);
    },
  },

  async created() {
    await this.$store.dispatch("getActivitiesAPI");
    await this.$store.dispatch("getScenicSpotAPI");
    await this.$store.dispatch("getRestaurantAPI");

    // let x = this.$store.getters.withPictureActivities;
    // this.$store.actions.getAPI();
    // console.log(157, x);
    //取得特定API資料
    // API.getActivitiesAPI().then((response) => {
    //   return (this.apiData = response.data);
    // });
    // API.getRestaurantAPI().then((response) => {
    //   return (this.resturantData = response.data);
    // });
    // API.getScenicSpotAPI().then((response) => {
    //   return (this.allTouristData = response.data);
    // });
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap");
a {
  text-decoration: none;
}
.home {
  display: flex;
  flex-direction: column;
  @include breakpoints.desktop {
    padding: 0 45px 120px 45px;
  }
}

%activtity {
  display: flex;
  justify-content: space-between;
  @include breakpoints.desktop {
    justify-content: flex-start;
  }
}

%activity_link {
  color: #ff725e;
  font-size: 15px;
  font-weight: 500;
  @include breakpoints.desktop {
    margin-right: 30px;
  }
}
%activity_title {
  font-size: 24px;
  font-weight: 400;
}

.swiper {
  height: 185px;
  width: 100%;
  background-color: wheat;

  @include breakpoints.desktop {
    height: 400px;
  }
}

.home {
  .title_container {
    margin: 20px 0;
    @include breakpoints.desktop {
      display: flex;
      justify-content: center;
      padding: 80px;
    }
    &:first-child {
      &::after {
        padding: 5px 0;
        height: 1px;
        width: 30px;
        display: block;
      }
    }
  }
  &_title {
    font-size: 20px;
    font-weight: 600;
    margin: 0;

    @include breakpoints.desktop {
      font-size: 35px;
      text-align: start;
    }
  }
  p.decorate_line::after {
    padding: 5px 0;
    height: 1px;
    width: 30px;
    display: block;
  }
  &_locate {
    margin-top: 20px;
    text-align: center;
    @include breakpoints.desktop {
      text-align: start;
    }
  }

  .recent {
    flex-wrap: wrap;
    @extend %activtity;
    margin-top: 24px;

    & > div {
      display: flex;
      margin-bottom: 12px;
      width: 100%;
      // color: red;
    }

    &_title {
      @extend %activity_title;
      flex: 50%;
      text-align: start;
    }
    &_link {
      @extend %activity_link;
      align-self: center;
      flex: 50%;
      text-align: end;
    }
    &_search {
      display: flex;
      overflow: hidden;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 340px;

    overflow: hidden;

    @include breakpoints.desktop {
      flex-wrap: wrap;
      height: 350px;
      justify-content: center;
    }
  }
}
</style>
