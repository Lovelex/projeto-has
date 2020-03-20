<template>
  <v-app>
    <router-view v-resize="onResize"></router-view>
  </v-app>
</template>

<script>
export default {
  methods: {
    onResize() {
      this.$store.getters.getViewPort.isMobile =
        window.innerWidth < this.$store.getters.getViewPort.mobileSize
          ? true
          : false;
      this.$store.getters.getViewPort.value = window.innerWidth;
    }
  },
  mounted() {
    this.onResize();
  }
};
</script>

<style>
@media screen and (max-width: 600px) {
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1.333rem;
  }
  span,
  p {
    font-size: 0.75rem;
  }
}

@media screen and (min-width: 601px) {
  h3 {
    font-size: 2.313rem;
  }
  h4 {
    font-size: 1.777rem;
  }
}

.has-title {
  letter-spacing: 2.5px;
}

html {
  font-size: 16px;
}

p {
  margin-bottom: 0 !important;
}
</style>