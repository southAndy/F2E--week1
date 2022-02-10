<template>
  <Breadcrumb />
  <Button />
  <div class="serach">
    <div class="topic_container">
      <h3 class="serach_theme">熱門主題</h3>
      <Topic
        v-for="topic in festivalList"
        :key="topic"
        :name="topic"
        class="topic"
      />
    </div>
  </div>
</template>
<script>
import Topic from "@/components/Topic.vue";
import Button from "@/components/Button.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
export default {
  name: "Activities",
  components: {
    Topic,
    Button,
    Breadcrumb,
  },
  data() {
    return {
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
.serach {
  margin: 50px 0;

  &_theme {
    font-size: 25px;
    font-weight: 400;
    text-align: start;
    flex: 85%;
    margin-left: 25px;
  }
}
.topic_container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
