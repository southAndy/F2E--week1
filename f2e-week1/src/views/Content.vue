<template v-if="event">
  <div class="content">
    <Breadcrumb />
    <div class="content_image">
      <img :src="filterEvent?.Picture?.PictureUrl1" />
    </div>
    <!-- <CarouselContent :placeData="filterEvent" /> -->
    <h2>
      {{
        filterEvent?.ActivityName ||
        filterEvent?.ScenicSpotName ||
        filterEvent?.RestaurantName
      }}
    </h2>
    <Category :category="filterEvent" />
    <article class="description">
      <h4>景點介紹：</h4>
      <p>
        {{ filterEvent?.Description }}
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
          <span class="detail_content">{{ filterEvent?.Organizer }}</span>
        </p>
        <p class="detail_title">
          活動地點：
          <a href="##" class="detail_content">{{ filterEvent?.Address }}</a>
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
        <!-- <div class="nearby">
          <h4>周邊資訊：</h4>
          <div>
            <router-link class="near_link" :to="{ name: 'Result' }">
              <img src="../assets/image/content/vertical-style1.png" alt="" />
            </router-link>
            <router-link class="near_link" :to="{ name: 'Result' }">
              <img
                src="../assets/image/content/vertical-style1拷貝.png"
                alt=""
              />
            </router-link>
            <router-link class="near_link" :to="{ name: 'Result' }">
              <img
                src="../assets/image/content/vertical-style1拷貝2.png"
                alt=""
              />
            </router-link>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from "../components/Breadcrumb.vue";
// import CarouselContent from "@/components/CarouselContent.vue";
import Category from "../components/Category.vue";

import API from "@/service/getAPI";

export default {
  name: "Content",
  // props: ["placeDetails"],
  data() {
    return {
      event: null,
      eventID: this.$route.params.id,
      contentData: null,
    };
  },
  components: {
    Breadcrumb,
    // Carousel,
    // CarouselContent,
    Category,
  },
  computed: {
    getMap() {
      const mapPosition = {};
      //南北緯
      mapPosition.positionLat = this.filterEvent?.Position.PositionLat;
      //東西緯
      mapPosition.positionLon = this.filterEvent?.Position.PositionLon;
      //&ll:儲存緯度座標參數
      return `https://maps.google.com/?ie=UTF8&t=m&ll=${mapPosition?.positionLat},${mapPosition?.positionLon}&spn=0.003381,0.017231&z=16&output=embed`;

      // return `https://maps.google.com/?ie=UTF8&t=m&ll=${mapPosition.PositionLat},${mapPosition.PositionLon}&spn=0.003381,0.017231&z=18&output=embed`;
    },
    filterEvent() {
      // let detail = Array.from(this.contentData);
      // console.log("cool", typeof detail);

      let filteredData = this.contentData?.filter((data) => {
        if (
          data.ActivityID === this.eventID ||
          data.ScenicSpotID === this.eventID ||
          data.RestaurantID === this.eventID
        ) {
          return data;
        }
      });
      // let apiContent = null;
      //todo 最初API資料還沒到，卻嘗試解構
      // [apiContent] = filteredData;
      // console.log(apiContent);
      // return apiContent;
      return filteredData?.[0];
    },
  },
  created() {
    let dataID = this.$route.params.id;
    console.log("array?", dataID, typeof dataID);
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
  @include breakpoints.desktop {
    padding: 0 60px;
  }
  .content_image {
    height: 185px;
    width: 345px;
    object-fit: cover;
    @include breakpoints.desktop {
      width: 100%;
      height: 250px;
    }

    img {
      height: 100%;
      width: 100%;
    }
  }
  h2 {
    text-align: center;
    margin: 20px 0;

    @include breakpoints.desktop {
      text-align: start;
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
      font-weight: 700;
      margin-bottom: 10px;
      @include breakpoints.desktop {
        font-weight: 700;
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
      font-weight: 500;
      line-height: 10px;
      @include breakpoints.desktop {
        font-weight: 700;
        font-size: 18px;
      }
      a {
        text-decoration: none;
        color: #2c3e50;
      }
    }
    &_content {
      font-weight: 400;
      font-size: 16px;
    }
  }

  .other {
    @include breakpoints.desktop {
      margin-left: 60px;
    }
    .location {
      width: 100%;
      margin-top: 30px;
      @include breakpoints.desktop {
        width: 540px;
        height: 250px;
        margin-top: unset;
      }
      // 針對google map的尺寸調整
      iframe {
        width: 100%;
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
        .near_link {
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
