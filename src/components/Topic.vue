<template>
  <div class="topic">
    <p class="topic_name">{{ festivalList.name }}</p>
    <div>
      <img class="topic_image" :src="festivalList.image" alt="cool" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Topic",
  props: ["festivalList"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";

.topic {
  display: flex;
  background: black;
  height: 80px;
  width: 100%;
  // width: 160px;

  text-align: center;
  border-radius: 40px;
  margin-bottom: 10px;
  position: relative;

  @include breakpoints.desktop {
    width: 235px;
    height: 124px;
    margin-right: 30px;
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

    z-index: 2;
    cursor: pointer;

    @include breakpoints.desktop {
      font-size: 25px;
    }
  }
  &_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 40px;
  }
  div {
    cursor: pointer;
    width: 100%;
  }
}
</style>
