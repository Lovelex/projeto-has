export default {
	state: {
		tabs: [
      {
        name: 'home',
        icon: 'mdi-home',
        to: '/'
      },
      {
        name: 'músicas',
        icon: 'mdi-music',
        to: '/musicas'
      },
      {
        name: 'vídeos',
        icon: 'mdi-video',
        to: '/videos'
      },
      {
        name: 'fotos',
        icon: 'mdi-camera',
        to: '/fotos'
      },
      {
        name: 'eventos',
        icon: 'mdi-calendar-check',
        to: '/eventos'
      },
      {
        name: 'projetos',
        icon: 'mdi-chart-areaspline',
        to: '/projetos'
      },
      {
        name: 'contato',
        icon: 'mdi-email',
        to: '/contato'
      },

    ],
	},
	getters: {
		getTabs(state) {
      return state.tabs
    },
	}
}