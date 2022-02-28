<template>
  <div class="cool">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators justify-content-end me-6">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner container p-0 carousel_mobile">
        <router-link
          :to="{
            name: 'Content',
          }"
          class="carousel-item w-100 h-100 active"
        >
          <p class="carousel_title">
            {{
              placeData[0].ScenicSpotName ||
              placeData[0].ActivityName ||
              placeData[0].RestaurantName
            }}
          </p>
          <img
            :src="placeData[0].Picture.PictureUrl1"
            class="d-block w-100"
            alt="..."
          />
        </router-link>
        <router-link
          :to="{
            name: 'Content',
          }"
          class="carousel-item h-100 w-100"
        >
          <p class="carousel_title">
            {{
              placeData[0].ScenicSpotName ||
              placeData[0].ActivityName ||
              placeData[0].RestaurantName
            }}
          </p>
          <img
            :src="placeData[19].Picture.PictureUrl1"
            class="d-block w-100"
            alt="..."
          />
        </router-link>
        <router-link
          :to="{
            name: 'Content',
          }"
          class="carousel-item h-100"
        >
          <p class="carousel_title">
            {{
              placeData[0].ScenicSpotName ||
              placeData[0].ActivityName ||
              placeData[0].RestaurantName
            }}
          </p>
          <img
            :src="placeData[26].Picture.PictureUrl1"
            class="d-block w-100 h-100"
            alt="..."
          />
        </router-link>
      </div>
      <button
        class="carousel-control-prev mx-5"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next me-5"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel",
  props: ["placeData"],
  data() {
    return {
      placeDetail: this.placeDetail,
      fakeImage: "@/assets/image/ScenicSpotPicture.png",
    };
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";

.container {
  position: relative;
  @include breakpoints.desktop {
    width: 960px;
    height: 345px;
  }
}
.carousel_title {
  font-size: 23px;
  color: white;

  position: absolute;
  top: 45%;
  right: 0;
  bottom: 0;
  left: 0;

  @include breakpoints.desktop {
    font-size: 28px;
    top: 50%;
  }
}
div.carousel_mobile {
  height: 300px;
}
</style>
