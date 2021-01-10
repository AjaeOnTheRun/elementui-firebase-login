<template>
  <div id="app">
    <div class="navlinks">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 60px;
  margin-bottom: 60px;
}

.navlinks {
  margin-bottom: 60px;
}
</style>
