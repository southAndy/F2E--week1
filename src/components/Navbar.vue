<template>
  <header>
    <h1 class="logo_container">
      <!-- 測試swiper的路徑 -->
      <!-- <router-link :to="{ name: 'Test' }">swiper test</router-link> -->
      <router-link :to="{ name: 'Home' }">
        <img
          src="@/assets/image/Logo-desktop.svg"
          alt="網站logo"
          class="logo logo_desktop"
        />
        <img
          src="@/assets/image/Logo-mobile.svg"
          alt="網站logo"
          class="logo logo_mobile"
        />
      </router-link>
    </h1>
    <div class="toggle" @click="dropMenu">
      <img src="@/assets/image/menu.svg" alt="toggle button" />
    </div>
    <nav class="navigation" :class="{ drop: isDropNavbar }">
      <router-link
        class="navigation_link"
        :to="{ name: 'ScenicSpot' }"
        @click="dropMenu"
        >探索景點</router-link
      >
      <router-link
        class="navigation_link"
        :to="{ name: 'Activity' }"
        @click="dropMenu"
        >節慶活動</router-link
      >
      <router-link
        class="navigation_link"
        :to="{ name: 'Restaurant' }"
        @click="dropMenu"
        >品嚐美食</router-link
      >
    </nav>
  </header>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      isDropNavbar: false,
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

@use "../assets/sass/breakpoints.scss";

header {
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #e5e5e5;

  position: relative;
  @include breakpoints.desktop {
    position: static;
    padding: 0 45px;
    justify-content: space-between;
  }
  .logo_container {
    flex: 50%;
    width: 120px;
    height: 40px;
    font-size: $title-size;

    @include breakpoints.desktop {
      flex: inherit;
      width: 240px;
      height: 40px;
    }
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    .logo {
      width: 100%;
      height: 100%;

      &_desktop {
        display: none;
        @include breakpoints.desktop {
          display: block;
        }
      }
      &_mobile {
        display: block;
        @include breakpoints.desktop {
          display: none;
        }
      }
    }
  }

  .toggle {
    margin-bottom: 10px;
    cursor: pointer;
    @include breakpoints.desktop {
      display: none;
    }
  }

  .navigation {
    display: flex;
    flex-direction: column;
    width: 100%;

    position: absolute;
    top: 60px;
    bottom: 0;
    right: 0;

    // animation: ease-in 1s 2 reverse both paused slidein;
    @include breakpoints.desktop {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      position: inherit;
    }

    &_link {
      text-decoration: none;
      display: inline-block;

      padding: 15px 0;
      border-bottom: 1px solid rgb(100, 100, 100);
      background-color: #a8b8a5;
      color: $navbar-link;
      &:hover {
        background-color: #7f977b;
        color: white;
      }
      &:last-child {
        border-radius: 0 0 20px 20px;
      }

      @include breakpoints.desktop {
        width: 75px;
        text-decoration: none;
        color: #646464;
        font-weight: normal;

        text-align: center;
        background-color: unset;
        border-bottom: unset;

        &:last-child {
          border-radius: unset;
        }
      }

      //todo click effect
      //todo animation effect
    }
  }
  .drop {
    display: none;
    @include breakpoints.tablet {
      display: flex;
    }
  }
}
</style>
