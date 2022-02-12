<template>
  <Breadcrumb />
  <div class="content_image">
    <img :src="convertType.Picture.PictureUrl1" alt="活動圖片" />
  </div>
  <h2>{{ convertType.ActivityName }}</h2>
  <article class="description">
    <h4>景點介紹</h4>
    <p>
      {{ convertType.Description }}
    </p>
  </article>
  <div class="detail_container">
    <div class="detail">
      <p class="detail_title">
        活動時間：
        <span class="detail_content">{{ "假資料" }}</span>
      </p>
      <p class="detail_title">
        聯絡電話：
        <a href="phone" class="detail_content">{{ "0942343245" }}</a>
      </p>
      <p class="detail_title">
        主辦單位：
        <span class="detail_content">{{ convertType.Organizer }}</span>
      </p>
      <p class="detail_title">
        活動地點：
        <a href="##" class="detail_content">{{ convertType.Address }}</a>
      </p>
      <p class="detail_title">
        官方網站：
        <a href="##" class="detail_content">{{
          "http://localhost:8080/content"
        }}</a>
      </p>
      <p class="detail_title">
        活動費用：
        <span class="detail_content">{{ "假資料" }}</span>
      </p>
      <p class="detail_title">
        注意事項：
        <span class="detail_content">{{ "假資料" }}</span>
      </p>
    </div>
    <div class="location">
      <img src="../assets/image/GoogleMap.png" alt="這個景點的導航位置" />
    </div>
    <div class="nearby">
      <h4>周邊資訊：</h4>
      <router-link :to="{ name: 'Result' }">
        <img src="../assets/image/content/vertical-style1.png" alt="" />
      </router-link>
      <router-link :to="{ name: 'Result' }">
        <img src="../assets/image/content/vertical-style1拷貝.png" alt="" />
      </router-link>
      <router-link :to="{ name: 'Result' }">
        <img src="../assets/image/content/vertical-style1拷貝2.png" alt="" />
      </router-link>
    </div>
  </div>
  <div class="recommand"></div>
</template>
<script>
import Breadcrumb from "../components/Breadcrumb.vue";
export default {
  name: "Content",
  props: ["activityData"],
  data() {
    return {
      activity: this.$route.params,
    };
  },
  components: {
    Breadcrumb,
  },
  computed: {
    convertType() {
      return JSON.parse(this.activity.id);
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap");

.content_image {
  height: 185px;
  width: 345px;

  img {
    height: 100%;
    width: 100%;
  }
}
.description {
  line-height: 2;
  font-family: Noto Sans TC;

  margin-bottom: 30px;

  h4 {
    margin: 0;
  }
  p {
    margin: 0;
  }
}
.detail_container {
  background-color: #f9f9f9;
  font-family: Noto Sans TC;
}
.detail {
  text-align: start;
  padding: 30px 15px;

  &_title {
    font-weight: 700;
    font-size: 18px;
  }
  &_content {
    font-weight: 400;
    font-size: 16px;
  }
}
</style>
