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
        'University of Toronto | Sept. 2021 - Present',
        '<i>H.B.Sc. in Computer Science',
        '<ul class="mb-0"><li>designated a University of Toronto Scholar</li></ul>',
        '',
        'St. Michaels University School | Sept. 2019 - June 2021',
        '<i>Dogwood Diploma; 97% GPA</i>',
        '<ul class="mb-0"><li>received the Alumni Association Award for the highest average grade in three science courses</li></ul>',
        '<ul class="mb-0"><li>co-head of Math Club + Astronomy Club</li></ul>',
        '<ul class="mb-0"><li>awarded distinction or outstanding contribution in every class taken</li></ul>',
        '',
        'Esquimalt High School | Sept. 2017 - June 2019',
        '<ul class="mb-0"><li>received an award for academic excellence in 13 classes</li></ul>',
        '<ul class="mb-0"><li>co-director of lighting for the production of "Urinetown"</li></ul>',
      ],
    }
  }
}
</script>

<style scoped>

</style>