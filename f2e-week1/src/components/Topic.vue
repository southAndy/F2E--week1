<template>
  <router-link to="/result">
    <div>
      <p class="topic_name">{{ festivalList.name }}</p>
      <div>
        <img class="topic_image" :src="festivalList.image" alt="cool" />
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "Topic",
  props: ["festivalList"],
  data() {
    return {
      festivalName: this.festivalList,
    };
  },
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

    @include breakpoints.desktop {
      font-size: 25px;
    }
  }
  &_image {
    width: 100%;
    height: 100%;

    border-radius: 24px;
    // opacity: 0.5;
  }
}
</style>
