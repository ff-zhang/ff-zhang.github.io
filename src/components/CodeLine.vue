<template>
  <div v-if="show" class="code-line py-0">
    <b-td class="line-numbers">
      <p class="my-0" :style="numStyle">{{ num }}.</p>
    </b-td>
    <b-td>
      <vue-typed-js v-if="!typed && selectedTypingSpeed !== 'Instant'" :strings="[line]" :typeSpeed=typingSpeed @onComplete="destroy()">
        <p class="typing my-0" :style="lineStyle"></p>
      </vue-typed-js>
      <p v-else v-html="line" class="my-0" :style="lineStyle"></p>
    </b-td>
  </div>
</template>

<script>
import { store } from './../store.js'

export default {
  name: 'CodeLine',
  props: {
    lineNum: Number,
    text: String
  },
  beforeMount() {
    if (this.line != this.lines[this.num - 1]) {
      this.show = false
    }
  },
  computed: {
    typingSpeed() {
      switch(this.selectedTypingSpeed) {
        case 'Slow':
          return 100

        case 'Normal':
          return 50

        case 'Fast':
          return 1

        default:
          return 50
      }
    },
  },
  data() {
    return {
      num: this.lineNum,
      line: this.text,
      lines: store.lines[store.page.currentPage],
      show: true,
      typed: false,
      selectedTypingSpeed: store.settings.selectedTypingSpeed,
      numStyle: {
        color: '#3a3f58'
      },
      lineStyle: {
        color: '#a6accd'
      } 
    }
  },
  methods: {
      destroy() {
        this.typed = true

        this.$emit('onComplete')
      }
  }
}
</script>

<style scoped>
.line-numbers {
  width: 2em;
}
</style>