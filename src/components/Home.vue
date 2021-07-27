<template>
  <Terminal :lines="lines"/>
</template>

<script>
import Terminal from './Terminal.vue'

export default {
  name: 'Home',
  components: {
    Terminal
  },
  data() {
    return {
      lines: [
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
        '];',
        '',
        '(Change the colour theme and typing speed down below)',
      ],
    }
  }
}
</script>

<style scoped>

</style>