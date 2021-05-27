<template>
  <div id="app">
    <b-row class="ml-0" no-gutters>
      <b-col class="bg-light p-0" sm="auto" align="left" cols="2">
        <Navbar/>
      </b-col>
      <b-col class="p-0">
        <b-container class="bg-dark min-vh-100 pt-3" fluid>
          <CodeBlock :lines="lines"/>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import CodeBlock from './components/CodeBlock.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    CodeBlock,
  },
  data() {
    return {
      lines: [
        'Hi, my name is Felix Zhang;',
        'I\'m a(n) {',
        '&emsp;&emsp;🍁 university student,',
        '&emsp;&emsp;💻 aspiring computer scientist,',
        '&emsp;&emsp;🩰 dancer extraordinaire,',
        '};',
        'A copy of my resume is available <a href=#>here</a>;'
      ]
    }
  },
}
</script>

<style>
#app {
  font-family: Consolas, Courier New, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
