<template>
  <div class="home">
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
    <div class="carousel">
        <Carousel :placeData="test" :isLoading="loadingState" />
    </div>
    <div class="recent">
      <div>
        <h2 class="recent_title">近期活動</h2>
        <router-link
          :to="{ name: 'Activity' }"
          class="recent_link"
          >查看更多活動
          <img src="@/assets/image/Vector.svg" alt="方向鍵>" />
        </router-link>
      </div>
      <div class="container">
        <Card
          v-for="(data, index) in scenicSpotCity"
          :key="index"
          :dataId='data.ScenicSpotID'
          :dataName="data.ScenicSpotName"
          :dataCity="data.City"
          :dataPicture="data.Picture.PictureUrl1"
          :dataStartTime="data.StartTime"
          :dataEndTime="data.EndTime"
          :isLoading="loadingState"
        />
      </div>
    </div>
    <div class="recent">
      <div>
        <h2 class="recent_title">熱門打卡景點</h2>
        <router-link
          :to="{
            name: 'ScenicSpot',
          }"
          class="recent_link"
          >查看更多景點
          <img src="@/assets/image/Vector.svg" alt="方向鍵>" />
        </router-link>
      </div>
      <div class="recent_search">

      </div>
    </div>
    <div class="recent">
      <div>
        <h2 class="recent_title">一再回訪的美食</h2>
        <router-link :to="{ name: 'Restaurant' }" class="recent_link"
          >查看更多美食
          <img src="@/assets/image/Vector.svg" alt="方向鍵>" />
        </router-link>
      </div>
      <div class="recent_search">
       <ScenicSpotCard v-for="data,index in scenicSpotCity" :key="data.ScenicSpotID" :dataId='data.ScenicSpotID'
          :dataName="data.ScenicSpotName"
          :dataCity="data.City"
          :dataPicture="data.Picture.PictureUrl1"
          :dataStartTime="data.StartTime"
          :dataEndTime="data.EndTime"
          :isLoading="loadingState" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Serach from "@/components/Serach.vue";
import Card from "@/components/Card.vue";
import Carousel from "@/components/Carousel.vue";
import ScenicSpotCard from "@/components/ScenicSpotCard.vue";
import { useStore } from "vuex";

const store = useStore();

const loadingState = computed(() => store.state.isLoading);
const scenicSpotCity = computed(() => store.getters.scenicSpotDataWithCity);
const test = computed(() => {
  const scenicSpots = store.getters.scenicSpotDataWithCity;
  return scenicSpots.length > 0 ? scenicSpots.slice(0, 3) : [];
});

onMounted(async () => {
  try {
    await store.dispatch("getScenicSpotAPI");
  } catch (e) {
    console.log(e);
  }
});
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";
@use "../assets/sass/loading.scss";
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
.skeleton {
  @extend %skeleton-loading;
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
      overflow: scroll;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 340px;

    overflow: scroll;
    @include breakpoints.tablet {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5px;
    }

    @include breakpoints.desktop {
      flex-direction: unset;
      height: 350px;
      justify-content: center;
    }
  }
}
</style>
