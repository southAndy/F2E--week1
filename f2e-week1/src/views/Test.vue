<template>
  <!-- <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <img src="@/assets/image/Logo-desktop.svg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/image/Logo-desktop.svg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/image/Logo-desktop.svg" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/image/Logo-desktop.svg" alt="" />
    </swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    ...
  </swiper> -->
  <div>
    <Swiper />
  </div>
  <!-- <SwiperSlide /> -->
</template>
<script>
import Swiper from "@/components/Swiper.vue";

// import { Swiper } from "swiper/vue/swiper.js";
// import { SwiperSlide } from "swiper/vue/swiper-slide.js";
// import "swiper/swiper.min.css";
export default {
  name: "Test",
  components: {
    Swiper,
    // SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
