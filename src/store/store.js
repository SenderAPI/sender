import {
  createStore
} from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    isLogged: false,
    user: null
  },
  mutations: {
    setIsLogged(state, py) {
      state.isLogged = py;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    async me({
      commit
    }) {
      try {
        let {
          data
        } = await axios.post('/auth/me', {
          payload: {}
        })
        data = JSON.parse(data.result).data
        commit("setUser", data);
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    isLogged: (state) => () => state.isLogged,
    user: (state) => () => state.user
  },
})



// setting axios 
axios.interceptors.request.use(request => {
  // add auth header with jwt if account is logged in and request is to the api url
  const access_token = getCookie("access_token")
  if (access_token) {
    request.headers.common.Authorization = `Bearer ${access_token}`;
  }
  return request;
});

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}