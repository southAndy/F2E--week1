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
  name: "Restaurant",
  components: {
    Topic,
    Button,
    Breadcrumb,
  },
};
</script>
<style lang="scss" scoped></style>
