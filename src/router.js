import {
  createRouter,
  createWebHistory
} from "vue-router";
import Default from "./layouts/Default.vue";
import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";
import PurchaseCredits from "./pages/PurchaseCredits.vue";
import HistoryCredits from "./pages/HistoryCredits.vue";
import HistorySms from "./pages/HistorySms.vue";
import SendSms from "./pages/SendSms.vue";
import store from './store/store'

const routes = [{
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from) => {
      const isAuthenticated = store.getters.isLogged();
      if (isAuthenticated) return '/'
    }
  },
  {
    path: "/",
    component: Default,
    children: [{
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "send-sms",
        name: "sendSms",
        component: SendSms
      },
      {
        path: "purchase-credits",
        name: "PurchaseCredits",
        component: PurchaseCredits
      },
      {
        path: "history-credits",
        name: "historyCredits",
        component: HistoryCredits
      },
      {
        path: "history-sms",
        name: "historySms",
        component: HistorySms
      },

    ]
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

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
router.beforeEach((to, from) => {
  const accessToken = getCookie('access_token');
  if (accessToken) {
    store.dispatch("me");
    store.commit('setIsLogged', true);
  }
  const isAuthenticated = store.getters.isLogged();
  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return {
      name: 'Login'
    }
  }
})

export default router;