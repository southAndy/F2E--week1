<template>
  <div class="loading skeleton">
    <div class="skeleton"></div>
    <div class="skeleton"></div>
    <div class="skeleton"></div>
    <div class="skeleton"></div>
  </div>
</template>
<script>
export default {
  name: "Loading",
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/loading.scss";

.loading {
  height: 300px;
  width: 100%;
  padding: 300px;
}
.skeleton {
  @extend %skeleton-loading;
}
div.skeleton {
  margin-top: 20px;
  width: 100%;
  height: 100%;
}
div {
  margin-bottom: 20px;
}
</style>
