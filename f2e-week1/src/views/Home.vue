<template>
  <div class="home">
    <Navbar />
    <p class="home_title">探索台灣之美 <br />讓我們更親近這片土地</p>
    <Serach />
    <div class="swiper">swiper</div>
    <!-- <Swiper /> -->
    <div class="recent">
      <h2 class="recent_title">近期活動</h2>
      <a class="recent_link" href="##">
        查看更多活動
        <img src="@/assets/image/Vector.svg" alt="方向鍵>" />
      </a>
    </div>
    <!-- 每次只想顯示四筆 -->
    <div class="container">
      <Card
        v-for="(data, index) in filterActitivties"
        :key="index"
        :apiData="apiData"
      />
    </div>
    <footer>
      <p>#The F2E 3rd Week01 #Breakfast</p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Serach from "@/components/Serach.vue";
import Card from "@/components/Card.vue";

import API from "@/service/getAPI";
// import Swiper from "@/components/Swiper.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Serach,
    Card,
    // Swiper,
  },
  data() {
    return {
      apiData: null,
    };
  },
  methods: {},
  computed: {
    //!篩選有相片的活動
    //為何不能
    filterActitivties() {
      const x = Array.from(this.apiData);
      console.log(
        58,
        x.filter((data) => data.Picture.PictureUrl1 != undefined)
      );
      return x.filter((data) => data.Picture.PictureUrl1 != undefined);
    },
  },

  created() {
    //取得特定API資料
    API.getActivitiesAPI().then((response) => {
      console.log(67, response.data);
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
    height: 600px;

    overflow: hidden;
  }
}
</style>
