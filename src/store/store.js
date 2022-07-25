import { createStore } from 'vuex'

function getCookie(name) {
    function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
} 
export default createStore({
  state: {
    isLogged: false
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    isLogged: (state) => () => {
      let token = getCookie("logged_in")
      if(token){
        state.isLogged = true
      }else{
        state.isLogged = false
      }
      return state.isLogged
    }
},
})