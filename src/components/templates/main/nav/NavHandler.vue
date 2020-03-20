<template>
  <div>
    <Nav :socials="socials" />
    <nav-contact :socials="socials"></nav-contact>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import NavContact from "./nav-contact/NavContact.vue";

export default {
  components: { Nav, NavContact },
  computed: {
    socials() {
      return this.$store.getters.getSocials;
    }
  }
};
</script>

<style>
</style>