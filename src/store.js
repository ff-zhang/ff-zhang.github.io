import Vue from 'vue'

export const store = Vue.observable({
  page: {
    currentPage: 'home',
  },
  settings: {
    selectedColourScheme: 'Material Theme Palenight',
    colourScheme: [
      'Material Theme Lighter',
      'Material Theme Palenight',
      'Material Theme Ocean',
    ],
    selectedTypingSpeed: 'Fast',
    typingSpeed: [
      'Slow',
      'Normal',
      'Fast',
      'Instant',
    ]
  },
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
      'You can find me at [',
      '&emsp;&emsp;<a href="#">email</a>, <a href="#">github</a>, <a href="#">instagram</a>, <a href="#">resumé</a>',
      '];'
    ],
    education: [
      'University of Toronto (Toronto, ON)',
      '<i>Sept. 2021 - Now</i>',
      '',
      'St. Michaels University School (Victoria, BC)',
      '<i>Sept. 2019 - June 2021</i>',
      '',
      'Esquimalt High School (Victoria, BC)',
      '<i>Sept. 2017 - June 2019</i>'
    ],
    projects: [
      'Video Producer (Westcoast Academy of Performing Arts)',
    ],
    goals: [
      '<s>Graduate high school</s> (June 2021)',
      'Live in Europe for at least two months',
      'Attend a Liverpool FC match',
      'Contribute to a open-source project I have used',
    ]
  },
})