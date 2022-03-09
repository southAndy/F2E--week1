<template>
  <div class="pagination">
    <button
      class="pagination_previous"
      @click="switchToPreviousPage"
      :disabled="currentPage <= 1 ? true : false"
    >
      <img src="@/assets/image/disabled.png" alt="上一頁按鈕" />
    </button>
    <ul class="pagination_group" v-if="searchDatas">
      <li
        :class="['pagination_group_numbers', { current: currentPage === page }]"
        v-for="page in getPageNumber"
        :key="page"
        @click="switchPage(page)"
      >
        {{ page }}
      </li>
    </ul>
    <button
      class="pagination_next"
      @click="switchToNextPage"
      :disabled="currentPage >= 15 ? true : false"
    >
      <img src="@/assets/image/master.png" alt="下一頁按鈕" />
    </button>
  </div>
</template>
<script>
export default {
  name: "Pagination",
  props: ["dataLength"],
  data() {
    return {
      totalPage: 9,
      currentPage: 1,
      testArr: null,
      searchDatas: this.dataLength,
      dataPerPage: 20,
    };
  },
  computed: {
    getPageNumber() {
      let arrayDatas = Array.from(this.searchDatas);
      return Math.ceil(arrayDatas.length / 20);
    },
  },
  methods: {
    switchPage(page) {
      console.log(`當前頁數為 第${page}頁`);
      this.currentPage = page;

      this.$emit("getss", this.currentPage);
    },
    switchToNextPage() {
      console.log(`現在當前頁面為${this.currentPage}，往下一頁`);
      this.currentPage++;
      this.$emit("getss", this.currentPage);
    },

    switchToPreviousPage() {
      console.log(`現在當前頁面為${this.currentPage}，往上一頁`);
      this.currentPage--;
      this.$emit("getss", this.currentPage);
    },
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
