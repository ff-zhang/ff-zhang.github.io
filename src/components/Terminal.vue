<template>
  <b-container class="min-vh-100 pt-3" :style="style" fluid>
    <CodeBlock :key="currentPage"/>
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
    currentPage() { return store.settings.currentPage }
  },
  data() {
    return {
      style: {
        backgroundColor: '#292d3e'
      }
    }
  }
}
</script>

<style scoped>

</style>