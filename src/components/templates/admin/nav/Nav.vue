<template>
  <nav class="admin-nav">
    <Drawer
      :newMessagesCount="newMessagesCount"
      @isDrawerChange="isDrawer = $event"
      :isDrawer="isDrawer"
    ></Drawer>
    <v-app-bar app color="firestacks">
      <v-app-bar-nav-icon @click="isDrawer = !isDrawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn :to="{path: '/'}" outlined color="white">VOLTAR PARA PÁGINA PRINCIPAL</v-btn>
    </v-app-bar>
    <v-snackbar v-model="snackbar.active" :color="snackbar.color" right>
      <span>
        {{snackbar.message}}
      </span>
    </v-snackbar>
  </nav>
</template>

<script>
import Drawer from "./Drawer";
import { db } from "../../../../plugins/firebase";

export default {
  components: { Drawer },
  data: () => ({
    isDrawer: true,
    newMessagesCount: 0,
    snackbar: {
      active: false,
      message: "Você recebeu uma nova mensagem!",
      color: "info"
    }
  }),
  methods: {
    getNewMessagesCount() {
      db.collection("main")
        .doc("messages")
        .onSnapshot(snap => {
          this.newMessagesCount = snap.data().newMessagesCount;
        });
    },
    getNewMessageAlert() {
      db.collection("main")
        .doc("messages")
        .collection("messages")
        .onSnapshot(snap => {
          snap.docChanges().forEach(change => {
            if (change.type === "added") {
              this.snackbar.active = true
            }
          });
        });
    }
  },
  mounted() {
    this.getNewMessagesCount();
    this.getNewMessageAlert();
  }
};
</script>

<style>
</style>