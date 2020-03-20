import { db } from '../../plugins/firebase'

export default {
  state: {
    events: []
  },
  getters: {
    getEvents(state) {
      return state.events
    },
  },
  mutations: {
    setEvents(state, payload) {
      state.events = payload
    }
  },
  actions: {
    dispatchEvents({commit, state}) {
      const getEvents = () => {
        db.collection('events')
        .get()
        .then(docs => {
          docs.docs.forEach(doc => {
            state.events.push(doc.data())
            
          })
        })
      }
      db.collection('events')
        .onSnapshot(snap => {
          snap.docChanges().forEach(change => {
            if(change.type === 'added') {
              state.events.push(change.doc.data())
            } else if (change.type === 'removed') {
              state.events = []
              getEvents()
            } else if (change.type === 'modified') {
              state.events = []
              getEvents()
            }
          })
        })

    }
  }
}