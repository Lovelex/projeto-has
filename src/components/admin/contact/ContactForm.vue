<template>
  <div class="contact-form">
    <v-form @submit.prevent class="mx-4 my-2">
      <v-text-field v-model="contact.label" light label="Forma de contato" />
      <v-text-field v-model="contact.value" light label="Descrição do contato" />
      <v-text-field v-model="contact.icon" light label="Ícone (opcional)" />
      <div class="d-flex justify-end">
        <v-btn @click="closeDialog" class="mr-2" outlined color="secondary">
          <span class="font-weight-bold">Cancelar</span>
        </v-btn>
        <v-btn v-if="contactFormMode.submit" @click.prevent="submit" type="submit" color="primary">
          <v-icon left>mdi-plus-circle</v-icon>
          <span class="font-weight-bold">{{viewPort.isMobile ? 'Novo' : 'Criar novo evento'}}</span>
        </v-btn>
        <v-btn v-if="contactFormMode.update" @click.prevent="update" type="submit" color="warning">
          <v-icon left>mdi-pencil</v-icon>
          <span class="font-weight-bold">{{viewPort.isMobile ? 'Editar' : 'Editar evento'}}</span>
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { db } from "../../../plugins/firebase";

export default {
  props: ["contactFormMode", "contact"],
  data: () => ({}),
  methods: {
    submit() {
      const ref = db
        .collection("main")
        .doc("layout")
        .collection("contact")
        .doc()
      const id = ref.id
      ref.set(
        {
          ...this.contact,
          id
        }
        )
        .then(() => {
          this.closeDialog()
        })
    },
    update() {
      db.collection("main")
        .doc('layout')
        .collection('contact')
        .doc(this.contact.id)
        .update({
          ...this.contact
        })
        .then(() => {
          this.closeDialog();
        });
    },
    closeDialog() {
      this.$emit("closeDialog", false);
    }
  },
  computed: {
    viewPort() {
      return this.$store.getters.getViewPort;
    }
  }
};
</script>

<style>
</style>