<template>
  <router-link
    class="activities"
    :to="{
      name: 'Content',
      params: {
        city: scenicSpotData.City,
        id: scenicSpotData.ScenicSpotID,
        name: scenicSpotData.ScenicSpotName,
      },
    }"
  >
    <div class="activities_image">
      <img :src="scenicSpotData.Picture.PictureUrl1" alt="" />
    </div>
    <h4 class="activities_title">{{ scenicSpotData.ScenicSpotName }}</h4>
    <span class="activities_location">{{ scenicSpotData.City }}</span>
  </router-link>
</template>
<script>
export default {
  name: "ScenicSpotCard",
  props: ["scenicSpotAPI"],
  data() {
    return {
      scenicSpotData: this.scenicSpotAPI,
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
