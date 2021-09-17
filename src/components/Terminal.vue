<template>
  <b-container class="terminal min-vh-100 pt-3" :style="style" fluid>
    <div class="terminal">
      <b-table-simple small borderless>
        <b-tbody>
          <div id="code-block" v-if="selectedTypingSpeed !== 'Instant'">
            <CodeLine :lineNum="lineNum" :text="lines[lineNum - 1]" @onComplete="addRow()"/>
            <span id="next-line"></span>
          </div>
          <div v-else>
            <CodeLine v-for="(line, i) in lines" :lineNum="i+1" :text="line" :key="i"/>
          </div>
        </b-tbody>
      </b-table-simple>
    </div>
  </b-container>
</template>

<script>
import Vue from 'vue'

import CodeLine from './CodeLine.vue'
import { store } from './../store.js'

export default {
  name: 'Terminal',
  components: {
    CodeLine,
  },
  props: {
    lines: Array,
  },
  data() {
    return {
      lineNum: 1,
      currentPage: this.$route.path,
    }
  },
  methods: {
    addRow() {
      this.lineNum += 1
      
      if (this.lineNum <= this.lines.length && this.currentPage === this.$route.path && this.selectedTypingSpeed != 'Instant') {
        const CodeLineConst = Vue.extend(CodeLine)
        new CodeLineConst({
          propsData: {
            lineNum: this.lineNum,
            text: this.lines[this.lineNum - 1]
          },
        }).$on(
          'onComplete', () => { 
            this.addRow() 
          }
        ).$mount('#next-line')

        var nextLine = document.createElement('span')
        nextLine.id = 'next-line'
        document.getElementById('code-block').append(nextLine)
      }
    }
  },
  computed: {
    selectedTypingSpeed() { return store.settings.selectedTypingSpeed },
    style() {
      return {
        '--background-color': store.themes[store.settings.selectedColourScheme].terminalBackground,
        '--text-color': store.themes[store.settings.selectedColourScheme].text,
      }
    },
  },
}
</script>

<style scoped>
.terminal {
  background-color: var(--background-color);
}
</style>