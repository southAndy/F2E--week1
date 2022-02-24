<template>
  <router-link
    v-if="resturantData"
    class="activities"
    :to="{ name: 'Content' }"
  >
    <div class="activities_image">
      <img :src="resturantData.Picture.PictureUrl1" alt="" />
    </div>
    <h4 class="activities_title">{{ resturantData.RestaurantName }}</h4>
    <span class="activities_location">{{ resturantData.Address }}</span>
  </router-link>
</template>
<script>
export default {
  name: "Screen",
  props: ["resturantData"],
  data() {
    return {
      local: this.resturantData,
    };
  },
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
    img {
      width: 100%;
      height: 100%;
    }
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
