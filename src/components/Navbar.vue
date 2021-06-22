<template>
  <div class="sidenav h-100" :style="style">
    <b-nav class="pt-2 h-100" vertical>
      <b-nav-item class="mx-auto" @click="settings.currentPage = 'home'"><span :style=iconStyle>Felix</span></b-nav-item>
      <b-nav-item v-for="link in links" :key="link['target']" class="mx-auto" @click="settings.currentPage = link['target']">
        <b-icon :icon="link['icon']" font-scale="1.5" :style=iconStyle></b-icon>
      </b-nav-item>
      <b-nav-item class="mx-auto mt-auto" @click="toggleOverlay">
        <b-icon icon="gear" font-scale="1.5" :style=iconStyle></b-icon>
      </b-nav-item>

      <b-overlay :show="show" no-wrap>
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
      this.show = !this.show
    },
  },
  data() {
    return {
      settings: store.settings,
      links: [
        { target: 'education', icon: 'journal-bookmark-fill' },
        { target: 'projects', icon: 'hammer' },
        { target: 'goals', icon: 'card-checklist' },
      ],
      colourSchemes: [
        { value: 'lighter', text: 'Material Theme Lighter',},
        { value: 'palenight', text: 'Material Theme Palenight' },
        { value: 'ocean', text: 'Material Theme Ocean' },
      ],
      typingSpeeds: [
        'Slow',
        'Normal',
        'Fast',
        'Instant',
      ],
      show: false,
      style: {
        backgroundColor: '#1b1e2b',
      },
      iconStyle: {
        color: '#717cb4' // 717cb450
      }
    }
  }
}
</script>

<style scoped>

</style>