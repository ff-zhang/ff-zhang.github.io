<template>
  <Terminal :lines="lines"/>
</template>

<script>
import Terminal from './Terminal.vue'

export default {
  name: 'Education',
  components: {
    Terminal
  },
  data() {
    return {
      lines: [
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
    }
  }
}
</script>

<style scoped>

</style>