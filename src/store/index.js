import { createStore } from 'vuex'
import cart from './modules/cart'
import state from './modules/state'

export default createStore({
  state: {
    preloader: false
  },
  getters: {
    getPreloader(state) {
      return state.preloader;
    }
  },
  mutations: {
    setPreloaderTrue(state) {
      state.preloader = true;
    },
    setPreloaderFalse(state) {
      state.preloader = false;
    },
  },
  actions: {},
  modules: { cart, state }
})
