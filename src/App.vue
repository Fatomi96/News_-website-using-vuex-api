<template>
  <div id='app'>
    <div class="home">
      <NavBar />
      <NewsItems />
      <router-view />
  </div>

   </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import NewsItems from '@/components/NewsItems.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    NewsItems
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0px;
  padding:0;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  background: rgb(0, 0, 0);
}
</style>
