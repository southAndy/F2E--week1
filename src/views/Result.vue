<template>
  <div class="search_all" :class="{ skeleton: getAPI }">
    <Loading v-if="getAPI" class="skeleton" />
    <Breadcrumb v-if="recievedAPI" />
    <div class="serach_amount" v-if="recievedAPI">
      <h2>搜尋結果</h2>
      <span
        >共有<strong>{{ getTotalAmounts }}</strong
        >筆結果
      </span>
    </div>
    <!-- 渲染API部分 -->
    <div class="result_container">
      <router-link
        :to="{
          name: 'Content',
          params: {
            city: amount.City,
            id: amount.ActivityID || amount.ScenicSpotID || amount.RestaurantID,
            name:
              amount.ActivityName ||
              amount.ScenicSpotName ||
              amount.RestaurantName,
          },
        }"
        v-for="amount in showDataAmounts"
        :key="amount"
        class="result"
      >
        <div class="result_image" :class="{ skeleton: getAPI }">
          <img
            class="mobile"
            :src="
              amount.Picture.PictureUrl1 ||
              amount.Picture.PictureUrl ||
              amount.Picture.PictureUrl2 ||
              noPicAPIMobileSize
            "
            alt="景點圖片"
          />
          <img
            class="desktop"
            :src="
              amount.Picture.PictureUrl1 ||
              amount.Picture.PictureUrl ||
              amount.Picture.PictureUrl2 ||
              noPictureImageUrl
            "
            alt="景點圖片"
          />
        </div>
        <p class="result_name">
          {{
            amount.ActivityName ||
            amount.ScenicSpotName ||
            amount.RestaurantName
          }}
        </p>
        <div class="result_location">
          <img src="@/assets/image/Vector.png" alt="座標圖示" />
          <p>{{ amount.Address }}</p>
        </div>
      </router-link>
    </div>
    <Pagination
      v-if="recievedAPI"
      :dataLength="searchDatas"
      @getss="getSearchDatas"
    />
  </div>
</template>
<script>
// import Button from "@//components/Button.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Pagination from "../components/Pagination.vue";
import Loading from "../components/Loading.vue";

import API from "@/service/getAPI";

