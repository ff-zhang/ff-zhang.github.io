<template>
  <div class="h-100" :style="navStyle">
    <b-nav class="pt-2 h-100" vertical>
      <b-nav-item class="mx-auto" @click="settings.currentPage = 'home'">
        <span :style=iconStyle :active="settings.currentPage === 'home'" active-class="active">Felix</span>
      </b-nav-item>
      <b-nav-item v-for="link in links" class="mx-auto" :key="link['target']" @click="settings.currentPage = link['target']">
        <b-icon :icon="link['icon']" :active="settings.currentPage === link['target']" active-class="active" :style=iconStyle font-scale="1.5" ></b-icon>
      </b-nav-item>
      <b-nav-item class="mx-auto mt-auto" @click="toggleOverlay">
        <b-icon icon="gear" font-scale="1.5" :style=iconStyle></b-icon>
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
    navStyle() {
      return {
        backgroundColor: store.themes[store.settings.selectedColourScheme].navBackground 
      }
    },
    iconStyle() {
      return {
        color: store.themes[store.settings.selectedColourScheme].icon
      }
    },
  },
  data() {
    return {
      settings: store.settings,
      showOverlay: false, 
      links: [
        { target: 'education', icon: 'journal-bookmark-fill' },
        { target: 'projects', icon: 'hammer' },
        { target: 'goals', icon: 'card-checklist' },
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
.active {
  color: #ffffff
}
</style>