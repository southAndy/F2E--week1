<template>
  <div class="serach">
    <select class="select" @change="getTest">
      <option value="">請選擇活動類型</option>
      <option value="探索景點">探索景點</option>
      <option value="節慶活動">節慶活動</option>
      <option value="品嚐美食">品嚐美食</option>
    </select>
    <input
      class="serach_input"
      type="text"
      placeholder="你想去哪？請輸入關鍵字"
    />

    <button class="serach_click" @click="searchResult">
      <div>
        <img src="@/assets/image/search.svg" alt="放大鏡" />
      </div>
      <span>搜尋</span>
    </button>
  </div>
</template>
<script>
import API from "@/service/getAPI";

export default {
  name: "Serach",
  data() {
    return {
      selectClass: "",
      eventDatas: null,
    };
  },
  methods: {
    getTest(selected) {
      console.log("loading", selected.target.value);
      this.selectClass = selected.target.value;
    },
    async searchResult() {
      console.log("seraching");
      if (this.selectClass === "") {
        console.log("沒指定，全部搜尋");
        this.$router.push({ name: "Result" });
      }
      if (this.selectClass === "探索景點") {
        console.log("探索景點");
        await API.getScenicSpotAPI().then((response) => {
          return (this.eventDatas = response.data);
        });
        this.$router.push({
          name: "Result",
          params: { city: "hi", type: this.eventDatas[0].ScenicSpotID },
        });
      }
      if (this.selectClass === "節慶活動") {
        console.log("節慶活動");
        await API.getActivitiesAPI().then((response) => {
          return (this.eventDatas = response.data);
        });
        this.$router.push({
          name: "Result",
          params: { city: "hi", type: this.eventDatas[0].ActivityID },
        });
      }
      if (this.selectClass === "品嚐美食") {
        console.log("品嚐美食");
        await API.getRestaurantAPI().then((response) => {
          return (this.eventDatas = response.data);
        });
        this.$router.push({
          name: "Result",
          params: { city: "hi", type: this.eventDatas[0].RestaurantID },
        });
      }
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
$primary-color: #7f977b;
%serach_input {
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
}
.serach {
  width: 345px;
  margin: 0px auto;
  .select {
    @extend %serach_input;
    padding: 15px 11px;
    color: $primary-color;
    font-weight: 500;
    background-color: #ffff;
  }

  &_input {
    @extend %serach_input;
    background-color: #f9f9f9;
    padding: 15px;
    font-weight: 400;
    font-size: 15px;
  }
  &_click {
    display: flex;
    justify-content: center;
    background-color: $primary-color;
    @extend %serach_input;
    text-decoration: none;

    img {
      margin-right: 10px;
    }
    span {
      color: white;
      font-weight: 700;
      align-self: center;
    }
  }
}
</style>
