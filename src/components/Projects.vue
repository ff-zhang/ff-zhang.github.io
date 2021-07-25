<template>
  <Terminal :lines="lines"/>
</template>

<script>
import Terminal from './Terminal.vue'

export default {
  name: 'Projects',
  components: {
    Terminal
  },
  data() {
    return {
      lines: [
        'Video Producer (Westcoast Academy of Performing Arts)',
        '',
        'Personal Resumé Website',
        '',
        'Website for Business Leadership Club (SMUS)'
      ],
    }
  }
}
</script>

<style scoped>

</style>