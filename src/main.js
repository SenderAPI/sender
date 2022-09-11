import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "./store/store.js";
import GlobalComponents from './globals'
import './index.css';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
const app = createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .use(store)
  .use(GlobalComponents)
  .component('Datepicker', Datepicker)
  .mount("#app");