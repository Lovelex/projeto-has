import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        firestacks: '#FF5722'
      },
      dark: {
        firestacks: '#FF5722'
      }
    }
  },
  icons: {
    iconfont: 'mdi', 
  },

});