export default {
  name: "Result",
  components: { Breadcrumb, Pagination, Loading },
  data() {
    return {
      searchDatas: [],
      dataPerPage: 20,
      currentPage: 1,
      selecedCity: this.$route.query.city || null,
      inputedKeyword: this.$route.query.keyword || null,
      previousPath: this.$route.query.path || null,
      recievedAPI: false,
      getAPI: true,

      //沒有照片的圖檔資料
      noPictureImageUrl: require("@/assets/image/RestaurantPicture.png"),
      noPicAPIMobileSize: require("@/assets/image/RestaurantPicture＿mobile.png"),
    };
  },
  computed: {
    //每頁拆分資料方式
    showDataAmounts() {
      //討論的解法
      const start = this.dataPerPage * (this.currentPage - 1);
      const end = this.dataPerPage * this.currentPage;
      let arrayDatas = Array.from(this.searchDatas);
      return arrayDatas.slice(start, end);
    },
    // getPageNumber() {
    //   //依據資料決定共有幾頁
    //   let arrayDatas = Array.from(this.searchDatas);
    //   console.log(89, Math.ceil(arrayDatas.length / 20));
    //   return Math.ceil(arrayDatas.length / 20);
    // },
    getTotalAmounts() {
      // let arrayDatas = Array?.from(this.searchDatas);
      // console.log(arrayDatas);
      console.log(`此次取得的資料數量為${this.searchDatas?.length}筆`);
      // return arrayDatas.length;
      return this.searchDatas.length;
    },
  },
  methods: {
    //取得當前的頁數
    getSearchDatas(searchDatas) {
      console.log("get emit?", searchDatas);
      this.currentPage = searchDatas;
    },
  },
  async created() {
    console.log(
      this.$route.query.city,
      this.$route.query.keyword,
      this.$route.query.path,
      this.$route.query.id
    );
    //? 1.有關鍵字或縣市
    if (
      this.$route.query.city !== undefined ||
      this.$route.query.keyword !== undefined
    ) {
      console.log(`有縣市或是關鍵字`);
      if (this.previousPath === "ScenicSpot") {
        console.log("景點");
        return await API.scenicSpot
          .getFilteredDatas(this.$route.query.city, this.$route.query.keyword)
          .then((response) => {
            setTimeout(() => {
              this.getAPI = false;
            }, 8000);
            return (this.searchDatas = response.data);
          });
      }
      if (this.previousPath === "Restaurant") {
        console.log("餐廳");
        return await API.restaurant
          .getFilteredDatas(this.$route.query.city, this.$route.query.keyword)
          .then((response) => {
            setTimeout(() => {
              this.getAPI = false;
            }, 8000);
            return (this.searchDatas = response.data);
          });
      }
      if (this.previousPath === "Activity") {
        console.log("活動");
        return await API.activities
          .getFilteredDatas(this.$route.query.city, this.$route.query.keyword)
          .then((response) => {
            setTimeout(() => {
              this.getAPI = false;
            }, 8000);
            return (this.searchDatas = response.data);
          });
      }
    }
    //? 2.單純的活動類別
    if (this.$route.query.id?.includes("C1")) {
      console.log("C1 getScenicSpotAPI");
      return await API.getScenicSpotAPI().then((response) => {
        setTimeout(() => {
          this.getAPI = false;
        }, 8000);
        return (this.searchDatas = response.data);
      });
    }
    if (this.$route.query.id?.includes("C2")) {
      console.log("C2 getActivitiesAPI");
      return await API.getActivitiesAPI().then((response) => {
        setTimeout(() => {
          this.getAPI = false;
        }, 8000);
        return (this.searchDatas = response.data);
      });
    }
    if (this.$route.query.id?.includes("C3")) {
      console.log("C3 getRestaurantAPI");
      return await API.getRestaurantAPI().then((response) => {
        setTimeout(() => {
          this.getAPI = false;
        }, 8000);
        return (this.searchDatas = response.data);
      });
    }
    //? 3.主題類別
    console.log(this.$route.query.type);
    if (this.$route.query.type !== "") {
      console.log("got class");
      if (this.$route.query.path === "ScenicSpot") {
        return await API.scenicSpot
          .getDataByClass(this.$route.query.type)
          .then((response) => {
            setTimeout(() => {
              this.getAPI = false;
              this.recievedAPI = true;
              return (this.searchDatas = response.data);
            }, 4000);
          });
      }
      if (this.$route.query.path === "Activity") {
        return await API.activities
          .getDataByClass(this.$route.query.type)
          .then((response) => {
            setTimeout(() => {
              this.getAPI = false;
              this.recievedAPI = true;
            }, 1000);
            return (this.searchDatas = response.data);
          });
      }
      if (this.$route.query.path === "Restaurant") {
        return await API.restaurant
          .getDataByClass(this.$route.query.type)
          .then((response) => {
            setTimeout(() => {
              this.getAPI = false;
              this.recievedAPI = true;
            }, 1000);
            return (this.searchDatas = response.data);
          });
      }
    }
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";
@use "../assets/sass/reset.scss";
@use "../assets/sass/loading.scss";

.skeleton {
  @extend %skeleton-loading;
}

.search_all {
  position: relative;
  width: 100%;
  @include breakpoints.desktop {
    padding: 0 45px;
  }
  // .loading {
  //   position: absolute;
  //   z-index: 1;

  //   height: 100%;
  //   width: 100%;
  //   background-color: aqua;
  //   box-sizing: border-box;
  //   left: -3px;
  //   top: -25px;
  // }
}
p {
  margin: 0;
}
.serach_amount {
  display: flex;
  margin-top: 30px;
  margin-bottom: 50px;
  @include breakpoints.desktop {
  }

  h2 {
    font-weight: 400;
    font-size: 32px;
    margin: 0;
  }

  span {
    align-self: flex-end;
    font-size: 18px;
    margin-left: 10px;
  }
}
.result_container {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 75%;

  margin-top: 12px;
  margin-bottom: 80px;
  @include breakpoints.desktop {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .result {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    text-align: start;
    @include breakpoints.desktop {
      width: 235px;

      margin-right: 30px;
      margin-bottom: 30px;
    }
    &_image {
      border-radius: 20px;
      width: 100%;
      height: 140px;
      @include breakpoints.tablet {
        height: 340px;
      }
      @include breakpoints.desktop {
        width: 250px;
        height: 150px;
      }
      opacity: 0.5;
      &:hover {
        opacity: 1.5;
      }

      img {
        height: 100%;
        width: 100%;
        border-radius: 20px;
      }
    }
    &_name {
      font-size: 18px;
      font-weight: 700;
      color: #2f2f2f;
      margin-top: 10px;

      @include breakpoints.desktop {
        font-size: 18px;
        height: 30px;
        //多餘的文字隱藏
        overflow: hidden;
      }
    }
    &_location {
      display: flex;
      height: 20px;

      overflow: hidden;
      img {
        height: 100%;
        margin-right: 5px;
        object-fit: scale-down;
      }
      p {
        font-size: 15px;
        font-weight: 400;
        color: #646464;
      }
    }
    &_image {
      .mobile {
        display: block;
        @include breakpoints.desktop {
          display: none;
        }
      }
      .desktop {
        display: none;
        @include breakpoints.desktop {
          display: block;
        }
      }
    }
  }
}
</style>
