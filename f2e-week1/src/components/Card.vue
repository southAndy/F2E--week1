<template>
  <div class="card">
    <div>
      <img
        v-if="parentData[0].Picture.PictureUrl1"
        :src="parentData[0].Picture"
        alt="活動照片"
      />
      <img v-else src="@/assets/image/Vector.svg" alt="該資料沒有圖片顯示" />
    </div>
    <div class="crad-body">
      <div class="time">{{ parentData[0].StartTime }}</div>
      <p class="title">{{ apiData[0].ActivityName }}</p>
      <a href="##" class="location">{{ parentData[6].city }}</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["apiData"],
  data() {
    return {
      parentData: this.apiData,
      randomNumber: Number(),
    };
  },
  methods: {
    getRandom() {},
  },
};
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  height: 62px;

  .time {
    background-color: chocolate;
  }
}
</style>
