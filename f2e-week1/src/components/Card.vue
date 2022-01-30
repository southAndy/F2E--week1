<template>
  <a href="##" class="card">
    <div class="card_image">
      <img
        v-if="parentData.Picture.PictureUrl1 != true"
        :src="parentData.Picture.PictureUrl1"
        alt="活動照片"
      />
      <img v-else src="@/assets/image/search.svg" alt="該資料沒有圖片顯示" />
    </div>
    <div class="crad-body">
      <div class="time">{{ parentData.StartTime }}</div>
      <p class="title">{{ parentData.ActivityName }}</p>
      <a href="##" class="location">{{ parentData.city }}</a>
    </div>
  </a>
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
};
</script>
<style lang="scss" scoped>
.card {
  display: flex;

  width: 345px;
  height: 62px;

  //card's distance
  margin-bottom: 16px;

  &_image {
    width: 90px;
    height: 100%;
  }
  &_body {
    width: 354px- 90px;
    height: 100%;
  }

  .time {
    background-color: chocolate;
  }
}
</style>
