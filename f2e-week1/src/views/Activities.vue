<template>
  <div class="activities">
    <Breadcrumb />
    <Button />
    <div class="serach">
      <div class="topic_container">
        <h3 class="serach_theme">熱門主題</h3>
        <Topic
          v-for="topic in festivalData"
          :key="topic"
          :festivalList="topic"
          class="topic"
          @click="getDataByClass(topic.name)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Topic from "@/components/Topic.vue";
import Button from "@/components/Button.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

import API from "@/service/getAPI";

export default {
  name: "Activities",
  components: {
    Topic,
    Button,
    Breadcrumb,
  },
  data() {
    return {
      festivalData: [
        {
          name: "自然風景類",
          image: require("../assets/image/activities/unsplash_pn5c-CLWGzY.png"),
        },
        {
          name: "觀光工廠類",
          image: require("../assets/image/Rectangle 93.svg"),
        },
        {
          name: "遊憩活動類",
          image: require("../assets/image/activities/Rectangle 94.png"),
        },
        {
          name: "休閒農業類",
          image: require("../assets/image/activities/Rectangle 95.svg"),
        },
        {
          name: "生態類",
          image: require("../assets/image/activities/unsplash_7tvbRQ5AKs4.png"),
        },
        {
          name: "溫泉類",
          image: require("../assets/image/activities/unsplash_I8K-lIkvqYI.png"),
        },
        {
          name: "古蹟類",
          image: require("../assets/image/activities/Rectangle 98.svg"),
        },
      ],
      apiDataByClass: null,
    };
  },
  methods: {
    async getDataByClass(className) {
      console.log(className);
      await API.scenicSpot.getDataByClass(className).then((response) => {
        return (this.apiDataByClass = response.data);
      });
      console.log(74, this.apiDataByClass);

      this.$router.push({
        name: "Result",
        params: {
          id: this.apiDataByClass[0].ScenicSpotID,
          //景點類別
          type: this.apiDataByClass[1].Class1,
          // data: JSON.stringify(this.apiDataByClass),
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";
.activities {
  padding: 0 45px;

  .serach {
    margin: 50px 0;
    // @include breakpoints.desktop {
    //   padding: 0 45px;
    // }
    &_theme {
      font-size: 25px;
      font-weight: 400;
      text-align: start;
      flex: 85%;
      margin-left: 25px;
      @include breakpoints.desktop {
        marign: 0px;
      }
    }
  }
  .topic_container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @include breakpoints.desktop {
      justify-content: start;
    }
  }
}
</style>
