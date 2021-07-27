<template>
  <div class="nav h-100" :style="style">
    <b-nav class="pt-2 h-100" vertical>
      <b-link to="/" class="nav-icon mx-auto my-1" active-class="active" style="text-decoration: none;" exact>
        <h4 class="mb-0"><b>FZ</b></h4>
      </b-link>
      <b-link v-for="(route, i) in links" :key="i" :to="route.target" class="nav-icon mx-auto my-1" active-class="active">
        <b-icon :icon="route['icon']" font-scale="1.5" ></b-icon>
      </b-link>
      <b-nav-item class="mx-auto mt-auto" @click="toggleOverlay">
        <b-icon class="nav-icon active" icon="gear" font-scale="1.5"></b-icon>
      </b-nav-item>

      <b-overlay :show="showOverlay" no-wrap>
        <template #overlay>
          <b-card class="p-3">
            <b-form-group label="Colour Scheme:" label-for="select-colour-scheme">
              <b-form-select
                id="select-colour-scheme"
                v-model="settings.selectedColourScheme" 
                :options="colourSchemes"
              ></b-form-select>
            </b-form-group>

            <b-form-group label="Typing Speed:" label-for="set-typing-speed">
              <b-form-radio-group
                id="set-typing-speed"
                v-model="settings.selectedTypingSpeed" 
                :options="typingSpeeds"
              ></b-form-radio-group>
            </b-form-group>

            <b-button variant="outline-primary" size="sm" @click="toggleOverlay">Done</b-button>
          </b-card>
        </template>
      </b-overlay>
    </b-nav>
  </div>
</template>

<script>
import { store } from './../store.js'

export default {
  name: 'Navbar',
  methods: {
    toggleOverlay() {
      this.showOverlay = !this.showOverlay
    },
  },
  computed: {
    style() {
      return {
        '--background-color': store.themes[store.settings.selectedColourScheme].navBackground,
        '--icon-color': store.themes[store.settings.selectedColourScheme].icon,
        '--active-icon': store.themes[store.settings.selectedColourScheme].activeIcon,
      }
    },
  },
  data() {
    return {
      settings: store.settings,
      showOverlay: false, 
      links: [
        { target: '/education', icon: 'journal-bookmark-fill' },
        { target: '/projects', icon: 'hammer' },
        { target: '/goals', icon: 'card-checklist' },
      ],
      colourSchemes: [
        { value: 'lighter', text: 'Material Theme Lighter' },
        { value: 'darker', text: 'Material Theme Darker' },
        { value: 'palenight', text: 'Material Theme Palenight' },
        { value: 'ocean', text: 'Material Theme Ocean' },
      ],
      typingSpeeds: [
        'Slow',
        'Normal',
        'Fast',
        'Instant',
      ],
    }
  }
}
</script>

<style scoped>
.nav {
  background-color: var(--background-color);
}

.nav-icon {
  color: var(--icon-color);
}

.active {
  color: var(--active-icon);
}
</style>