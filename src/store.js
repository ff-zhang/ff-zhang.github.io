import Vue from 'vue'

export const store = Vue.observable({
  settings: {
    selectedColourScheme: 'Material Theme Palenight',
    colourScheme: [
      'Material Theme Lighter',
      'Material Theme Palenight',
      'Material Theme Ocean',
    ],
    selectedTypingSpeed: 'Normal',
    typingSpeed: [
      'Slow',
      'Normal',
      'Fast',
      'Instant',
    ]
  }
})