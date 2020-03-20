<template>
  <div class="admin-messages">
    <Sheet title="Mensagens">
      <div v-if="messages.length">
				
				<v-card  class="my-2 pa-4" v-for="message in messages" :key="message.id">
        <v-chip color="info" v-if="message.newMessage">
					<span class="font-weight-bold">NOVA MENSAGEM</span>
				</v-chip>
				<v-row>
          <v-col >
            <div>
              <span class="mr-2">Criado em:</span>
              <span>{{message.date}}</span>
            </div>
            <div>
              <span class="mr-2">Nome:</span>
              <span>{{message.name}}</span>
            </div>
            <div>
              <span class="mr-2">E-mail:</span>
              <span>{{message.email}}</span>
            </div>
            <div>
              <span class="mr-2">Assunto:</span>
              <span>{{message.title}}</span>
            </div>
            <div>
              <span class="mr-2">Mensagem:</span>
              <span>{{message.message}}</span>
            </div>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn @click="deleteMessage(message.id)" fab depressed color="error">
              <v-icon dark>mdi-delete</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
			</div>
			<h1 v-else class="grey--text text-center">Você não tem mensagens</h1>
    </Sheet>
  </div>
</template>

<script>
import Sheet from "../../templates/admin/sheet/Sheet";
import { db } from "../../../plugins/firebase";

export default {
  components: { Sheet },
  data: () => ({
    messages: []
  }),
  methods: {
		disableNewMessages() {
			db.collection('main')
				.doc('messages')
				.collection('messages')
				.where('newMessage', '==', true)
				.get()
				.then(docs => {
					if(!docs.empty) {
						docs.forEach(doc => {
							db.collection('main')
								.doc('messages')
								.collection('messages')
								.doc(doc.id)
								.update({ newMessage: false })
						})
					}
				})
		},
		deleteMessage(id) {
			db.collection('main')
				.doc('messages')
				.collection('messages')
				.doc(id)
				.delete()
		},
    getMessages() {
      db.collection('main')
				.doc('messages')
				.collection('messages')
        .get()
        .then(docs => {
          docs.forEach(doc => {
            this.messages.push(doc.data());
          });
        });
    },
    onMessagesChange() {
			db.collection('main')
				.doc('messages')
				.collection('messages')
				.orderBy('timeStamp', 'asc')
        .onSnapshot(snap => {
          snap.docChanges().forEach(change => {
            if(change.type === 'added') {
              this.messages.unshift(change.doc.data())
            } else if (change.type === 'removed') {
              this.messages = []
              this.getMessages()
            } else if (change.type === 'modified') {
              this.messages = []
              this.getMessages()
            }
          })
        })
		}
  },
  mounted() {
		this.onMessagesChange();
		this.disableNewMessages()
  }
};
</script>

<style>
</style>