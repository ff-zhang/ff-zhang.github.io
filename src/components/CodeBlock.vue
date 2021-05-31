<template>
  <div class="code-block">
    <b-table-simple small borderless>
      <b-tbody>
        <div id="terminal">
          <CodeLine :lineNum="lineNum" :line="lines[lineNum - 1]" @onComplete="addRow()"/>
          <div id="next-line"></div>
        </div>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
import Vue from 'vue'

import CodeLine from './CodeLine.vue'

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
    }
  },
  methods: {
    addRow() {
      this.lineNum += 1
      
      if (this.lineNum <= this.lines.length) {
        console.log(this.lineNum, this.lineNum <= this.lines.length)
        const CodeLineConst = Vue.extend(CodeLine)
        var vm = new CodeLineConst({
          propsData: {
            lineNum: this.lineNum,
            line: this.lines[this.lineNum - 1]
          },
        }).$mount('#next-line')
        
        vm.$on('onComplete', () => {
          this.addRow()
        })

        var nextLine = document.createElement('div')
        nextLine.id = 'next-line'
        document.getElementById('terminal').append(nextLine)
      }
    }
  },
}
</script>

<style>

</style>