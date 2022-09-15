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
    categories: null,
    moves: null,
    transactions: null,
    reportMonths: null,
    reportEntries: null,
    reportExpenses: null,
    reportCategories: null,
    transactionsFixed: null,
    total: 0
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
    },
    setMoves(state, moves) {
      state.moves = moves
    },
    setTransactions(state, transactions) {
      state.transactions = transactions
    },
    setReportMonths(state, reportMonths) {
      state.reportMonths = reportMonths
    },
    setReportEntries(state, reportEntries) {
      state.reportEntries = reportEntries
    },
    setReportExpenses(state, reportExpenses) {
      state.reportExpenses = reportExpenses
    },
    setReportCategories(state, reportCategories) {
      state.reportCategories = reportCategories
    },
    setTransactionsFixed(state, transactionsFixed) {
      state.transactionsFixed = transactionsFixed
    },
    setTotal(state, total) {
      state.total = total
    }

  },

  getters: {
    isLogged: (state) => () => state.isLogged,
    user: (state) => () => state.user,
    wallet: (state) => () => state.wallet,
    modalTransaction: (state) => () => state.modalTransaction,
    modalAdd: (state) => () => state.modalAdd,
    modalCategory: (state) => () => state.modalCategory,
    categories: (state) => () => state.categories,
    moves: (state) => () => state.moves,
    transactions: (state) => () => state.transactions,
    reportMonths: (state) => () => state.reportMonths,
    reportEntries: (state) => () => state.reportEntries,
    reportExpenses: (state) => () => state.reportExpenses,
    reportCategories: (state) => () => state.reportCategories,
    transactionsFixed: (state) => () => state.transactionsFixed,
    total: (state) => () => state.total
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
    async getTotal({
      commit
    }) {
      try {
        let {
          data
        } = await axios.get('/finance/wallet/total')
        data = JSON.parse(data.result)
        commit("setTotal", data);
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
    async getMoves({
      commit,
      dispatch
    }) {
      try {
        let {
          data
        } = await axios.get('/finance/move')
        data = JSON.parse(data.result)
        commit("setMoves", data);
        dispatch("getReportEntries");
        dispatch("getReportExpenses");
      } catch (error) {
        console.log(error.response.status)
      }
    },
    async getReportMonths({
      commit
    }) {
      try {
        commit("setReportMonths", null);
        let {
          data
        } = await axios.get('/finance/transaction/reportMonths')
        data = JSON.parse(data.result)
        commit("setReportMonths", data);
      } catch (error) {
        console.log(error.response.status)
      }
    },
    async getReportEntries({
      commit,
      getters
    }) {
      try {
        commit("setReportEntries", null);
        let {
          data
        } = await axios.post('/finance/transaction/reportTypeMove', {
          "moveId": [...getters.moves()].filter(move => move.name == "Ingreso")[0].id
        })
        data = JSON.parse(data.result)
        commit("setReportEntries", data);
      } catch (error) {
        console.log(error.response.status)
      }
    },
    async getReportExpenses({
      commit,
      getters
    }) {
      try {
        commit("setReportExpenses", null);
        let {
          data
        } = await axios.post('/finance/transaction/reportTypeMove', {
          "moveId": [...getters.moves()].filter(move => move.name == "Egreso")[0].id
        })
        data = JSON.parse(data.result)
        let expenses = data.map(expense => {
          return {
            "month": expense.month,
            "total": Math.abs(expense.total)
          }
        })
        commit("setReportExpenses", expenses);
      } catch (error) {
        console.log(error.response.status)
      }
    },
    async getReportCategories({
      commit,
      getters
    }) {
      try {
        commit("setReportCategories", null);
        let {
          data
        } = await axios.get('/finance/category/report')
        data = JSON.parse(data.result)
        commit("setReportCategories", data);
      } catch (error) {
        console.log(error.response.status)
      }
    },
    async getAllTransactions({
      commit
    }) {
      try {
        let {
          data
        } = await axios.get('/finance/transaction')
        data = JSON.parse(data.result)
        commit("setTransactions", data);
      } catch (error) {
        console.log(error.response.status)
      }
    },
    async getAllTransactionsFixed({
      commit
    }) {
      try {
        let {
          data
        } = await axios.get('/finance/transaction/fixed')
        data = JSON.parse(data.result)
        commit("setTransactionsFixed", data);
      } catch (error) {
        console.log(error.response.status)
      }
    },
    async createTransaction({
      commit,
      dispatch
    }, payload) {
      try {
        let {
          data
        } = await axios.post('/finance/transaction', {
          "amount": payload.amount,
          "description": payload.description,
          "categoryId": payload.categoryId,
          "moveId": payload.moveId,
          "date": payload.date,
          "isRecurrent": payload.isRecurrent,
        })
        data = JSON.parse(data.result)
        commit("setModalTransaction", false);
        commit("setTransactions", [...this.state.transactions, data]);

        dispatch("getReportMonths");
        dispatch("getReportExpenses");
        dispatch("getReportEntries");
        dispatch("getReportCategories");
        dispatch("getAllTransactionsFixed");
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
          "color": payload.color
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