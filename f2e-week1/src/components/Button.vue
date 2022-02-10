<template>
  <div class="serach_container">
    <!-- 下拉表單樣式優化 -->
    <select name="請選擇縣市" id="">
      <option value="">請選擇縣市</option>
      <option value="">屏東</option>
      <option value="">高雄</option>
      <option value="">台南</option>
      <option value="">嘉義</option>
    </select>
    <input type="date" placeholder="請選擇日期" />
    <input
      class="serach_input"
      type="text"
      name=""
      id=""
      placeholder="想找有趣的？請輸入搜尋"
    />
    <button class="serach">
      <div>
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
%serach {
  padding: 15px;
  border: 1px solid;
  border-radius: 5px;
  margin-bottom: 15px;
}
.serach_container {
  display: flex;
  flex-direction: column;

  select {
    width: 100%;
    @extend %serach;
    border: 1px solid;
  }

  input {
    @extend %serach;
    border: 1px solid;
  }
  .search_input {
    background-color: #f9f9f9;
  }
  .serach {
    display: flex;
    justify-content: center;
    padding: 15px;
    // sass 變數值引入用：sass引入名+變數名
    background-color: colors.$primary-color;

    border-radius: 5px;
    border: 1px;
    span {
      align-self: center;
      color: white;
      font-size: 20px;
      font-weight: 700;
    }
  }
}
</style>
