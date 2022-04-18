<template>
  <div>
    <Navbar />
    <router-view />
    <footer @click="filterActitivtiess">
      <p>台灣走走 Code:南國安迪同學 /Desgin: Breakfast</p>
    </footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
@use "assets/sass/breakpoints.scss";

$primary-color: #7f977b;

* {
  // outline: 1px solid red;
}
body {
  margin: 0;
  padding: 15px;

  @include breakpoints.desktop {
    padding: 0;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
footer {
  background-color: $primary-color;
  color: white;

  padding: 15px;

  p {
    margin: 0px;
    font-size: 14 px;
    font-weight: 600;
  }
}
</style>
