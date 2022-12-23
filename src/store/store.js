import {
  createStore
} from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    isLogged: false,
    user: {},
    wallet: null,
    credits: []
  },
  mutations: {
    setIsLogged(state, py) {
      state.isLogged = py;
    },
    setUser(state, user) {
      state.user = user;
    },
    setWallet(state, wallet) {
      state.wallet = wallet;
    },
    setCredits(state, credits) {
      state.credits = credits;
    }
  },

  getters: {
    isLogged: (state) => () => state.isLogged,
    user: (state) => () => state.user,
    wallet: (state) => () => state.wallet,
    credits: (state) => state.credits
  },
  actions: {
    async me({
      commit,
      state
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
    },
    async getWallet({
      commit,
      state
    }) {
      try {
        let {
          data
        } = await axios.get('/gilito/wallet/get', {
          payload: {}
        })
        data = JSON.parse(data.result).data
        commit("setWallet", data);
      } catch (error) {
        console.log(error)
      }
    },
    async getCredits({
      commit,
      state
    }) {
      try {
        let {
          data
        } = await axios.get('/gilito/credits/get', {
          payload: {}
        })
        data = JSON.parse(data.result).data
        commit("setCredits", data);
      } catch (error) {
        console.log(error)
      }
    },
  },
})

axios.interceptors.response.use(
  response => response,
  error => {
    const {
      status
    } = error.response;
    if (status === 401) {
      if (error.response.status === 401) {
        console.log(error.response)
        document.cookie = 'access_token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.location = "/login";
      }
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(request => {
  // add auth header with jwt if account is logged in and request is to the api url
  const access_token = getCookie("access_token")
  if (access_token) {
    request.headers.common.Authorization = `Bearer ${access_token}`;
  }
  return request;
});

axios.defaults.baseURL =
  import.meta.env.VITE_BASE_URL


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