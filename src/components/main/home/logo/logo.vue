<template>
  <div id="logo">
    <v-parallax :height="parallaxSize" src="@/assets/img/photo1280x720.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-img width="900" class="logo ml-auto mr-auto" src="@/assets/img/logo.png"></v-img>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  props: ["viewPort"],
  data: () => ({}),
  computed: {
    parallaxSize() {
      if(this.viewPort > 1264)
        return '600'
      if(this.viewPort < 960 & this.viewPort > 600 )
        return '400'
      if(this.viewPort <= 600)
        return '300'
    }
  }
};
</script>

<style>
</style>