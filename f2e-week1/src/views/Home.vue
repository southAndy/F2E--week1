<template>
  <div class="home">
    <div class="title_container">
      <div>
        <p class="home_title">探索台灣之美 <br />讓我們更親近這片土地</p>
        <p>
          <img src="../assets/image/icon.png" alt="地標圖示" />
          台灣旅遊景點導覽
          <span>Taiwan Travel Guide</span>
        </p>
      </div>
      <Serach />
    </div>
    <div class="carousel">
      <Carousel />
    </div>
    <div class="recent">
      <h2 class="recent_title">近期活動</h2>
      <router-link
        :to="{ name: 'Festival' }"
        class="recent_link"
        @click="dropMenu"
        >查看更多活動
        <img src="@/assets/image/Vector.svg" alt="方向鍵>" />
      </router-link>
      <!-- 每次只想顯示四筆 -->
      <router-link
        class="container"
        :to="{
          name: 'Content',
          params: { id: activitiesData },
        }"
      >
        <Card
          v-for="(activitiesData, index) in filterActitivties"
          :key="index"
          :activitiesData="activitiesData"
        />
      </router-link>
    </div>
    <!-- !改寫複用性高的css -->
    <div class="recent">
      <h2 class="recent_title">熱門打卡景點</h2>
      <router-link
        :to="{ name: 'Activities' }"
        class="recent_link"
        @click="dropMenu"
        >查看更多景點
        <img src="@/assets/image/Vector.svg" alt="方向鍵>" />
      </router-link>
      <div class="recent_search">
        <Screen
          v-for="data in resturantData"
          :key="data"
          :resturantData="data"
        />
      </div>
    </div>
    <div class="recent">
      <h2 class="recent_title">一再回訪的美食</h2>
      <router-link :to="{ name: 'Restaurant' }" class="recent_link"
        >查看更多美食
        <img src="@/assets/image/Vector.svg" alt="方向鍵>" />
      </router-link>
      <div class="recent_search">
        <Screen
          v-for="datas in resturantData"
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
import Card from "@/components/Card.vue";
import Screen from "@/components/Screen.vue";
import Carousel from "@/components/Carousel.vue";

import API from "@/service/getAPI";
// import Swiper from "@/components/Swiper.vue";

export default {
  name: "Home",
  components: {
    Serach,
    Card,
    Screen,
    // Swiper,
    Carousel,
  },
  data() {
    return {
      allTouristData: null,
      apiData: null,
      resturantData: null,
    };
  },
  methods: {
    filterActitivtiess() {
      const x = Array.from(this.apiData);
      // console.log("57", this.apiData);
      console.log(
        58,
        x.filter((data) => data.Picture.PictureUrl1 != undefined)
      );
      return x.filter((data) => data.Picture.PictureUrl1 != undefined);
    },
  },
  computed: {
    //!篩選有相片的活動
    //為何不能
    filterActitivties() {
      const x = Array.from(this.apiData);
      // console.log("57", this.apiData);
      console.log(
        58,
        x.filter((data) => data.Picture != {})
      );
      return x.filter((data) => data.Picture.PictureUrl1 != undefined);
    },
  },

  created() {
    //取得特定API資料
    API.getActivitiesAPI().then((response) => {
      return (this.apiData = response.data);
    });
    API.getRestaurantAPI().then((response) => {
      return (this.resturantData = response.data);
    });
    API.getScenicSpotAPI().then((response) => {
      return (this.allTouristData = response.data);
    });
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
    @include breakpoints.desktop {
      display: flex;
      justify-content: center;
      padding: 80px;
    }
  }
  &_title {
    font-size: 28px;
    font-family: Noto Sans TC;
    @include breakpoints.desktop {
      font-size: 35px;
      text-align: start;
      margin: 0;
    }
  }

  .recent {
    flex-wrap: wrap;
    @extend %activtity;
    margin-top: 24px;

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
    width: 100%;
    height: 312px;

    overflow: hidden;

    @include breakpoints.desktop {
      display: flex;
      flex-wrap: wrap;
      height: 350px;
      justify-content: center;
    }
  }
}
</style>
