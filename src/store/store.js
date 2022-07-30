import {
  createStore
} from 'vuex'
import axios from 'axios'



export default createStore({
  state: {
    isLogged: false,
    user: null,
    posts: []
  },
  mutations: {
    setIsLogged(state, py) {
      state.isLogged = py;
    },
    setUser(state, user) {
      state.user = user;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
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
    },
    async createPost(store, payload) {
      try {
        let data = await axios.post('/posts/create', {
          payload: {
            content: payload
          }
        })
        if (data.status === 200) {
          window.location = "/";
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getPosts({
      commit
    }) {
      try {
        let {
          data
        } = await axios.post('/posts/obtain-posts', {
          payload: {}
        })
        data = JSON.parse(data.result)
        commit("setPosts", data);
      } catch (error) {
        console.log(error.response.status)
      }
    },
  },
  getters: {
    isLogged: (state) => () => state.isLogged,
    user: (state) => () => state.user,
    posts: (state) => () => state.posts,
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

// setting axios 
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