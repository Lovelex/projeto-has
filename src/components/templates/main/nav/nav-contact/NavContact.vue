<template>
  <div
    id="nav-contact"
    class="elevation-4 pa-1 d-flex justify-end justify-sm-space-between justify-md-end align-center"
  >
    <div class="nav-contact-icons d-none d-sm-flex d-md-none">
      <v-tooltip v-for="social in socials" :key="social.image" bottom>
        <template v-slot:activator="{ on }">
          <v-btn x-small light v-on="on" class="mx-2" fab target="_blank" :href="social.url">
            <v-icon>{{social.image}}</v-icon>
          </v-btn>
        </template>
        <span>{{social.tooltip}}</span>
      </v-tooltip>
    </div>
    <div class="d-flex">
      <div
        v-for="( contact, i ) in contacts"
        :key="i"
        class="nav-icon d-flex align-center py-1 px-4"
      >
        <v-icon class="mr-2" color="#212127">{{ contact.icon }}</v-icon>
        <span class="nav-content">{{ contact.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    contacts() {
      return this.$store.getters.getMainNavContacts;
    },
    socials() {
      return this.$store.getters.getSocials;
    }
  },
  mounted() {}
};
</script>

<style>
#nav-contact {
  position: fixed;
  z-index: 2;
  top: 64px;
  width: 100%;
  background-color: #deded8;
  color: #212127;
}

#nav-contact .nav-contact-icon {
  background-color: #fff;
  border-radius: 100%;
  font-size: 16px;
  width: 28px;
  height: 28px;
}

#nav-contact a {
  text-decoration: none;
  color: #000;
}
</style>