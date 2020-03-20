<template>
  <v-dialog v-model="dialog" light width="800">
    <v-card color="white mx-auto">
      <v-container>
        <v-card-title class="d-flex justify-center">
          <h2>{{title}}</h2>
        </v-card-title>
        <div >
          <slot>

          </slot>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  props: ["title", "dialog"],
  methods: {
    changeEventsMode() {
      this.$store.commit('setEventsMode', 'submit')
    }, 
  },
  computed: {
    events() {
      return this.$store.getters.getAdminEvents;
    }
  }
};
</script>

<style>
</style>