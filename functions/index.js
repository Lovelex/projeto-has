const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore()

exports.onMessagesChange = functions.firestore
	.document('main/messages/messages/{messages}')
	.onWrite(() => {
		db.collection('main')
			.doc('messages')
			.collection('messages')
			.where('newMessage', '==', true)
			.get()
			.then(snap => {
				if (snap.empty) {
					db.collection('main')
						.doc('messages')
						.set({ newMessagesCount: 0 })
				} else {
					db.collection('main')
						.doc('messages')
						.set({ newMessagesCount: snap.docs.length })
				}
			})
	})
