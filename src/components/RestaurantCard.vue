<template>
  <router-link
    v-if="resturantData"
    class="activities"
    :to="{
      name: 'Content',
      params: {
        city: resturantData.City,
        id: resturantData.RestaurantID,
        name: resturantData.RestaurantName,
      },
    }"
  >
    <div
      class="activities_imagebox"
      :class="{ skeleton: this.$store.state.isLoading }"
    >
      <img :src="resturantData.Picture.PictureUrl1" alt="" />
    </div>
    <h4 class="activities_title">{{ resturantData.RestaurantName }}</h4>
    <span class="activities_location">{{ resturantData.City }}</span>
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
@use "../assets/sass/loading.scss";
.skeleton {
  @extend %skeleton-loading;
}
.activities {
  display: flex;
  flex-direction: column;
  flex: 100%;

  margin-right: 16px;

  &_imagebox {
    // background-color: wheat;
    width: 220px;
    height: 160px;
    border-radius: 20px;
    // opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  &_title {
    text-align: start;
    font-weight: 700;
    font-size: 17px;
    color: black;
    margin: 0;
  }
  &_location {
    text-align: start;
    font-weight: 400;
    font-size: 16px;
    color: #646464;
  }
}
</style>
