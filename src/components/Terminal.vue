<template>
  <CodeBlock :lines="currentLines" :key="page"/>
</template>

<script>
import CodeBlock from './CodeBlock.vue'

export default {
  name: 'Terminal',
  components: {
    CodeBlock,
  },
  props: {
    page: String
  },
  computed: {
    currentLines: function() {
      return this.lines[this.page + 'Lines']
    }
  },
  data() {
    return {
      lines: {
        homeLines: [
          'Hi, my name is Felix Zhang;',
          '',
          'I\'m a(n) [',
          '&emsp;&emsp;🍁 university student,',
          '&emsp;&emsp;💻 aspiring computer scientist,',
          '&emsp;&emsp;🩰 dancer extraordinaire,',
          '];',
          '',
          'You can find me at [',
          '&emsp;&emsp;<a href="#">email</a>, <a href="#">github</a>, <a href="#">instagram</a>, <a href="#">resumé</a>',
          '];'
        ],
        educationLines: [
          'University of Toronto (St. George), Toronto',
          '<i>2021 - current</i>',
          '',
          'St. Michaels University School, Victoria',
          '<i>2019 - 2021</i>',
          '',
          'Esquimalt High School, Victoria',
          '<i>2017 - 2019</i>'
        ],
        projectsLines: [
          '',
        ],
        goalsLines: [
          '',
        ]
      }
    }
  }
}
</script>

<style>

</style>