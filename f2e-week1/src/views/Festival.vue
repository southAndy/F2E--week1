<template>
  <div class="festival">
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
        />
      </div>
    </div>
  </div>
</template>
<script>
import Topic from "@/components/Topic.vue";
import Button from "@/components/Button.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "Festival",
  components: {
    Topic,
    Button,
    Breadcrumb,
  },
  data() {
    return {
      festivalData: [
        {
          name: "節慶活動",
          image: require("../assets/image/unsplash_qDZ-Xd8dX6w.svg"),
        },
        {
          name: "自行車活動",
          image: require("../assets/image/unsplash_I8K-lIkvqYI.svg"),
        },
        //~ ok
        {
          name: "遊憩活動",
          image: require("../assets/image/Rectangle 94.svg"),
        },
        {
          name: "產業文化活動",
          image: require("../assets/image/unsplash_qDBbM9Erwo4.svg"),
        },
        {
          name: "年度活動",
          image: require("../assets/image/unsplash_qDZ-Xd8dX6w.png"),
        },
        {
          name: "四季活動",
          image: require("../assets/image/unsplash_qDZ-Xd8dX6w.svg"),
        },
      ],
      festivalList: [
        "節慶活動",
        "自行車活動",
        "遊憩活動",
        "產業文化活動",
        "年度活動",
        "四季活動",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";
.festival {
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
