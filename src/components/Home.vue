<template>
  <TerminalBlock :lines="lines"/>
</template>

<script>
import TerminalBlock from './Terminal.vue'

export default {
  name: 'HomeView',
  components: {
    TerminalBlock
  },
  data() {
    return {
      lines: [
        'Hi, my name is Felix Zhang<span class="punc">;</span>',
        '',
        'I\'m a(n) <span class="punc">[</span>',
        '&emsp;&emsp;🍁 fourth-year undergraduate student at the <a href="https://www.utoronto.ca/" class="str" target="_blank" rel="noopener noreferrer">University of Toronto</a><span class="punc">,</span>',
        '&emsp;&emsp;💻 aspiring computer science researcher<span class="punc">,</span>',
        '&emsp;&emsp;🪄 person who loves playing <a href="https://magic.wizards.com/en" class="str" target="_blank" rel="noopener noreferrer">Magic: the Gathering</a><span class="punc">,</span>',
        '<span class="punc">];</span>',
        '',
        'Currently, I\'m working as with/at <span class="punc">[</span>',
        '&emsp;&emsp;<a href="https://cerebras.ai/" class="str" target="_blank" rel="noopener noreferrer">Cerebras Systems</a> as runtime ML engineer<span class="punc">,</span>',
        '&emsp;&emsp;<a href="https://www.cs.toronto.edu/~sunk/index.html" class="str" target="_blank" rel="noopener noreferrer">Prof. Jack Sun</a> on a Rust-based pedagogical kernel <a href="https://github.com/KidneyOS/KidneyOS" class="str" target="_blank" rel="noopener noreferrer">KidneyOS</a><span class="punc">,</span>',
        '<span class="punc">];</span>',
        '',
        'I\'m interested in computer systems and am particularly fascinated by problems in <span class="punc">[</span>',
        '&emsp;&emsp;<span class="punc">\'</span>distributed systems<span class="punc">\', \'</span>computer architecture<span class="punc">\', \'</span>operating systems<span class="punc">\'</span>',
        '<span class="punc">]</span>',
        '',
        'Previously, I have worked with <span class="punc">[</span>',
        '&emsp;&emsp;<a href="https://bme.utoronto.ca/faculty-research/core-faculty/tom-chau/" class="str" target="_blank" rel="noopener noreferrer">Prof. Tom Chau</a> and <a href="https://www.linkedin.com/in/erica-floreani" class="str" target="_blank" rel="noopener noreferrer">Erica Floreani</a> on denoising EEG data with deep learning<span class="punc">,</span>',
        '&emsp;&emsp;Prof. Anton Zilman on predicting T-cell cytokine ouputs using machine learning<span class="punc">,</span>',
        '&emsp;&emsp;<a href="http://www.davidrokeby.com/home.html" class="str" target="_blank" rel="noopener noreferrer">Prof. David Rokeby</a> on imitating human movements in real-time simulations using reinforcement learning<span class="punc">,</span>',
        '&emsp;&emsp;<a href"https://www.linkedin.com/in/csealfon/?originalSubdomain=ca" class="str" target="_blank" rel="noopener noreferrer">Prof. Carolyn Sealfon</a> on using suggestion extraction models on student feedback<span class="punc">,</span>',
        '<span class="punc">];</span>',
        '',
        'You learn more about me in the tabs to the left and through my <span class="punc">[</span>',
        '&emsp;&emsp;<span class="punc">\'</span><a href="https://www.linkedin.com/in/felixfzhang/" class="str" target="_blank" rel="noopener noreferrer">linkedin</a><span class="punc">\'</span>, <span class="punc">\'</span><a href="mailto:felixfzhang@hotmail.com" class="str">email</a><span class="punc">\', \'</span><a href="https://github.com/ff-zhang" class="str" target="_blank" rel="noopener noreferrer">github</a><span class="punc">\'',
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