<template>
  <TerminalBlock :lines="lines"/>
</template>

<script>
import TerminalBlock from './Terminal.vue'

export default {
  name: 'GoalsView',
  components: {
    TerminalBlock
  },
  data() {
    return {
      lines: [
        '<s>Graduate high school</s> (June 2021)',
        'Live in Europe for at least two months',
        'Attend a Liverpool FC match',
        'Contribute to an open-source project I have used',
        'Be capable of the left, right, and middle splits',
        'Co-author a published research paper',
      ]
    }
  }
}
</script>

<style scoped>

</style>