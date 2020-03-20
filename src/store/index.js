import Vue from 'vue'
import Vuex from 'vuex'


// Modules
import tabs from './modules/tabs'
import events from './modules/events'
import viewPort from './modules/viewPort'
import contacts from './modules/contacts'
import socials from './modules/socials'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { 
    events, 
    viewPort, 
    tabs, 
    contacts,
    socials
  },
 
})
