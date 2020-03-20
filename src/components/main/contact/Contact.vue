<template>
  <div id="contact">
    <v-container>
      <div class="contact-biography mt-12">
        <v-row align="center">
          <v-col class="d-flex d-sm-block justify-center" cols="12" sm="4">
            <v-img width="300" src="@/assets/img/avatar.png"></v-img>
          </v-col>
          <v-col cols="12" sm="8">
            <div class="contact-paragraph pa-6">
              <h3 class="contact-name">Humberto Alisson</h3>
              <p
                class="mt-6"
              >Sua trajetória musical iniciou-se na década de 1990. Foi vocalista e baixista da banda Hávida, com a gravação de um CD. A partir de 2002, se tornou músico profissional como free lancer. Fez curso de teoria musical e ritmos brasileiros na Ordem dos Músicos de Belo Horizonte. Já acompanhou vários artistas e músicos da cena mineira dentro e fora do estado.</p>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="contact-content mt-12">
        <v-row no-gutters>
          <v-col cols="12" sm="6" class="white">
            <div class="contact-contact contact-box black--text pa-6 mr-0 mr-sm-2">
              <h3 class="mb-5">Entre em contato</h3>
              <div v-for="(contact, i) in contacts" :key="i" class="contact-info my-2">
                <span class="contact-label mr-2 font-weight-bold">{{contact.label}}:</span>
                <span class="contact-value">{{contact.value}}</span>
              </div>
              <div class="contact-social mt-12">
                <h4 class="text-center">Mídias Sociais</h4>
                <div class="contact-social-icons mt-6 d-flex justify-center">
                  <v-tooltip v-for="social in socials" :key="social.image" top>
                    <template v-slot:activator="{ on }">
                      <v-btn v-on="on" class="mx-2" fab target="_blank" :href="social.url">
                        <v-icon>{{social.image}}</v-icon>
                      </v-btn>
                    </template>
                    <span>{{social.tooltip}}</span>
                  </v-tooltip>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" class>
            <div class="contact-form contact-box black--text pa-6 ml-0 ml-sm-2 mt-4 mt-sm-0">
              <h3 class="mb-4">Mande uma mensagem</h3>
              <v-form @submit.prevent="submit">
                <v-text-field label="Nome" light color="black"></v-text-field>
                <v-text-field label="E-mail" light color="black"></v-text-field>
                <v-text-field label="Assunto" light color="black"></v-text-field>
                <v-textarea light label="Mensagem" color="black"></v-textarea>
                <div class="d-flex justify-end">
                  <v-btn :loading="isMessageLoading" type="submit">ENVIAR MENSAGEM</v-btn>
                </div>
              </v-form>
              <v-snackbar :color="snackbar.color" right v-model="snackbar.active">
                <span class="text-center">{{snackbar.message}}</span>
              </v-snackbar>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import { db } from "../../../plugins/firebase";

export default {
  data: () => ({
    message: {
      name: "",
      email: "",
      title: ""
    },
    isMessageLoading: false,
    snackbar: {
      active: false,
      message: "",
      color: ''
    }
  }),
  methods: {
    submit() {
      this.isMessageLoading = true
      const messagesRef = db
        .collection("main")
        .doc("messages")
        .collection("messages")
        .doc();
      const messageId = messagesRef.id;

      messagesRef
        .set({
          ...this.message,
          id: messageId,
          date: new Date().toLocaleString(),
          newMessage: true,
          timeStamp: Date.now()
        })
        .then(() => {
          this.snackbar.message = "Mensagem enviada com sucesso!"
          this.snackbar.active = true
          this.snackbar.color = 'success'
        })
        .catch(e => {
          this.snackbar.message = "Algo deu errado, tente novamente mais tarde"
          this.snackbar.active = true
          this.snackbar.color = 'error'
        })
        .finally(() => {
          this.message = {}
          this.isMessageLoading = false
        })
    }
  },
  computed: {
    socials() {
      return this.$store.getters.getSocials;
    },
    contacts() {
      return this.$store.getters.getMainNavContacts;
    }
  },
  created() {}
};
</script>

<style>
#contact {
  background-image: url(../../../assets/img/background.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position-x: center;
  margin-bottom: 141px;
}

#contact .contact-paragraph {
  background-color: rgba(0, 0, 0, 0.7);
}

#contact .contact-box {
  background-color: #fff;
}

.oteste {
  height: 100%;
}
</style>