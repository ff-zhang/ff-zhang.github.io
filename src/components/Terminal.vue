<template>
  <CodeBlock :lines="currentLines" :key="page.currentPage"/>
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
      lines: store.lines
    }
  }
}
</script>

<style scoped>

</style>