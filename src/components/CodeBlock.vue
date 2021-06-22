<template>
  <div class="code-block">
    <b-table-simple small borderless>
      <b-tbody>
        <div id="terminal">
          <div v-if="selectedTypingSpeed !== 'Instant'">
            <CodeLine :lineNum="lineNum" :text="pageLines[lineNum - 1]" @onComplete="addRow()"/>
            <span id="next-line"></span>
          </div>
          <div v-else>
            <CodeLine v-for="(line, i) in pageLines" :lineNum="i+1" :text="line" :key="i"/>
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
  methods: {
    addRow() {
      this.lineNum += 1
      
      if (this.lineNum <= this.pageLines.length && this.currentPage === store.settings.currentPage) {
        const CodeLineConst = Vue.extend(CodeLine)
        new CodeLineConst({
          propsData: {
            lineNum: this.lineNum,
            text: this.pageLines[this.lineNum - 1]
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
  computed: {
    selectedTypingSpeed() { return store.settings.selectedTypingSpeed },
    pageLines() { return this.lines[store.settings.currentPage] },
  },
  data() {
    return {
      lineNum: 1,
      currentPage: store.settings.currentPage,
      lines: {
        home: [
          'Hi, my name is Felix Zhang;',
          '',
          'I\'m a(n) [',
          '&emsp;&emsp;🍁 university student,',
          '&emsp;&emsp;💻 aspiring computer scientist,',
          '&emsp;&emsp;🩰 dancer extraordinaire,',
          '];',
          '',
          'You can find more about me at [',
          '&emsp;&emsp;<a href="mailto:felixfzhang@hotmail.com">email</a>, <a href="https://github.com/ff-zhang" target="_blank" rel="noopener noreferrer">github</a>, <a href="https://www.instagram.com/ff.zhang/" target="_blank" rel="noopener noreferrer">instagram</a>',
          '];'
        ],
        education: [
          'University of Toronto (Toronto, ON)',
          '<i>Sept. 2021 - Present</i>',
          '',
          'St. Michaels University School (Victoria, BC)',
          '<i>Sept. 2019 - June 2021</i>',
          'For the final two years in high school, I attended SMUS.',
          '',
          'Esquimalt High School (Victoria, BC)',
          '<i>Sept. 2017 - June 2019</i>',
          'In grades 9 and 10, I was a student at Esquimalt High, where I was a member of both their 4C Challenge and French Immersion programs.',
          'Throughout my time there I was an active member of their fine arts community, playing in numerous bands and co-directing their production of Urinetown in grade 10.',
          'Furthermore, I was able to excel academically, receiving an award for academic excellence in 13 classes in grade 10 and placing first in both the Pascal and Cayley math contests among the school.'
        ],
        projects: [
          'Video Producer (Westcoast Academy of Performing Arts)',
          '',
          'Personal Resumé Website',
          '',
          'Website for Business Leadership Club (SMUS)'
        ],
        goals: [
          '<s>Graduate high school</s> (June 2021)',
          'Live in Europe for at least two months',
          'Attend a Liverpool FC match',
          'Contribute to an open-source project I have used',
          'Be capable of the left, right, and middle splits',
        ]
      },
    }
  },
}
</script>

<style scoped>

</style>