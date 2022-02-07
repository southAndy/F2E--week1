<template>
  <header>
    <h1 class="logo_container">
      <router-link :to="{ name: 'Home' }">
        <img src="@/assets/image/icon.svg" alt="網站logo" class="logo" />
      </router-link>
      台灣走走
    </h1>
    <div class="toggle" @click="dropMenu()">
      <img src="@/assets/image/menu.svg" alt="toggle button" />
    </div>
    <nav :class="['navigation', { drop: isDropNavbar }]">
      <router-link :to="{ name: 'Activities' }">探索景點</router-link>
      <router-link :to="{ name: 'Festival' }">節慶活動</router-link>
      <router-link :to="{ name: 'Restaurant' }">品嚐美食</router-link>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      isDropNavbar: true,
    };
  },
  methods: {
    dropMenu() {
      console.log("true");
      this.isDropNavbar = !this.isDropNavbar;
    },
  },
};
</script>
<style lang="scss" scoped>
$navbar-link: #646464;
$title-size: 20px;

//breakpoints
$media-mobile: 576px;
$media-tablet: 768px;
$media-desktop: 1024px;
$media-bgScreen: 1440px;

@mixin mobile {
  @media (min-width: $media-mobile) {
    @content;
  }
}

@mixin tablet {
  @media (min-width: $media-tablet) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: $media-desktop) {
    @content;
  }
}

@mixin bgScreen {
  @media (min-width: $media-bgScreen) {
    @content;
  }
}

header {
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  .logo_container {
    flex: 1;
    font-size: $title-size;
    a {
      display: inline-block;
    }
    .logo {
      width: 100%;
      height: 100%;
    }
  }
  .drop {
    display: none !important;
  }
  .toggle {
    @include tablet {
    }
  }

  .navigation {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    bottom: 0;
    right: 0;
    @include tablet {
      display: flex;
      flex-direction: row;
    }

    &_link {
      text-decoration: none;
      margin-left: 20px;
      color: $navbar-link;

      //todo click effect
      //todo animation effect
    }
  }
}
</style>
