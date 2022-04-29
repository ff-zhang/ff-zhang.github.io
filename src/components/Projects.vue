<template>
  <TerminalBlock :lines="lines"/>
</template>

<script>
import TerminalBlock from './Terminal.vue'

export default {
  name: 'ProjectsView',
  components: {
    TerminalBlock
  },
  data() {
    return {
      lines: [
        '<h5 class="mb-0"><strong>Work / Volunteer Experience </strong></h5>',
        '<strong>Video Producer</strong> | Westcoast Academy of Performing Arts',
        '',
        '<strong>Website</strong> | Business Leadership Club @ <abbr title="St. Michaels University School">SMUS</abbr>',
        '',
        '',
        '<h5 class="mb-0"><strong>Projects</strong></h5>',
        'Resumé Website',
        '',
      ],
    }
  }
}
</script>

<style scoped>

</style>