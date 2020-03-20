import { db } from '../../plugins/firebase'

export default {
  state: {
    socials: []
  },
  getters: {
    getSocials(state) {
      return state.socials
    },
  },
  mutations: {
    setSocials(state, payload) {
      state.socials = payload
    }
  },
  actions: {
    dispatchSocials({commit, state}) {
      state.socials = []
      const getSocials = () => {
        db.collection('main')
        .doc('layout')
        .collection('socials')
        .get()
        .then(docs => {
          docs.docs.forEach(doc => {
            state.socials.push(doc.data())
            
          })
        })
      }
      db.collection('main')
        .doc('layout')
        .collection('socials')
        .onSnapshot(snap => {
          snap.docChanges().forEach(change => {
            if(change.type === 'added') {
              console.log(change.doc.data())
              state.socials.push(change.doc.data())
            } else if (change.type === 'removed') {
              state.socials = []
              getSocials()
            } else if (change.type === 'modified') {
              state.socials = []
              getSocials()
            }
          })
        })

    }
  }
}