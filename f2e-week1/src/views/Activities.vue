<template>
  <Breadcrumb />
  <Button />
  <div class="serach">
    <div class="topic_container">
      <h3 class="serach_theme">熱門主題</h3>
      <Topic v-for="topic in 6" :key="topic" class="topic" />
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
