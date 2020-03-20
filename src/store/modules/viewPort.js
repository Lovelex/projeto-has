export default {
	state: {
		viewPort: {
      value: 0,
      mobileSize: 600,
      isMobile: false
    },
	},
	getters: {
		getViewPort(state) {
      return state.viewPort
    }
	},
}