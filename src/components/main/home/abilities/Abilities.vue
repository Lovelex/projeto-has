<template>
  <div id="abilities">
    <v-container class="d-flex flex-column align-center">
      <h4 class="abilities-title mb-4 has-title">{{title}}</h4>
      <div class="abilities-icons d-flex justify-space-around">
        <div v-for="icon in icons" :key="icon.iconText" 
          class="abilities-violao abilities-icon d-flex 
            flex-column justify-center align-center">
          <v-img :width="isMobile ? iconsSizeMobile : iconsSize" :src="icon.iconSrc"></v-img>
          <span class="abilities-icon-name mt-2 mb-8">{{icon.iconText}}</span>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import vio from '@/assets/img/vio.png'
import mic from '@/assets/img/mic.png'
import bai from '@/assets/img/bai.png'

export default {
  props: ['isMobile'],
  data: () => ({
    title: 'Instrumentos',
    iconsSize: 74,
    iconsSizeMobile: 42,
    icons: [
      {
        iconSrc: vio,
        iconText: 'Violão'
      },
      {
        iconSrc: mic,
        iconText: 'Voz'
      },
      {
        iconSrc: bai,
        iconText: 'Contra-Baixo'
      },
      ]
  })
}
</script>

<style>
  #abilities {
    background-color: #0c0c0c;
  }

  #abilities .abilities-icons {
    width: 100%;
  }

  #abilities .v-image {
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.75))
  }
</style>