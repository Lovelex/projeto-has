<template>
  <aside class="d-none d-md-flex" id="sidebar">
    <v-tooltip v-for="social in socials" :key="social.image" right>
      <template v-slot:activator="{ on }">
        <v-btn small light v-on="on" class="mx-2" fab target="_blank" :href="social.url">
          <v-icon>{{social.image}}</v-icon>
        </v-btn>
      </template>
      <span>{{social.tooltip}}</span>
    </v-tooltip>
  </aside>
</template>

<script>
export default {
  computed: {
    socials() {
      return this.$store.getters.getSocials;
    }
  }
};
</script>

<style>
#sidebar {
  position: fixed;
  top: 25%;
  z-index: 10;
  border-top-right-radius: 33.5px;
  border-bottom-right-radius: 33.5px;
  height: 400px;
  width: 64px;
  background-color: rgba(0, 0, 0, 0.75);
  border: solid white 1px;
  border-left: none;
}

#sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>