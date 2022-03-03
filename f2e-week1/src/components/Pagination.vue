<template>
  <div class="pagination">
    <!-- <div class="pagination_first">
      <img src="" alt="回到第一頁按鈕" />
    </div> -->
    <button
      class="pagination_previous"
      @get-search-data="switchToPreviousPage"
      :disabled="currentPage <= 1 ? true : false"
    >
      <!-- <i class="fa-solid fa-square-right"></i> -->
      <img src="@/assets/image/disabled.png" alt="上一頁按鈕" />
    </button>
    <ul class="pagination_group">
      <li
        :class="['pagination_group_numbers', { current: currentPage === page }]"
        v-for="page in totalPage"
        :key="page"
        @click="switchPage(page)"
      >
        {{ page }}
      </li>
    </ul>
    <button class="pagination_next" @click="switchToNextPage">
      <img src="@/assets/image/master.png" alt="下一頁按鈕" />
    </button>
    <!-- <div class="pagination_final">
      <img src="" alt="到最後一頁按鈕" />
    </div> -->
  </div>
</template>
<script>
import API from "@/service/getAPI";

export default {
  name: "Pagination",
  data() {
    return {
      totalPage: 9,
      currentPage: 1,
      testArr: null,
      searchDatas: null,
      dataIndex: 0,
    };
  },
  computed: {
    showDataAmounts() {
      let arrayDatas = Array.from(this.searchDatas);
      // let x =
      // let x = 0;
      console.log(this.dataIndex);
      return arrayDatas.slice(this.dataIndex, this.dataIndex + 20);
    },
  },
  methods: {
    switchPage(page) {
      console.log("換頁", page);
      this.currentPage = page;
      this.dataIndex = this.dataIndex + 20;
      console.log(60, this.dataIndex);
      console.log(this.currentPage);
      this.$emit("getss", this.showDataAmounts);
      console.log(this.currentPage === 4);
    },
    switchToNextPage() {
      console.log("switching");
      //頁數加一
      this.currentPage++;
      console.log(this.currentPage);
    },
    switchToPreviousPage() {
      console.log("往前移動");
      this.currentPage--;
      console.log(this.currentPage);
    },
  },
  created() {
    let dataID = this.$route.params.type;
    console.log(dataID, 77);
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
%switch-button {
  border: 1px;
  width: 32px;
  height: 32px;
  border-radius: 6px;
}
.pagination {
  display: flex;
  justify-content: center;

  width: 270px;
  height: 32px;
  margin: 0 auto;
  @include breakpoints.desktop {
    height: 32px;
    width: 90%;
  }

  &_previous {
    @extend %switch-button;
    margin-right: 5px;
    cursor: pointer;
    img {
      height: 100%;
      width: 100%;
    }
  }
  &_next {
    @extend %switch-button;
    background-color: #7f977b;
    cursor: pointer;
    img {
      height: 100%;
      width: 100%;
    }
  }

  &_group {
    display: flex;

    // 當前頁面的effect
    .current {
      background-color: #7f977b;
      color: #fff;
    }

    &_numbers {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 32px;
      height: 32px;
      background-color: #ffffff;
      border: 1px solid #e5e5e5;
      border-radius: 4px;

      margin-right: 5px;

      align-self: center;
      cursor: pointer;
      &:hover {
        background-color: #7f977b;
        color: #ffff;
      }
    }
  }
}
</style>
