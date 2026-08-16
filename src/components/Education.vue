<template>
  <TerminalBlock :lines="lines"/>
</template>

<script>
import TerminalBlock from './Terminal.vue'

export default {
  name: 'EducationView',
  components: {
    TerminalBlock
  },
  data() {
    return {
      lines: [
        '<h3 class="mb-0"><strong>Education</strong></h3>',
        '<h5><strong>University of Toronto</strong></h5> <span class="punc">|</span> Sept. 2021 - Present',
        '<i>M.Sc. in Computer Science<span class="punc">;</span> 4.0 cGPA</i>',
        'Awards &amp; Scholarships',
        '<ul class="mb-0"><li>Ontario Graduate Scholarship (<i>$15 000</i>) <small><span class="punc">|</span> May 2025 - April 2026</small></li></ul>',
        '<ul class="mb-0"><li>[Declined] Queen Elizabeth II Graduate Scholarships in Science and Technology (<i>$15 000</i>) <small><span class="punc">|</span> May 2025 - April 2026</small></li></ul>',
        '<i>H.B.Sc. in Computer Science, Major in Mathematics<span class="punc">;</span> 3.96 cGPA</i>',
        'Awards &amp; Scholarships',
        '<ul class="mb-0"><li>Fields Undergraduate Summer Research Program (<i>$3 800</i>) <small><span class="punc">|</span> June. 2024 - Aug. 2024</small></li></ul>',
        '<ul class="mb-0"><li>Louis Savlov Scholarships in Sciences And Humanities (<i>$500</i>) <small><span class="punc">|</span> Nov. 2023 - Jan. 2025</small></li></ul>',
        '<ul class="mb-0"><li>Dean\'s List Scholar <small><span class="punc">|</span> Sept. 2021 - June 2025</small></li></ul>',
        '<ul class="mb-0"><li>Second Malcom Wallace Scholarship (<i>$7 500</i>) <small><span class="punc">|</span> Sept. 2021 - Oct. 2024</small></li></ul>',
        '<ul class="mb-0"><li>B.C. Achievement Scholarship (<i>$7 500</i>) <small><span class="punc">|</span> Aug. 2021</small></li></ul>',
        '<ul class="mb-0"><li>District/Authority Scholarship (<i>$7 500</i>) <small><span class="punc">|</span> Aug. 2021</small></li></ul>',
      ],
    }
  }
}
</script>

<style>
h3, h5 {
    display: inline;
}
</style>