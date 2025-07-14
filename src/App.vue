<template>
  <NavBar />
  <router-view />
  <FooterItem />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterItem from "./components/FooterItem.vue";
export default {
  name: "App",
  components: {
    NavBar,
    FooterItem,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  padding-top: 70px; /* نفس ارتفاع الـ Navbar */
  min-height: 100vh; /* الجسم كله طول الشاشة */
  display: flex;
  flex-direction: column;
}

main {
  flex: 1; /* يخلي الـ main يتمدد وياخد المساحة كلها */
}
</style>

