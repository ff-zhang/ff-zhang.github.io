<template>
  <div id="app">
    <b-row class="m-0" no-gutters>
      <b-col class="p-0" cols="auto">
        <NavBar/>
      </b-col>
      <b-col class="p-0">
        <router-view></router-view>
      </b-col>
    </b-row>
    <!-- <footer>
      <p>By Felix Zhang</p>
    </footer> -->
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: "Consolas", "Courier New", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
