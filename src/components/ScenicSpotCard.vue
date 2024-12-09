<template>
  <router-link
    class="activities"
    :to="{
      name: 'Content',
      params: {
        city: dataCity,
        id: dataId,
        name: dataName,
      },
    }"
  >
    <div
      class="activities_imagebox"
      :class="{ skeleton: isLoading }"
    >
      <img :src="dataPicture" alt="" />
    </div>
    <h4 class="activities_title">
      {{ dataName }}
    </h4>
    <span class="activities_location">{{ dataCity }}</span>
  </router-link>
</template>
<script setup lang="ts">
import { DefineProps } from 'vue';

interface Props {
  dataId:string,
  dataName:string,
  dataCity:string,
  dataPicture:string | undefined
  dataStartTime:string | undefined,
  dataEndTime:string | undefined
  isLoading:boolean
}

defineProps<Props>()
</script>
<style lang="scss" scoped>
@use "../assets/sass/loading.scss";

.skeleton {
  @extend %skeleton-loading;
}
.activities {
  display: flex;
  flex-direction: column;
  flex: 100%;

  margin-right: 16px;

  &_imagebox {
    width: 220px;
    height: 160px;
    border-radius: 20px;

    // opacity: 0.5;
    &:hover {
      opacity: 1;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  &_title {
    text-align: start;
    font-weight: 700;
    font-size: 17px;
    color: black;
    margin: 0;
  }
  &_location {
    text-align: start;
    font-weight: 400;
    font-size: 16px;
    color: #646464;
  }
}
</style>
