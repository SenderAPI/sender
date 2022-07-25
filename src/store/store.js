import { createStore } from 'vuex'


export default createStore({
  state: {
    isLogged: false,
    user:null
  },
  mutations: {
    setIsLogged (state,py) {
      state.isLogged = py;
    },
    setUser (state,user) {
      state.user = user;
    }
  },
  actions: {},
  getters: {
    isLogged: (state) => () => state.isLogged,
    user: (state)  => () =>  state.user
},
})