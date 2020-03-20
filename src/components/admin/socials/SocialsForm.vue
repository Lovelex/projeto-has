<template>
  <div class="socials-form">
    <v-form @submit.prevent class="mx-4 my-2">
      <v-text-field v-model="social.tooltip" light label="Nome" />
      <v-text-field v-model="social.url" light label="Endereço" />
      <v-text-field v-model="social.image" light label="Ícone" />
      <div class="d-flex justify-end">
        <v-btn @click="closeDialog" class="mr-2" outlined color="secondary">
          <span class="font-weight-bold">Cancelar</span>
        </v-btn>
        <v-btn
          v-if="socialFormMode.submit"
          @click.prevent="submit"
          type="submit"
          
          color="primary"
        >
          <v-icon left>mdi-plus-circle</v-icon>
          <span class="font-weight-bold">{{viewPort.isMobile ? 'Novo' : 'Criar novo evento'}}</span>
        </v-btn>
        <v-btn
          v-if="socialFormMode.update"
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
  props: ['social', 'socialFormMode'],
  data: () => ({}),
  methods: {
    closeDialog() {
      this.$emit("closeDialog", false);
    },
    submit() {
      const ref = db.collection('main')
        .doc('layout')
        .collection("socials").doc();
      const refId = ref.id;
      ref
        .set({
          ...this.social,
          id: refId,
          timeStamp: new Date()
        })
        .then(() => {
          this.closeDialog()
        });
    },
    update() {
      db.collection('main')
        .doc('layout')
        .collection("socials").doc(this.social.id)
        .update({
          ...this.social
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