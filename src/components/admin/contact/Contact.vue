<template>
  <div class="admin-contact">
    <Sheet title="Contato">
      <Dialog :dialog="dialog" title="Contato">
        <ContactForm
          :contact="contact"
          :contactFormMode="contactFormMode"
          @closeDialog="dialog = $event"
        ></ContactForm>
      </Dialog>
      <v-btn @click="submitMode()" color="primary" dark absolute top right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-card class="d-flex pa-4 mt-4" v-for="(contact, i) in contacts" :key="i">
        <div>
          <div>
            <span class="font-weight-bold mr-2">Ícone:</span>
            <v-icon color="grey darken-4">{{contact.icon}}</v-icon>
          </div>
          <div class="mt-4">
            <span class="font-weight-bold mr-2">{{contact.label}}:</span>
            <span>{{contact.value}}</span>
          </div>
        </div>
        <v-spacer></v-spacer>
        <div>
          <v-btn @click="setContact(contact)" class="mr-2" depressed fab small color="warning">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn @click="deleteContact(contact.id)" fab small depressed color="error">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </v-card>
    </Sheet>
  </div>
</template>

<script>
import Sheet from "../../templates/admin/sheet/Sheet.vue";
import Dialog from "../../templates/admin/sheet/Dialog";
import ContactForm from "./ContactForm";
import { db } from "../../../plugins/firebase";

export default {
  components: { Sheet, Dialog, ContactForm },
  data: () => ({
    contact: {
      label: '',
      icon: '',
      value: ''
    },
    dialog: false,
    contactFormMode: {
      submit: true,
      update: false
    }
  }),
  computed: {
    contacts() {
      return this.$store.getters.getMainNavContacts;
    }
  },
  methods: {
    submitMode() {
      this.contactFormMode.submit = true
      this.contactFormMode.update = false
      this.dialog = true
      this.clearForm()
    },
    updateMode() {
      this.contactFormMode.submit = false
      this.contactFormMode.update = true
      this.dialog = true
    },
    setContact(contact) {
      this.contact = contact
      this.updateMode()
    },
    clearForm() {
      this.contact = {}
    },
    deleteContact(id) {
      db.collection('main')
        .doc('layout')
        .collection('contact')
        .doc(id)
        .delete()
    }
  },
};
</script>

<style>
</style>