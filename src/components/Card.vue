<template>
  <router-link
    :to="{
      name: 'Content',
      params: {
        city: activities?.City,
        id: activities?.ActivityID,
        name: activities?.ActivityName,
      },
    }"
    class="card"
    :class="{ skeleton: this.$store.state.isLoading }"
  >
    <div class="card_image">
      <img
        v-if="activities?.Picture?.PictureUrl1"
        :src="activities?.Picture?.PictureUrl1"
        alt="活動照片"
      />
    </div>
    <div class="card_body">
      <div class="time">
        {{ convertStartTime??'' }} -
        {{ convertEndTime??'' }}
      </div>
      <p class="title">{{ activities?.ActivityName }}</p>
      <i></i>
      <a v-if="activities.City" href="##" class="location">
        <img src="@/assets/image/Vector.png" alt="座標圖示" />
        {{ activities?.City }}
      </a>
    </div>
    <p class="card_more">詳細介紹</p>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: ["activitiesData"],
  methods: {
    // getRandom() {},
  },
  computed: {
    convertStartTime() {
      if(this.activities.StartTime){
        let activitiesTime = new Date(this.activities.StartTime);
        let activityYear = activitiesTime.getFullYear();
        let activityMonth = activitiesTime.getMonth();
        let activityDate = activitiesTime.getDate();
        // console.log(activityYear, activityMonth, activityDate);
        return `${activityYear}/${activityMonth}/${activityDate}`;

      }
    },
    convertEndTime() {
      if(this.activities.EndTime){
        let activitiesTime = new Date(this.activities.EndTime);
        let activityYear = activitiesTime.getFullYear();
        let activityMonth = activitiesTime.getMonth();
        let activityDate = activitiesTime.getDate();
        // console.log(activityYear, activityMonth, activityDate);
        return `${activityYear}/${activityMonth}/${activityDate}`;

      }
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";
@use "../assets/sass/loading.scss";
.skeleton {
  @extend %skeleton-loading;
}

.card {
  display: flex;
  flex-direction: row;
  width: 345px;
  height: 70px;

  text-decoration: none;
  //card's distance
  margin-bottom: 16px;

  border: none;
  @include breakpoints.tablet {
    flex-direction: row;
    width: 45%;
    background-color: #f9f9f9;
    margin-right: 30px;
    // border: 1px solid #646464;
    border-radius: 16px;

    &:hover {
      background: linear-gradient(to right, #f9f9f9, #7f977b);
    }
  }
  @include breakpoints.desktop {
    height: 160px;
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
        font-size: 15px;
        height: 25px;
        overflow: hidden;
      }
      @include breakpoints.desktop {
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
        margin-top: 55px;
      }
    }
  }
  &_more {
    display: none;
    @include breakpoints.desktop {
      display: block;
      color: rgb(153, 150, 150);
      padding: 0 10px;
      align-self: end;
    }
  }
}
</style>
