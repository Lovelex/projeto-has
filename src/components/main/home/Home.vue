<template>
  <div id="home" v-resize="onResize">
    <Logo :viewPort="viewPort" />
    <Events />
    <Biography />
    <Abilities :isMobile="isMobile" />
    <Genres :isMobile="isMobile" />
    <Email />
  </div>
</template>

<script>

import Logo from "./logo/logo.vue";
import Events from "./events/Events.vue";
import Biography from "./biography/Biography.vue";
import Abilities from "./abilities/Abilities.vue";
import Genres from "./genres/Genres.vue";
import Email from "./email/Email.vue";

export default {
  components: {
    Logo,
    Events,
    Biography,
    Abilities,
    Genres,
    Email
  },
  data: () => ({
    viewPort: 0,
    mobileSize: 600,
    isMobile: false
  }),
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < this.mobileSize ? true : false;
      this.viewPort = window.innerWidth;
    }
  },
  mounted() {
    this.onResize();
  }
};
</script>

<style>

 
</style>