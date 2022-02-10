<template>
  <div class="home">
    <p class="home_title">探索台灣之美 <br />讓我們更親近這片土地</p>
    <Serach />
    <div class="swiper">swiper</div>
    <!-- <Swiper /> -->
    <div class="recent_container">
      <div class="recent">
        <h2 class="recent_title">近期活動</h2>
        <router-link
          :to="{ name: 'Festival' }"
          class="recent_link"
          @click="dropMenu"
          >查看更多活動
          <img src="@/assets/image/Vector.svg" alt="方向鍵>" />
        </router-link>
      </div>
      <!-- 每次只想顯示四筆 -->
      <div class="container">
        <Card
          v-for="(activitiesData, index) in filterActitivties"
          :key="index"
          :activitiesData="activitiesData"
        />
      </div>
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
    </div>
    <div class="recent">
      <h2 class="recent_title">一再回訪的美食</h2>
      <router-link
        :to="{ name: 'Restaurant' }"
        class="recent_link"
        @click="dropMenu"
        >查看更多美食
        <img src="@/assets/image/Vector.svg" alt="方向鍵>" />
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Serach from "@/components/Serach.vue";
import Card from "@/components/Card.vue";

import API from "@/service/getAPI";
// import Swiper from "@/components/Swiper.vue";

export default {
  name: "Home",
  components: {
    Serach,
    Card,
    // Swiper,
  },
  data() {
    return {
      apiData: null,
    };
  },
  methods: {
    filterActitivtiess() {
      const x = Array.from(this.apiData);
      console.log("57", this.apiData);
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
      console.log("57", this.apiData);
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
      console.log("web creating", response);
      return (this.apiData = response.data);
    });
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap");
a {
  text-decoration: none;
}

%activtity {
  display: flex;
  justify-content: space-between;
}

%activity_link {
  color: #ff725e;
  font-size: 15px;
  font-weight: 500;
}
%activity_title {
  font-size: 24px;
  font-weight: 400;
}

.swiper {
  height: 185px;
  width: 100%;
  background-color: chocolate;
}

.home {
  &_title {
    font-size: 28px;
    font-family: Noto Sans TC;
  }

  .recent {
    @extend %activtity;
    margin-top: 24px;
    &_title {
      @extend %activity_title;
    }
    &_link {
      @extend %activity_link;
      align-self: center;
    }
  }
  .container {
    width: 100%;
    height: 312px;

    overflow: hidden;
  }
}
</style>
