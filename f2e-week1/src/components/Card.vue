<template>
  <router-link :to="{ name: 'Content' }" class="card">
    <div class="card_image">
      <img
        v-if="parentData.Picture.PictureUrl1"
        :src="parentData.Picture.PictureUrl1"
        alt="活動照片"
      />
      <img v-else src="@/assets/image/search.svg" alt="該資料沒有圖片顯示" />
    </div>
    <div class="card_body">
      <div class="time">
        {{ convertStartTime }} -
        {{ convertEndTime }}
      </div>
      <p class="title">{{ parentData.ActivityName }}</p>
      <a href="##" class="location">{{ parentData.City }}</a>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: ["activitiesData"],
  data() {
    return {
      parentData: this.activitiesData,
      //todo 亂數取得
      // randomNumber: Number(),
    };
  },
  methods: {
    getRandom() {},
  },
  computed: {
    convertStartTime() {
      let activitiesTime = new Date(this.parentData.StartTime);
      let activityYear = activitiesTime.getFullYear();
      let activityMonth = activitiesTime.getMonth();
      let activityDate = activitiesTime.getDate();
      console.log(activityYear, activityMonth, activityDate);
      return `${activityYear}/${activityMonth}/${activityDate}`;
    },
    convertEndTime() {
      let activitiesTime = new Date(this.parentData.EndTime);
      let activityYear = activitiesTime.getFullYear();
      let activityMonth = activitiesTime.getMonth();
      let activityDate = activitiesTime.getDate();
      console.log(activityYear, activityMonth, activityDate);
      return `${activityYear}/${activityMonth}/${activityDate}`;
    },
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

  &_image {
    width: 100px;
    height: 100%;

    img {
      width: 100%;
      object-fit: contain;

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

    .title {
      font-weight: 700;
      font-size: 18px;
      color: black;

      margin: 0;
      @include breakpoints.tablet {
        font-size: 20px;
      }
    }
    .time {
      font-size: 14px;
      text-decoration: none;
      color: #646464;
    }
    .location {
      font-size: 14px;
      font-weight: 400;
      text-decoration: none;
      color: #646464;
    }
  }
}
</style>
