<template>
  <div id="events">
    <v-container class="d-flex flex-column align-center">
      <h3 class="event-title mt-8 mb-4 mobile-font-size-title has-title">Próximos eventos</h3>
      <v-expansion-panels>
        <v-expansion-panel class="mb-2" v-for="(event, i) in events" :key="i">
          <v-expansion-panel-header>
            <v-row align="center" justify="center">
              <v-col class="d-flex justify-center justify-sm-start" cols="12" sm="6">
                <span class="mobile-font-size event-date">{{ event.date }}</span>
              </v-col>
              <v-col class="d-flex justify-center justify-sm-start" cols="12" sm="6">
                <span class="mobile-font-size event-place">{{ event.place }}</span>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p class="mobile-font-size event-content">{{ event.paragraph }}</p>
            <div class="d-flex justify-end mt-4">
              <v-btn target="_blank" :href="event.localization" outlined tile>
              <v-icon left>mdi-map-search-outline</v-icon>
              <span>VER LOCALIZAÇÃO NO MAPA</span>
            </v-btn>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-btn to="/eventos" large block class="mt-2 mb-8" tile light color="#E1E1E1">
        <span class="font-weight-bold mobile-font-size">VER MAIS EVENTOS</span>
      </v-btn>
    </v-container>
  </div>
</template>

<script>
import { db } from "../../../../plugins/firebase";

export default {
  data: () => ({
    events: []
  }),
  methods: {
    getEvents() {
      db.collection("events")
        .get()
        .then(docs => {
          docs.forEach(doc => {
            this.events.push(doc.data());
          });
        });
    }
  },
  mounted() {
    this.getEvents();
  }
};
</script>

<style>
#events {
  background-image: url(../../../../assets/img/background.jpg);
  background-position-x: center;
}
</style>