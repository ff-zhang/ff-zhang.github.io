<template>
  <div class="sidenav">
    <b-nav class="pt-3" justified vertical>
      <b-nav-item class="mx-auto" @click="$emit('click', 'home')">Felix</b-nav-item>
      <b-nav-item v-for="link in links" :key=link[0] class="mx-auto" @click="$emit('click', link[0])">
        <b-icon :icon=link[1] font-scale="1.5"></b-icon>
      </b-nav-item>
      <!-- TODO: put settings icon at the bottom of the page -->
      <b-nav-item class="mx-auto mt-5" @click="toggleOverlay">
        <b-icon icon="gear" font-scale="1.5"></b-icon>
      </b-nav-item>
    </b-nav>
    <b-overlay :show=show no-wrap>
      <template #overlay>
        <!-- TODO: add form for changing settings -->
        <b-button ref="done" variant="outline-primary" size="sm" @click="toggleOverlay">
          Done
        </b-button>
      </template>
    </b-overlay>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleOverlay() {
      this.show = !this.show
    }
  },
  data() {
    return {
      links: [
        ['education', 'journal-bookmark-fill'],
        ['projects', 'hammer'],
        ['goals', 'card-checklist'],
      ],
      show: false
    }
  }
}
</script>

<style scoped>

</style>