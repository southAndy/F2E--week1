<template>
  <div class="search_all" v-if="searchDatas">
    {{ testDatas }}
    <Breadcrumb />
    <Button />
    <div class="serach_amount">
      <h2>搜尋結果</h2>
      <span
        >共有<strong>{{ getTotalAmounts }}</strong
        >筆結果
      </span>
    </div>
    <div class="result_container">
      <router-link
        :to="{
          name: 'Content',
          params: {
            city: 'fake',
            id: amount.ActivityID || amount.ScenicSpotID || amount.RestaurantID,
            name: 'fake',
          },
        }"
        v-for="amount in showDataAmounts"
        :key="amount"
        class="result"
      >
        <div class="result_image">
          <img
            class="mobile"
            src="../assets/image/RestaurantPicture＿mobile.png"
            alt="景點圖片"
          />
          <img
            class="desktop"
            :src="
              amount.Picture.PictureUrl1 ||
              amount.Picture.PictureUrl ||
              amount.Picture.PictureUrl2 ||
              `../assets/image/RestaurantPicture＿desktop.png`
            "
            alt="景點圖片"
          />
          <!-- <img src="../assets/image/RestaurantPicture＿desktop.png" alt="" /> -->
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
    <Pagination :dataLength="searchDatas" @getss="getSearchDatas" />
  </div>
</template>
<script>
import Button from "@//components/Button.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Pagination from "../components/Pagination.vue";

import API from "@/service/getAPI";

export default {
  name: "Result",
  components: { Button, Breadcrumb, Pagination },
  data() {
    return {
      searchDatas: null,
      recivedDatas: null,
      //每頁資料
      dataPerPage: 20,
      currentPage: 1,
    };
  },
  computed: {
    showDataAmounts() {
      //討論的解法
      const start = this.dataPerPage * (this.currentPage - 1);
      const end = this.dataPerPage * this.currentPage;
      let arrayDatas = Array.from(this.searchDatas);
      return arrayDatas.slice(start, end);
    },
    getPageNumber() {
      let arrayDatas = Array.from(this.searchDatas);
      return arrayDatas.length / 20;
    },
    getTotalAmounts() {
      let arrayDatas = Array.from(this.searchDatas);
      console.log(`此次取得的資料為${this.searchDatas.length}筆`);
      return arrayDatas.length;
    },
  },
  methods: {
    getSearchDatas(searchDatas) {
      console.log("get emit?", searchDatas);
      this.currentPage = searchDatas;
    },
  },
  created() {
    let dataID = this.$route.params.type;
    if (dataID.includes("C1")) {
      API.getScenicSpotAPI().then((response) => {
        return (this.searchDatas = response.data);
      });
    }
    if (dataID.includes("C2")) {
      API.getActivitiesAPI().then((response) => {
        return (this.searchDatas = response.data);
      });
    }
    if (dataID.includes("C3")) {
      API.getRestaurantAPI().then((response) => {
        return (this.searchDatas = response.data);
      });
    }
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";
@use "../assets/sass/reset.scss";

.search_all {
  width: 100%;
  @include breakpoints.desktop {
    padding: 0 45px;
  }
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
      width: 250px;

      margin-right: 30px;
      margin-bottom: 30px;
    }
    &_image {
      width: 250px;
      height: 150px;
      // flex: 100%;

      img {
        height: 100%;
        width: 100%;
      }
    }
    &_name {
      font-size: 18px;
      font-weight: 700;
      color: #2f2f2f;
      margin-top: 10px;

      @include breakpoints.desktop {
        font-size: 22px;
        height: 35px;
        //多餘的文字隱藏
        overflow: hidden;
      }
    }
    &_location {
      display: flex;
      height: 16px;
      img {
        height: 100%;
        margin-right: 5px;
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
