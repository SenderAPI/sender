import {
  createStore
} from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    isLogged: false,
    user: null,
    wallet: null,
    modalTransaction: false,
    modalAdd: false,
    modalCategory: false,
    categories: null
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
    setModalTransaction(state, modalTransaction) {
      state.modalTransaction = modalTransaction
    },
    setModalAdd(state, modalAdd) {
      state.modalAdd = modalAdd
    },
    setModalCategory(state, modalCategory) {
      state.modalCategory = modalCategory
    },
    setCategories(state, categories) {
      state.categories = categories
    }

  },

  getters: {
    isLogged: (state) => () => state.isLogged,
    user: (state) => () => state.user,
    wallet: (state) => () => state.wallet,
    modalTransaction: (state) => () => state.modalTransaction,
    modalAdd: (state) => () => state.modalAdd,
    modalCategory: (state) => () => state.modalCategory,
    categories: (state) => () => state.categories
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
      commit
    }) {
      try {
        let {
          data
        } = await axios.get('/finance/wallet')
        data = JSON.parse(data.result)
        commit("setWallet", data);
      } catch (error) {
        console.log(error.response.status)
      }
    },
    async getCategories({
      commit
    }) {
      try {
        let {
          data
        } = await axios.get('/finance/category')
        data = JSON.parse(data.result)
        commit("setCategories", data);
      } catch (error) {
        console.log(error.response.status)
      }
    },
    async createTransaction({
      commit
    }, payload) {
      try {
        let {
          data
        } = await axios.post('/finance/transaction', {
          "amount": payload.amount,
          "description": payload.description
        })
        data = JSON.parse(data.result)
        commit("setModalTransaction", false);
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    async createCategory({
      commit
    }, payload) {
      try {
        let {
          data
        } = await axios.post('/finance/category', {
          "name": payload.name,
        })
        data = JSON.parse(data.result)
        commit("setModalCategory", false);
        commit("setCategories", [...this.state.categories, data]);
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