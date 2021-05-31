<template>
  <div id="app">
    <b-row class="ml-0" no-gutters>
      <b-col class="bg-light p-0" sm="auto" align="left" cols="2">
        <Navbar @click="setPage"/>
      </b-col>
      <b-col class="p-0">
        <b-container class="bg-dark min-vh-100 pt-3" fluid>
          <Terminal :page="page"/>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Terminal from './components/Terminal.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Terminal,
  },
  methods: {
    setPage(msg) {
      this.page = msg
    }
  },
  data() {
    return {
      page: 'home'
    }
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
