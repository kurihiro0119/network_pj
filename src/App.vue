<template>
  <div id="app">
    <bar />
    <sidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import bar from "./components/bar.vue";
import sidebar from "./components/sidebar.vue";

export default {
  name: "app",
  components: {
    bar,
    sidebar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
