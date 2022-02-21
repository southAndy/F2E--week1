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
        class="pagination_group_numbers"
        v-for="page in totalPage"
        :key="page"
      >
        {{ page }}
      </li>
    </ul>
    <div class="pagination_next">
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
      totalPage: 10,
    };
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
  @include breakpoints.desktop {
    height: 32px;
    width: 90%;
  }

  &_group {
    display: flex;

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
