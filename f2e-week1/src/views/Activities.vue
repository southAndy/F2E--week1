<template>
  <div class="activities">
    <Breadcrumb />
    <Button />
    <div class="serach">
      <div class="topic_container">
        <h3 class="serach_theme">熱門主題</h3>
        <Topic
          v-for="topic in getActivitiyNames"
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

export default {
  name: "Activities",
  components: {
    Topic,
    Button,
    Breadcrumb,
  },
  data() {
    return {
      apiDataByClass: null,
    };
  },
  computed: {
    getActivitiyNames() {
      return this.$store.state.activitiesDatas.activitiesData;
    },
  },
  methods: {
    async getDataByClass(className) {
      this.apiDataByClass = await this.$store.dispatch(
        "activitiesDatas/sendData",
        className
      );
      console.log(this.apiDataByClass);
      this.changeRouter(this.apiDataByClass);
    },
    changeRouter(apiData) {
      this.$router.push({
        name: "Result",
        params: {
          id: apiData[0].ScenicSpotID,
          //景點類別
          type: apiData[1].Class1,
        },
        query: {
          type: apiData[1].Class1,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/sass/breakpoints.scss";
.activities {
  padding: 0 25px;

  @include breakpoints.desktop {
    padding: 0 45px;
  }

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
