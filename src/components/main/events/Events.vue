<template>
  <div id="main-events">
     <v-container>
       <EventCard 
        v-for="(event, i) in events"
        :key="i"
        :event="event"
        />
     </v-container>
  </div>
</template>

<script>
import { db } from '../../../plugins/firebase'
import EventCard from './EventCard.vue'

export default {
  components: { EventCard },
  data: () => ({
  }),
  computed: {
    events() {
      return this.$store.getters.getEvents
    }
  },
}
</script>

<style lang="scss">
  #main-events {
    margin-bottom: 140px;
  }
</style>