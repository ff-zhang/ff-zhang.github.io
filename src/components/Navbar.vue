<template>
  <b-nav class="pt-3" vertical>
    <b-nav-item @click="$emit('click', 'home')">Felix</b-nav-item>
    <b-nav-item @click="$emit('click', 'education')">
      <b-icon icon="journal-bookmark-fill"></b-icon>
    </b-nav-item>
    <b-nav-item @click="$emit('click', 'projects')">
      <b-icon icon="hammer"></b-icon>
    </b-nav-item>
    <b-nav-item @click="$emit('click', 'goals')">
      <b-icon icon="card-checklist"></b-icon>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default ({
  name: 'Navbar'
})
</script>

<style scoped>

</style>