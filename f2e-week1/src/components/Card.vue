<template v-if="activities">
  <router-link
    :to="{ name: 'Content', params: { id: activities.ActivityName } }"
    class="card"
  >
    <div class="card_image">
      <img
        v-if="activities.Picture.PictureUrl1"
        :src="activities.Picture.PictureUrl1"
        alt="活動照片"
      />
      <img v-else src="@/assets/image/search.svg" alt="該資料沒有圖片顯示" />
    </div>
    <div class="card_body">
      <div class="time">
        {{ convertStartTime }} -
        {{ convertEndTime }}
      </div>
      <p class="title">{{ activities.ActivityName }}</p>
      <i></i>
      <a href="##" class="location">
        <img src="@/assets/image/Vector.png" alt="座標圖示" />
        {{ activities.City }}
      </a>
    </div>
    <p class="card_more">詳細介紹</p>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: ["activitiesData"],
  data() {
    return {
      activities: this.activitiesData,

      //todo 亂數取得
      // randomNumber: Number(),
    };
  },
  methods: {
    // getRandom() {},
  },
  computed: {
    convertStartTime() {
      let activitiesTime = new Date(this.activities.StartTime);
      let activityYear = activitiesTime.getFullYear();
      let activityMonth = activitiesTime.getMonth();
      let activityDate = activitiesTime.getDate();
      // console.log(activityYear, activityMonth, activityDate);
      return `${activityYear}/${activityMonth}/${activityDate}`;
    },
    convertEndTime() {
      let activitiesTime = new Date(this.activities.EndTime);
      let activityYear = activitiesTime.getFullYear();
      let activityMonth = activitiesTime.getMonth();
      let activityDate = activitiesTime.getDate();
      // console.log(activityYear, activityMonth, activityDate);
      return `${activityYear}/${activityMonth}/${activityDate}`;
    },
    // changeDataType() {
    //   return JSON.stringify(this.activities);
    // },
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";

.card {
  display: flex;

  width: 345px;
  height: 62px;

  text-decoration: none;
  //card's distance
  margin-bottom: 16px;
  @include breakpoints.desktop {
    flex-direction: row;
    width: 45%;
    height: 160px;
    background-color: #f9f9f9;
    margin-right: 30px;

    border-radius: 16px;
  }

  &_image {
    width: 100px;
    height: 100%;
    @include breakpoints.desktop {
      flex: 1;

      width: 160px;
      height: 160px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      border-radius: 10px;
      border: 1px solid;
    }
  }
  &_body {
    width: 354px- 90px;
    height: 100%;

    text-align: start;

    overflow: hidden;
    margin-left: 20px;
    @include breakpoints.desktop {
      flex: 1.5;
      padding: 16px 0;
    }

    .title {
      font-weight: 700;
      font-size: 17px;
      color: black;

      margin: 0;
      @include breakpoints.tablet {
        font-size: 19px;
      }
    }
    .time {
      font-size: 14px;
      text-decoration: none;
      color: #646464;
      @include breakpoints.tablet {
        font-size: 16px;
      }
    }
    .location {
      display: inline-block;
      font-size: 14px;
      font-weight: 400;
      text-decoration: none;
      color: #646464;
      @include breakpoints.tablet {
        font-size: 16px;
        margin-top: 45px;
      }
    }
  }
  &_more {
    @include breakpoints.desktop {
      padding: 0 10px;
      align-self: end;
    }
  }
}
</style>
