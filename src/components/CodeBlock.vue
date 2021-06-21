<template>
  <div class="code-block">
    <b-table-simple small borderless>
      <b-tbody>
        <div id="terminal">
          <div v-if="settings.selectedTypingSpeed !== 'Instant'">
            <CodeLine :lineNum="lineNum" :text="lines[lineNum - 1]" @onComplete="addRow()"/>
            <span id="next-line"></span>
          </div>
          <div v-else>
            <CodeLine v-for="(line, i) in lines" :lineNum="i+1" :text="line" :key="i"/>
          </div>
        </div>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
import Vue from 'vue'

import CodeLine from './CodeLine.vue'
import { store } from '../store.js'

export default {
  name: 'CodeBlock',
  components: {
    CodeLine,
  },
  props: {
    lines: Array,
  },
  data() {
    return {
      lineNum: 1,
      settings: store.settings,
      }
  },
  methods: {
    addRow() {
      this.lineNum += 1
      
      if (this.lineNum <= this.lines.length) {
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
        document.getElementById('terminal').append(nextLine)
      }
    }
  },
}
</script>

<style>

</style>