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
        'Hi, my name is Felix Zhang<span class="punc">;</span>',
        '',
        'I\'m an <span class="punc">[</span>',
        '&emsp;&emsp;🍁 university student<span class="punc">,</span>',
        '&emsp;&emsp;💻 aspiring computer scientist<span class="punc">,</span>',
        '&emsp;&emsp;🩰 dancer extraordinaire<span class="punc">,</span>',
        '<span class="punc">];</span>',
        '',
        'You can find more about me through my <span class="punc">[</span>',
        '&emsp;&emsp;<span class="punc">\'</span><a href="mailto:felixfzhang@hotmail.com" class="str">email</a><span class="punc">\', \'</span><a href="https://github.com/ff-zhang" class="str" target="_blank" rel="noopener noreferrer">github</a><span class="punc">\', \'</span><a href="https://www.instagram.com/ff.zhang/" class="str" target="_blank" rel="noopener noreferrer">instagram</a><span class="punc">\'</span>',
        '<span class="punc">];</span>',
        '',
        '<span class="comment"># (Change the colour theme and typing speed by clicking the settings icon down below)</span>',
      ],
    }
  }
}
</script>

<style scoped>


</style>