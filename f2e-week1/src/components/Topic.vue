<template>
  <div>
    <p class="topic_name">自然風景類</p>
    <div>
      <img
        class="topic_image"
        src="../assets/image/ScenicSpotPicture.png"
        alt="cool"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Topic",
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";

.topic {
  display: flex;
  background: black;
  height: 80px;
  width: 165px;

  text-align: center;
  border-radius: 24px;

  margin-bottom: 10px;

  position: relative;

  @include breakpoints.desktop {
    width: 255px;
    height: 124px;
  }

  &_name {
    color: white;
    font-weight: 600;
    font-size: 16px;
    position: absolute;
    top: 40%;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;

    @include breakpoints.desktop {
      font-size: 25px;
    }
  }
  &_image {
    width: 100%;
    height: 100%;

    border-radius: 24px;

    opacity: 0.5;
  }
}
</style>
