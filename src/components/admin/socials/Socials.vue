<template>
  <div class="admin-socials">
    <Sheet title="Mídias Sociais">
      <Dialog :dialog="dialog" title="Mídias Sociais">
        <SocialsForm
          :social="social"
          :socialFormMode="socialFormMode"
          @closeDialog="dialog = $event"
        ></SocialsForm>
      </Dialog>
      <v-btn @click="submitMode()" color="primary" dark absolute top right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-card class="d-flex pa-4 mt-4" v-for="(social, i) in socials" :key="i">
        <v-row>
          <v-col cols="12" sm="6">
            <div>
              <div>
                <span class="font-weight-bold mr-2">Ícone:</span>
                <v-icon color="grey darken-4">{{social.image}}</v-icon>
              </div>
              <div class="mt-4">
                <span class="font-weight-bold mr-2">Nome:</span>
                <span>{{social.tooltip}}</span>
              </div>
              <div class="mt-4">
                <span class="font-weight-bold mr-2">Url:</span>
                <a :href="social.url" target="_blank" rel="noopener noreferrer">
									<span>{{social.url}}</span>
								</a>
              </div>
            </div>
          </v-col>

          <v-col class="d-flex justify-start justify-sm-end" cols="12" sm="6">
            <div>
              <v-btn @click="setSocial(social)" class="mr-2" depressed fab small color="warning">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn @click="deleteSocial(social.id)" fab small depressed color="error">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </Sheet>
  </div>
</template>

<script>
import Sheet from "../../templates/admin/sheet/Sheet.vue";
import Dialog from "../../templates/admin/sheet/Dialog";
import SocialsForm from "./SocialsForm";
import { db } from "../../../plugins/firebase";

export default {
  components: { Sheet, Dialog, SocialsForm },
  data: () => ({
    social: {
      image: "",
      tooltip: "",
      url: ""
    },
    dialog: false,
    socialFormMode: {
      submit: true,
      update: false
    }
  }),
  computed: {
    socials() {
      return this.$store.getters.getSocials;
    }
  },
  methods: {
    submitMode() {
      this.socialFormMode.submit = true;
      this.socialFormMode.update = false;
      this.dialog = true;
      this.clearForm();
    },
    updateMode() {
      this.socialFormMode.submit = false;
      this.socialFormMode.update = true;
      this.dialog = true;
    },
    setSocial(social) {
      this.social = social;
      this.updateMode();
    },
    clearForm() {
      this.social = {};
    },
    deleteSocial(id) {
      db.collection("main")
        .doc("layout")
        .collection("socials")
        .doc(id)
        .delete();
    }
  }
};
</script>

<style lang="scss">
</style>