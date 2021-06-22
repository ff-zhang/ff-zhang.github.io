import Vue from 'vue'

export const store = Vue.observable({
  settings: {
    selectedColourScheme: 'lighter',
    selectedTypingSpeed: 'Fast',
    currentPage: 'home',
  },
  
  themes: {
    'lighter': {
      lineNum: '#ffffff',
      text: '#ffffff',
    },
    'palenight': {
      navBackground: '#1b1e2b',
      icon: '#717cb4',
      background: '#292d3e',
      lineNum: '#3a3f58',
      text: '#a6accd',
    },
    'ocean': {
      lineNum: '#00aaff',
      text: '#00aaff',
    },
  },
})