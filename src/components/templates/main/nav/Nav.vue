<template>
  <nav id="main-nav">
    <!-- DRAWER'S START -->
    <v-navigation-drawer color="#101010" v-model="drawer" app>
      <v-list>
        <v-list-item color="white" :to="tab.to" v-for="(tab, i) in tabs" :key="i">
          <v-list-item-icon>
            <v-icon>{{ tab.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{tab.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- DRAWER'S END -->

    <v-app-bar fixed color="#0E0E0E" flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-tabs class="d-none d-sm-block" color="white" right>
        <v-tab exact-active-class="white-transparent" class="white--text" :to="tab.to" v-for="(tab, i) in tabs" :key="i">{{ tab.name }}</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <div class="main-nav-icons d-flex d-block d-sm-none">
        <v-btn class="mx-1" small light :href="social.url" target="_blank" v-for="social in socials" :key="social.image" fab>
          <v-icon>
            {{ social.image }}
          </v-icon>
        </v-btn>
      </div>
    </v-app-bar>
  </nav>
</template>

<script>
import NavContact from "./nav-contact/NavContact.vue";

export default {
  props: ['socials'],
  data: () => ({
    drawer: false,
  }),
  computed: {
    tabs() {
      return this.$store.getters.getTabs
    },
  },

};
</script>

<style>
#main-nav {
  z-index: 100;
}

#main-nav .main-nav-icon {
  background-color: #fff;
  border-radius: 100%;
  color: #000;
  font-size: 24px;
  width: 44px;
  height: 44px;
}

#main-nav a {
  text-decoration: none;
  color: #000;
}

#main-nav .white-transparent {
  background-color: rgba(255, 255, 255, 0.25);
}
</style>