<template>
  <header>
    <h1 class="logo_container">
      <img
        src="@/assets/image/ScenicSpotPicture.png"
        alt="網站logo"
        class="logo"
      />
      台灣走走
    </h1>
    <nav class="navigation">
      <a href="##" class="navigation_link">探索景點</a>
      <a href="##" class="navigation_link">節慶活動</a>
      <a href="##" class="navigation_link">品嚐美食</a>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style lang="scss" scoped>
$navbar-link: #646464;
$title-size: 20px;
header {
  .logo_container {
    font-size: $title-size;
    .logo {
      width: 100%;
      height: 100%;
    }
  }
  .navigation {
    display: flex;

    &_link {
      text-decoration: none;
      margin-left: 20px;
      color: $navbar-link;
    }
  }
}
</style>
