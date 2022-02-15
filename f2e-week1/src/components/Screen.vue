<template>
  <router-link
    class="activities"
    to="{name: 'Content', params: { id: changeDataType }"
  >
    <div class="activities_image"><img src="##" alt="" /></div>
    <h4 class="activities_title">{{ "title" }}</h4>
    <span class="activities_location">{{ "地點" }}</span>
  </router-link>
</template>
<script>
export default {
  name: "Screen",
};
</script>
<style lang="scss" scoped>
.activities {
  display: flex;
  flex-direction: column;
  flex: 100%;

  margin-right: 16px;

  &_image {
    background-color: wheat;
    width: 220px;
    height: 160px;
    border-radius: 20px;
  }
  &_title {
    text-align: start;
    font-weight: 700;
    font-size: 18px;
    color: black;
    margin: 0;
  }
  &_location {
    text-align: start;
    font-weight: 400;
    font-size: 18px;
    color: black;
  }
}
</style>
