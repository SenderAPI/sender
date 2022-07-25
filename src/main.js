import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "./store/store.js";
const app = createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .use(store)
  .mount("#app");

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
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

axios.interceptors.request.use(request => {
    // add auth header with jwt if account is logged in and request is to the api url
  const access_token = getCookie("access_token")
    if (access_token) {
        request.headers.common.Authorization = `Bearer ${access_token}`;
    }
    return request;
});

