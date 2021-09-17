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
        '<h5 class="mb-0"><strong>Education</strong></h5>',
        '<strong>University of Toronto</strong> <span class="punc">|</span> <small>Sept. 2021 - Present</small>',
        '<i>H.B.Sc. in Computer Science<span class="punc">;</span> n/a cGPA</i>',
        '<ul class="mb-0"><li>designated a University of Toronto Scholar</li></ul>',
        '',
        '<strong>St. Michaels University School</strong> <span class="punc">|</span> <small>Sept. 2019 - June 2021</small>',
        '<i>Dogwood Diploma<span class="punc">;</span> 97% GPA</i>',
        '<ul class="mb-0"><li>received the Alumni Association Award for the highest average grade over three science courses <span class="comment"># 2021</span></li></ul></li></ul>',
        '<ul class="mb-0"><li>awarded distinction or outstanding contribution in every class taken</li></ul>',
        '<ul class="mb-0"><li>head of the first place team in the Industry 4.0 Challenge <span class="comment"># 2021</span></li></ul></li></ul>',
        '<ul class="mb-0"><li>co-head of Math Club and Astronomy Club <span class="comment"># 2021</span></li></ul></li></ul></li></ul>',
        '<ul class="mb-0"><li>wrote a <a href="#">paper</a> on using convolutional neural networks to restore images <span class="comment"># AP Research</span></li></ul>',
        '',
        '<strong>Esquimalt High School</strong> <span class="punc">|</span> <small>Sept. 2017 - June 2019</small>',
        '<ul class="mb-0"><li>received an award for academic excellence in thirteen classes and one for service <span class="comment"># 2019</span></li></ul>',
        '<ul class="mb-0"><li>co-director of lighting for the production of "Urinetown" <span class="comment"># 2018-19</span></li></ul>',
        '<ul class="mb-0"><li>co-head of Model United Nations club</li></ul>',
        '<ul class="mb-0"><li>secretary of Youth Political Commons club</li></ul>',
      ],
    }
  }
}
</script>

<style scoped>

</style>