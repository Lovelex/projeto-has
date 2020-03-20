<template>
  <div class="admin-events">
    <Sheet title="Eventos">
      <Dialog :dialog="dialog" title="Evento">
        <eventsForm
          :event="event"
          :eventFormMode="eventFormMode"
          @closeDialog="dialog = $event"
        ></eventsForm>
      </Dialog>
      <v-btn @click="submitMode()" color="primary" dark absolute top right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn> 
      <v-expansion-panels v-if="events.length">
        <v-expansion-panel v-for="(event, i) in events" :key="i" class="elevation-4 my-2">
          <v-expansion-panel-header color="white">
            <div class="d-flex">
              <div class="d-flex flex-column mr-2">
                <v-btn @click="setEvent(event)" class="mb-2" x-small depressed color="warning" fab>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn @click="deleteEvent(event.id)" x-small depressed color="error" fab>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
              <v-row no-gutters>
                <v-col cols="12" sm="2">
                  <div class="mb-2 mr-2 d-flex justify-center justify-sm-start">
                    <v-img  max-width="74px" max-height="74px" :src="event.image"></v-img>
                  </div>
                </v-col>
                <v-col cols="12" sm="10">
                  <v-row no-gutters >
                    <v-col cols="12" sm="12">
                      <div class="">
                        <span class="font-weight-bold">Endereço: </span>
                        <span>{{event.place}}</span>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <div class="mt-2 ">
                        <span class="font-weight-bold">Horário: </span>
                        <span>{{event.time}}</span>
                      </div>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <div class="mt-2 ">
                        <span class="font-weight-bold">Data: </span>
                        <span>{{event.date}}</span>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p class="font-weight-bold">{{event.paragraph}}</p>
            <v-btn
              target="_blank"
              :href="event.localization"
              class="float-right mt-4"
              tile
              outlined
            >Localização</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <h1 v-else class="grey--text text-center">Você não possui eventos</h1>
    </Sheet>
  </div>
</template>

<script>
import Sheet from "../../templates/admin/sheet/Sheet.vue";
import Dialog from '../../templates/admin/sheet/Dialog'
import EventsForm from './EventsForm'
import { db } from "../../../plugins/firebase";

export default {
  components: { Sheet, Dialog, EventsForm },
  data: () => ({
    event: {
      image: "",
      date: "",
      time: "",
      place: "",
      paragraph: "",
      localization: "",
    },
    dialog: false,
    eventFormMode: {
      submit: true,
      update: false
    }
  }),
  computed: {
    events() {
      return this.$store.getters.getEvents;
    }
  },
  methods: {
    submitMode() {
      this.eventFormMode.submit = true
      this.eventFormMode.update = false
      this.dialog = true
      this.clearForm()
    },
    updateMode() {
      this.eventFormMode.submit = false
      this.eventFormMode.update = true
      this.dialog = true
    },
    setEvent(event) {
      this.event = event
      this.updateMode()
    },
    clearForm() {
      this.event = {}
    },
    deleteEvent(id) {
      db.collection('events')
        .doc(id)
        .delete()
    }
  },
  
};
</script>

<style lang="scss">
.expansion-relative {
  position: relative;

  .expansion-buttons {
    position: absolute;
    top: 16px;
    right: 66px;
  }
}
</style>