import { db } from '../../plugins/firebase'

export default {
  state: {
    mainNavContacts: []
  },
  getters: {
    getMainNavContacts(state) {
      return state.mainNavContacts
    },
  },
  mutations: {
    setContacts(state, payload) {
      state.mainNavContacts = payload
    }
  },
  actions: {
    dispatchContacts({commit, state}) {
      state.mainNavContacts = []
      const getContacts = () => {
        db.collection('main')
        .doc('layout')
        .collection('contact')
        .get()
        .then(docs => {
          docs.docs.forEach(doc => {
            state.mainNavContacts.push(doc.data())
            
          })
        })
      }
      db.collection('main')
        .doc('layout')
        .collection('contact')
        .onSnapshot(snap => {
          snap.docChanges().forEach(change => {
            if(change.type === 'added') {
              state.mainNavContacts.push(change.doc.data())
            } else if (change.type === 'removed') {
              state.mainNavContacts = []
              getContacts()
            } else if (change.type === 'modified') {
              state.mainNavContacts = []
              getContacts()
            }
          })
        })

    }
  }
}