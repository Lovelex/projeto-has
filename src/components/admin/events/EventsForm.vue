<template>
  <div class="events-form">
    <v-form @submit.prevent class="mx-4 my-2">
      <v-text-field v-model="event.place" light label="Endereço" />
      <v-text-field v-model="event.date" light label="Data" />
      <v-text-field v-model="event.time" light label="Horário" />
      <v-text-field v-model="event.image" light label="Imagem (Url)" />
      <v-text-field v-model="event.localization" light label="Localização (Url)" />
      <v-textarea v-model="event.paragraph" light label="Descrição do evento" />
      <div class="d-flex justify-end">
        <v-btn @click="closeDialog" class="mr-2" outlined color="secondary">
          <span class="font-weight-bold">Cancelar</span>
        </v-btn>
        <v-btn
          v-if="eventFormMode.submit"
          @click.prevent="submit"
          type="submit"
          
          color="primary"
        >
          <v-icon left>mdi-plus-circle</v-icon>
          <span class="font-weight-bold">{{viewPort.isMobile ? 'Novo' : 'Criar novo evento'}}</span>
        </v-btn>
        <v-btn
          v-if="eventFormMode.update"
          @click.prevent="update"
          type="submit"
          color="warning"
        >
          <v-icon left >mdi-pencil</v-icon>
          <span class="font-weight-bold">{{viewPort.isMobile ? 'Editar' : 'Editar evento'}}</span>
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { db } from "../../../plugins/firebase";

export default {
  props: ['event', 'eventFormMode'],
  data: () => ({}),
  methods: {
    closeDialog() {
      this.$emit("closeDialog", false);
    },
    submit() {
      const ref = db.collection("events").doc();
      const refId = ref.id;
      ref
        .set({
          ...this.event,
          id: refId,
          timeStamp: new Date()
        })
        .then(() => {
          this.closeDialog()
        });
    },
    update() {
      db.collection("events")
        .doc(this.event.id)
        .update({
          ...this.event
        })
        .then(() => {
          this.closeDialog()
        })
    },
  },
  computed: {

    viewPort() {
      return this.$store.getters.getViewPort
    }
  }
};
</script>

<style>
</style>