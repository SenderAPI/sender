import { createStore } from 'vuex'


export default createStore({
  state: {
    isLogged: false
  },
  mutations: {
    setIsLogged (state,py) {
      state.isLogged = py;
    }
  },
  actions: {},
  getters: {
    isLogged: (state) => () => state.isLogged
},
})