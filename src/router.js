import {
  createRouter,
  createWebHistory
} from "vue-router";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import store from './store/store'

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to,from) => {
      const isAuthenticated =  store.getters.isLogged();  
      if (isAuthenticated) return '/'
    }
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

router.beforeEach((to, from) => {
  const isAuthenticated =  store.getters.isLogged();  
  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
})

export default router;