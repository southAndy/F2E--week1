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
      <img src="@/assets/image/search.svg" alt="放大鏡" />
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
%serach_input {
  width: 90%;
  height: 50px;
  padding: 15px 11px;
}
.serach {
  .select {
    @extend %serach_input;
  }

  &_input {
    @extend %serach_input;
  }
}
</style>
