import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "./store/store.js";
import GlobalComponents from './globals'
import './index.css'
const app = createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .use(store)
  .use(GlobalComponents)
  .mount("#app");



