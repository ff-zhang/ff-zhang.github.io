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
          'University of Toronto (Toronto, ON)',
          '<i>Sept. 2021 - Now</i>',
          '',
          'St. Michaels University School (Victoria, BC)',
          '<i>Sept. 2019 - June 2021</i>',
          '',
          'Esquimalt High School (Victoria, BC)',
          '<i>Sept. 2017 - June 2019</i>'
        ],
        projectsLines: [
          'Video Producer (Westcoast Academy of Performing Arts)',
        ],
        goalsLines: [
          '<s>Graduate high school</s> (June 2021)',
          'Live in Europe for at least two months',
          'Attend a Liverpool FC match',
          'Contribute to a open-source project I have used',
        ]
      }
    }
  }
}
</script>

<style>

</style>