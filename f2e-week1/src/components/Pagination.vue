<template>
  <div class="pagination">
    <!-- <div class="pagination_first">
      <img src="" alt="回到第一頁按鈕" />
    </div> -->
    <div class="pagination_previous">
      <i class="fa-solid fa-square-right"></i>
      <img src="@/assets/image/disabled.png" alt="上一頁按鈕" />
    </div>
    <ul class="pagination_group">
      <li
        :class="['pagination_group_numbers', { current: currentPage === page }]"
        v-for="page in totalPage"
        :key="page"
        :aria-page="page"
        @click="switchPage(page)"
      >
        {{ page }}
      </li>
    </ul>
    <div class="pagination_next" @click="switchToNextPage">
      <img src="@/assets/image/master.png" alt="下一頁按鈕" />
    </div>
    <!-- <div class="pagination_final">
      <img src="" alt="到最後一頁按鈕" />
    </div> -->
  </div>
</template>
<script>
export default {
  name: "Pagination",
  data() {
    return {
      totalPage: 9,
      currentPage: 1,
      test: 1,
    };
  },
  methods: {
    switchPage(page) {
      console.log("換頁", page, typeof page);
      this.currentPage = page;
      console.log(this.currentPage);
      // console.log(this.currentPage === 4);
    },
    switchToNextPage() {
      console.log("switching");
      //頁數加一
      this.currentPage++;
      console.log(this.currentPage);
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";
@use "../assets/sass/reset.scss";

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
    margin-right: 5px;
    cursor: pointer;
  }
  &_next {
    cursor: pointer;
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
