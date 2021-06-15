<template>
  <div v-if="show" class="code-line py-0">
    <b-td class="line-numbers">
      <p class="my-0" :style="style">{{ num }}.</p>
    </b-td>
    <b-td>
      <vue-typed-js :strings="[line]" :typeSpeed=typingSpeed @onComplete="$emit('onComplete')">
        <p class="typing my-0"></p>
      </vue-typed-js>
    </b-td>
  </div>
</template>

<script>
import { store } from './../store.js'

export default {
  name: 'CodeLine',
  props: {
    lineNum: Number,
    line: String
  },
  beforeMount() {
    if (this.line != this.lines[this.num - 1]) {
      this.show = false
    }
  },
  computed: {
    typingSpeed() {
      switch(this.settings.selectedTypingSpeed) {
        case 'Slow':
          return 100

        case 'Normal':
          return 50

        case 'Fast':
          return 1
        
        default:
          return 50
      }
    }
  },
  data() {
    return {
      num: this.lineNum,
      lines: store.lines[store.page.currentPage],
      show: true,
      settings: store.settings,
      style: {
        color: '#3a3f58'
      }
    }
  }
}
</script>

<style>
/* TODO: Find a way to style <p> in a scoped form */
p {
  color: #A6ACCD;
}

a {
  color: #A6ACCD;
}

a:hover {
  color: gainsboro;
}

.line-numbers {
  width: 2em;
}
</style>