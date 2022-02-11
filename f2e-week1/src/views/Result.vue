<template>
  <Button />
  <div class="serach_amount">
    <h2>搜尋結果</h2>
    <span>共有{{ 3 }}筆結果</span>
  </div>
  <router-link :to="{ name: 'Content' }">
    <div class="result" v-for="amount in dataAmounts" :key="amount">
      <div class="result_image">
        <img src="../assets/image/RestaurantPicture＿mobile.png" alt="" />
      </div>
      <p class="result_name">{{ "景點名稱" }}</p>
      <p class="result_place">{{ "景點位置" }}</p>
    </div>
  </router-link>
</template>
<script>
import Button from "@//components/Button.vue";
export default {
  name: "Result",
  components: { Button },
  data() {
    return {
      dataAmounts: 3,
    };
  },
};
</script>
<style lang="scss" scoped>
p {
  margin: 0;
}
.serach_amount {
  display: flex;
  margin-top: 30px;

  h2 {
    font-weight: 400;
    font-size: 32px;
    margin: 0;
  }

  span {
    align-self: flex-end;
    font-size: 18px;
    margin-left: 10px;
  }
}
.result {
  display: flex;
  &_image {
    height: 100%;
    width: 100%;
    flex: 100%;
  }
  &_name {
    font-size: 18px;
    font-weight: 700;
  }
  &_place {
    font-size: 15px;
    font-weight: 400;
  }
}
</style>
