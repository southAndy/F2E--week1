<template>
  <div class="serach">
    <select name="" id="" class="select">
      <option value="">探索景點</option>
      <option value="">節慶活動</option>
      <option value="">品嚐美食</option>
    </select>
    <input
      class="serach_input"
      type="text"
      placeholder="你想去哪？請輸入關鍵字"
    />
    <a href="##" class="serach_click">
      <div>
        <img src="@/assets/image/search.svg" alt="放大鏡" />
      </div>
      <span>搜尋</span>
    </a>
  </div>
</template>
<script>
export default {
  name: "Serach",
};
</script>
<style lang="scss" scoped>
$primary-color: #7f977b;
%serach_input {
  width: 100%;
  padding: 15px;
  box-sizing: border-box;

  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
}
.serach {
  width: 345px;
  margin: 0px auto;
  .select {
    @extend %serach_input;
    padding: 15px 11px;
    color: $primary-color;
    font-weight: 500;
  }

  &_input {
    @extend %serach_input;
    background-color: #f9f9f9;
    padding: 15px;
    font-weight: 400;
    font-size: 15px;
  }
  &_click {
    display: flex;
    justify-content: center;
    background-color: $primary-color;
    @extend %serach_input;
    text-decoration: none;

    img {
      margin-right: 10px;
    }
    span {
      color: white;
      font-weight: 700;
      align-self: center;
    }
  }
}
</style>
