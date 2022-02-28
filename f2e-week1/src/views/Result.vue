<template>
  <div class="search_all">
    <Breadcrumb />
    <Button />
    {{ eventDatas }}
    <div class="serach_amount">
      <h2>搜尋結果</h2>
      <span>共有{{ dataAmounts }}筆結果</span>
    </div>
    <router-link :to="{ name: 'Content' }" class="result_container">
      <div class="result" v-for="amount in dataAmounts" :key="amount">
        <div class="result_image">
          <img
            class="mobile"
            src="../assets/image/RestaurantPicture＿mobile.png"
            alt="景點圖片"
          />
          <img
            class="desktop"
            src="../assets/image/RestaurantPicture.png"
            alt="景點圖片"
          />
        </div>
        <p class="result_name">{{ "景點名稱" }}</p>
        <div class="result_location">
          <img src="@/assets/image/Vector.png" alt="座標圖示" />
          <p>{{ "景點位置" }}</p>
        </div>
      </div>
    </router-link>
    <Pagination />
  </div>
</template>
<script>
import Button from "@//components/Button.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Pagination from "../components/Pagination.vue";
export default {
  name: "Result",
  components: { Button, Breadcrumb, Pagination },
  props: ["eventDatas"],
  data() {
    return {
      dataAmounts: 13,
    };
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
  margin-top: 12px;
  margin-bottom: 80px;
  @include breakpoints.desktop {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .result {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    text-align: start;
    @include breakpoints.desktop {
      margin-right: 30px;
      margin-bottom: 30px;
    }
    &_image {
      height: 100%;
      width: 100%;
      flex: 100%;
    }
    &_name {
      font-size: 18px;
      font-weight: 700;
      color: #2f2f2f;
      margin-top: 10px;

      @include breakpoints.desktop {
        font-size: 22px;
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
