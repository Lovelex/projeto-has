import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { auth } from './plugins/firebase';


import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/brands.min.css'

Vue.config.productionTip = false

let app = false

auth.onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
    
  }
})