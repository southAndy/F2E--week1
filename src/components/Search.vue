<template>
  <div class="serach">
    <select class="select" @change="getTest">
      <option value="請選擇活動類別">請選擇活動類別</option>
      <option value="探索景點">探索景點</option>
      <option value="節慶活動">節慶活動</option>
      <option value="品嚐美食">品嚐美食</option>
    </select>
    {{ inputKeyword }}
    <button class="serach_click" @click="searchResult">
      <div>
        <img src="@/assets/image/search.svg" alt="放大鏡" />
      </div>
      <span>搜尋</span>
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import API from "@/service/getAPI.js";
import { useRouter } from 'vue-router';

// 定義狀態的類型
type EventData = {
  ScenicSpotID?: string;
  ActivityID?: string;
  RestaurantID?: string;
};

const router = useRouter();
const selectClass = ref<string>("");
const eventDatas = ref<EventData[]>([]);
const inputKeyword = ref<string>('');


const getTest = (selected: Event) => {
  const target = selected.target as HTMLSelectElement;
  console.log("loading", target.value);
  selectClass.value = target.value;
};

const searchResult = async () => {
  if (selectClass.value === "探索景點") {
    console.log("探索景點", selectClass.value);
    eventDatas.value = (await API.getScenicSpotAPI()).data;
    console.log(eventDatas.value);
    router.push({
      name: "Result",
      query: {
        id: eventDatas.value[0].ScenicSpotID,
      },
    });
  }
  if (selectClass.value === "節慶活動") {
    console.log("節慶活動");
    eventDatas.value = (await API.getActivitiesAPI()).data;
    router.push({
      name: "Result",
      query: { id: eventDatas.value[0].ActivityID },
    });
  }
  if (selectClass.value === "品嚐美食") {
    console.log("品嚐美食");
    eventDatas.value = (await API.getRestaurantAPI()).data;
    router.push({
      name: "Result",
      query: {
        id: eventDatas.value[0].RestaurantID,
      },
    });
  }
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";
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
  @include breakpoints.tablet {
    width: 345px;
  }
  margin: 0px auto;
  .select {
    @extend %serach_input;
    padding: 10px 11px;
    @include breakpoints.desktop {
      padding: 15px 11px;
    }
    color: $primary-color;

    font-weight: 500;
    text-align: center;
    background-color: #ffff;
  }
  .isInput {
    border: 1px solid red;
  }

  &_input {
    @extend %serach_input;
    background-color: #f9f9f9;
    padding: 10px;
    @include breakpoints.desktop {
      padding: 15px;
    }

    font-size: 15px;
    font-weight: 400;
    text-align: center;
  }
  &_click {
    display: flex;
    justify-content: center;
    background-color: $primary-color;
    @extend %serach_input;
    text-decoration: none;
    &:hover {
      background-color: #65895f;
    }

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
