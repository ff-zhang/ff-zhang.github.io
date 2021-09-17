<template>
  <div class="code-line py-0" :style="style">
    <b-td class="line-numbers">
      <p class="my-0">{{ num }}.</p>
    </b-td>
    <b-td class="text">
      <vue-typed-js v-if="!typed && selectedTypingSpeed !== 'Instant'" :strings="[line]" :typeSpeed=typingSpeed @onComplete="destroy()">
        <p class="typing my-0"></p>  
      </vue-typed-js>
      <p v-else v-html="line" class="my-0"></p>
    </b-td>
  </div>
</template>

<script>
import { store } from './../store.js'

export default {
  name: 'CodeLine',
  props: {
    lineNum: Number,
    text: String,
  },
  methods: {
      destroy() {
        this.typed = true
        this.$emit('onComplete')
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
    style() {
      return {
        '--num-color': store.themes[store.settings.selectedColourScheme].lineNum,
        '--text-color': store.themes[store.settings.selectedColourScheme].text,
        '--string-color': store.themes[store.settings.selectedColourScheme].string,
        '--comment-color': store.themes[store.settings.selectedColourScheme].comment,
        '--punctuation-color': store.themes[store.settings.selectedColourScheme].punctuation, 
      }
    },
  },
  data() {
    return {
      num: this.lineNum,
      line: this.text,
      typed: false,
      selectedTypingSpeed: store.settings.selectedTypingSpeed,
    }
  },
}
</script>

<style>
a {
  color: var(--text-color);
}

a:hover {
  color: var(--text-color);
}

.line-numbers {
  width: 2em;
  color: var(--num-color);
}

.text {
  color: var(--text-color);
}

.str { 
  color: var(--string-color);
}

.comment {
  color: var(--comment-color);
}

.punc {
  color: var(--punctuation-color);
}
</style>