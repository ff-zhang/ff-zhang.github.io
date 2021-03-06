import Vue from 'vue'

export const store = Vue.observable({
  settings: {
    selectedColourScheme: 'darker',
    selectedTypingSpeed: 'Fast',
  },
  themes: {
    'lighter': {
      navBackground: '#fafafa',
      icon: '#80cbc450',
      activeIcon: '#90a4ae',
      terminalBackground: '#ffffff',
      lineNum: '#cfd8dc',
      text: '#90a4ae',
      string: '#91b859',
      comment: '#90a4ae50',
      punctuation: '#39adb5',
    },
    'darker': {
      navBackground: '#1a1a1a',
      icon: '#61616150',
      activeIcon: '#eeffff',
      terminalBackground: '#212121',
      lineNum: '#424242',
      text: '#eeffff',
      string: '#C3e88d',
      comment: '#4a4a4a',
      punctuation: '#89DDFF',
    },
    'palenight': {
      navBackground: '#1b1e2b',
      icon: '#717cb450',
      activeIcon: '#a6accd',
      terminalBackground: '#292d3e',
      lineNum: '#3a3f58',
      text: '#a6accd',
      string: '#C3e88d',
      comment: '#676e95',
      punctuation: '#89DDFF',
    },
    'ocean': {
      navBackground: '#090b10',
      icon: '#717cb450',
      activeIcon: '#8f93a2',
      terminalBackground: '#0f111a',
      lineNum: '#3b3f5180',
      text: '#8f93a2',
      string: '#C3e88d',
      comment: '#464b5d',
      punctuation: '#89DDFF',
    },
  },
})