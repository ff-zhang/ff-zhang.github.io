<template>
  <b-container class="min-vh-100 pt-3" :style="style" fluid>
    <CodeBlock :lines="currentLines" :key="page.currentPage"/>
  </b-container>
</template>

<script>
import { store } from './../store.js'
import CodeBlock from './CodeBlock.vue'

export default {
  name: 'Terminal',
  components: {
    CodeBlock,
  },
  computed: {
    currentLines() {
      return this.lines[this.page.currentPage]
    }
  },
  data() {
    return {
      page: store.page,
      lines: store.lines,
      style: {
        backgroundColor: '#292d3e'
      }
    }
  }
}
</script>

<style scoped>

</style>