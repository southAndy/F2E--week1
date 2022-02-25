<template v-if="event">
  <div class="content">
    <Breadcrumb />
    <!-- <Carousel /> -->
    <article class="description">
      <h4>景點介紹：</h4>
      <p>
        {{ contentData[0].Description }}
      </p>
    </article>

    <div class="detail_container">
      <div class="detail">
        <p class="detail_title">
          活動時間：
          <span class="detail_content">{{ "假資料" }}</span>
        </p>
        <p class="detail_title">
          聯絡電話：
          <a href="phone" class="detail_content">{{ "0942343245" }}</a>
        </p>
        <p class="detail_title">
          主辦單位：
          <span class="detail_content">{{ contentData[0].Organizer }}</span>
        </p>
        <p class="detail_title">
          活動地點：
          <a href="##" class="detail_content">{{ contentData[0].Address }}</a>
        </p>
        <p class="detail_title">
          官方網站：
          <a href="##" class="detail_content">{{
            "http://localhost:8080/content"
          }}</a>
        </p>
        <p class="detail_title">
          活動費用：
          <span class="detail_content">{{ "假資料" }}</span>
        </p>
        <p class="detail_title">
          注意事項：
          <span class="detail_content">{{ "假資料" }}</span>
        </p>
      </div>
      <div class="other">
        <div class="location" v-if="getMap">
          <iframe
            :src="getMap"
            width="540"
            height="250"
            loading="lazy"
            scrolling="no"
          ></iframe>
        </div>
        <div class="nearby">
          <h4>周邊資訊：</h4>
          <router-link :to="{ name: 'Result' }">
            <img src="../assets/image/content/vertical-style1.png" alt="" />
          </router-link>
          <router-link :to="{ name: 'Result' }">
            <img src="../assets/image/content/vertical-style1拷貝.png" alt="" />
          </router-link>
          <router-link :to="{ name: 'Result' }">
            <img
              src="../assets/image/content/vertical-style1拷貝2.png"
              alt=""
            />
          </router-link>
        </div>
      </div>
    </div>
    -->
  </div>
</template>
<script>
import Breadcrumb from "../components/Breadcrumb.vue";
// import Carousel from "@/components/Carousel.vue";

import API from "@/service/getAPI";

export default {
  name: "Content",
  props: ["placeDetails"],
  data() {
    return {
      event: null,
      eventName: this.$route.params.id,
      contentData: null,
    };
  },
  components: {
    Breadcrumb,
    // Carousel,
  },
  computed: {
    getMap() {
      const mapPosition = {};
      //南北緯
      mapPosition.positionLat = this.contentData[0].Position.PositionLat;
      //東西緯
      mapPosition.positionLon = this.contentData[0].Position.PositionLon;
      //&ll:儲存緯度座標參數
      return `https://maps.google.com/?ie=UTF8&t=m&ll=${mapPosition.positionLat},${mapPosition.positionLon}&spn=0.003381,0.017231&z=16&output=embed`;
    },
    filterEvent() {
      let detail = Array.from(this.event);
      return detail.filter((data) => {
        if (data.ActivityName === this.eventName) {
          return data;
        }
      });
    },
  },
  created() {
    let dataID = this.$route.params.id;
    if (dataID.includes("C1")) {
      API.getScenicSpotAPI().then((response) => {
        return (this.contentData = response.data);
      });
    }
    if (dataID.includes("C2")) {
      API.getActivitiesAPI().then((response) => {
        return (this.contentData = response.data);
      });
    }
    if (dataID.includes("C3")) {
      API.getRestaurantAPI().then((response) => {
        return (this.contentData = response.data);
      });
    }
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap");
.content {
  padding: 0 60px;
  .content_image {
    height: 185px;
    width: 345px;

    img {
      height: 100%;
      width: 100%;
    }
  }
  .description_title {
    @include breakpoints.desktop {
      margin-top: 30px;
      text-align: start;
    }
  }
  .description {
    line-height: 2;
    font-family: Noto Sans TC;

    margin-bottom: 30px;
    @include breakpoints.desktop {
      text-align: start;
      margin-top: 30px;
      margin-bottom: 10px;
    }

    h4 {
      margin: 0;
      @include breakpoints.desktop {
        font-weight: 700;
        margin-bottom: 10px;
      }
    }
    p {
      margin: 0;
    }
  }
  .detail_container {
    font-family: Noto Sans TC;

    @include breakpoints.desktop {
      display: flex;

      margin: 60px 0;
    }
  }
  .detail {
    text-align: start;
    padding: 30px 15px;
    background-color: #f9f9f9;
    @include breakpoints.desktop {
      flex: 60%;
      height: 400px;
    }

    &_title {
      font-weight: 700;
      font-size: 18px;
    }
    &_content {
      font-weight: 400;
      font-size: 16px;
    }
  }

  .other {
    margin-left: 60px;
    .location {
      @include breakpoints.desktop {
        width: 540px;
        height: 250px;
      }
    }
    .nearby {
      @include breakpoints.desktop {
        display: flex;
        flex-wrap: wrap;
        margin-top: 32px;

        h4 {
          text-align: start;
          font-weight: 700;
          margin-bottom: 20px;
          flex: 100%;
        }
        a {
          display: inline-block;
          width: 170px;
          height: 110px;

          margin-right: 10px;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
