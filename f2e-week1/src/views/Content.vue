<template>
  <Breadcrumb />
  <div class="content_image">
    <img src="../assets/image/ScenicSpotPicture.png" alt="活動圖片" />
  </div>
  <h2>{{ "2021陽明山走春" }}</h2>
  <article class="description">
    <h4>景點介紹</h4>
    <p>
      原名中興賓館的「陽明書屋」，興建於民國58年至59年間，昔為先總統蔣公接待國內外貴賓及夏日避暑之處，係蔣公在台唯一親自擇定興建的行館；今日則成為陽明山國家公園重要人文史蹟建物之一，並提供遊客諮詢及導覽解說等各項服務，是一處兼具自然與人文、知性與感性的參觀遊憩場所。
      揭開陽明書屋的人文變遷史，約略可自森林公園時期、中興賓館時期、黨史會時期迄國家公園經營管理後說起。陽明書屋座落於陽金公路、東昇路花鐘旁的中興路上，佔地約15公頃，早期為一處原始天然森林，屬陽明山管理局管轄，曾為童軍總會露營區場地。民國59年中興賓館及其附屬建物興建完成後仍保留部份原始林區，先總統蔣公進駐中興賓館期間基於安全理由戒備森嚴，造就今日的陽明書屋及週遭中興路沿線仍保有豐富的自然生態資源。民國64年中國國民黨中央黨史委員會遷此辦公並將草屯、青潭的史料，連同大溪資料室、芝山書屋「總裁史料」，全部集中此地。自此，中興賓館改稱為「陽明書屋」。民國86年9月26日，中國國民黨中央黨史委員會將陽明書屋地上建物及管理權捐贈內政部轉交陽明山國家公園經營管理，在經過精心整修規劃後，成立陽明書屋管理站並於87年6月27日正式對外開放提供遊客參觀。另為擴大服務遊客陸續修建大義館，於89年9月11日，設置陽明書屋遊客服務站，提供遊憩資訊、影片欣賞、燈箱、模型展示及導覽解說等服務。
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
        <span class="detail_content">{{ "假地點" }}</span>
      </p>
      <p class="detail_title">
        活動地點：
        <a href="##" class="detail_content">{{ "假資料" }}</a>
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
  components: {
    Breadcrumb,
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
