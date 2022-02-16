<template>
  <div class="serach_container">
    <!-- 下拉表單樣式優化 -->
    <select name="請選擇縣市">
      <option value="">請選擇縣市</option>
      <option value="">屏東</option>
      <option value="">高雄</option>
      <option value="">台南</option>
      <option value="">嘉義</option>
    </select>
    <input class="serach_time" type="date" placeholder="請選擇日期" />
    <input
      class="serach_input"
      type="text"
      name=""
      id=""
      placeholder="想找有趣的？請輸入搜尋"
    />
    <button class="serach">
      <div class="serach_icon">
        <img src="@/assets/image/search.svg" alt="放大鏡" />
      </div>
      <span>搜 尋</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "Button",
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/colors.scss";
@use "../assets/sass/breakpoints.scss";

%serach {
  padding: 15px;
  border: 1px solid;
  border-radius: 5px;
  margin-bottom: 15px;
}
.serach_container {
  display: flex;
  flex-direction: column;
  @include breakpoints.desktop {
    flex-direction: row;
  }
  .serach_time {
    @include breakpoints.desktop {
      // flex-direction: row;
      display: none;
    }
  }

  select {
    width: 100%;
    @extend %serach;
    border: 1px solid #e6e6e6;
    @include breakpoints.desktop {
      // flex-direction: row;
      // display: none;
      flex: 0.5;

      margin-right: 15px;
    }
  }

  input {
    @extend %serach;
    border: 1px solid;
  }
  .serach_input {
    background-color: #f9f9f9;
    border: 1px solid #e6e6e6;
    @include breakpoints.desktop {
      // flex-direction: row;
      // display: none;
      flex: 1.5;

      margin-right: 15px;
    }
  }
  .serach {
    display: flex;
    justify-content: center;
    padding: 0 15px;
    // sass 變數值引入用：sass引入名+變數名
    background-color: colors.$primary-color;

    border-radius: 5px;
    border: 1px;
    @include breakpoints.desktop {
      // flex-direction: row;
      // display: none;
      flex: 0.5;
      height: 56px;
    }
    span {
      align-self: center;
      color: white;
      font-size: 20px;
      font-weight: 700;
    }
  }
  .serach_icon {
    @include breakpoints.desktop {
      // flex-direction: row;
      // display: none;
      // flex: 0.5;
      // height: 56px;
      align-self: center;
    }
  }
}
</style>
