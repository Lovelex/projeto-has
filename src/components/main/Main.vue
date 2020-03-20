<template>
  <div id="main-main" class="mt-10">
    
    <Player />
    <NavHandler />
    <v-content>
      <Sidebar />
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>

import NavHandler from "../templates/main/nav/NavHandler";
import Sidebar from "../templates/main/sidebar/Sidebar.vue";
import Player from "../templates/main/player/Player.vue";

export default {
  components: {
    NavHandler,
    Sidebar,
    Player,
  },
  data:() => ({
    data: []
  }),
  methods: {
		dispatchs() {
      this.$store.dispatch('dispatchSocials')
      this.$store.dispatch('dispatchContacts')
      this.$store.dispatch('dispatchEvents')
    },
	},
	mounted() {
    this.dispatchs()
	}
}
</script>

<style>

</style>