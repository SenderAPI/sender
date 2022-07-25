<template>
  <div>
    <nav>
      <router-link to="/" v-if="isLogged">Home</router-link>&nbsp;
      <router-link to="/login" v-if="!isLogged">Login</router-link>
      <button @click="logout()" v-if="isLogged">logout</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
import store from "./store/store.js"
import router from "./router.js"
export default {
  name: "App",
  data(){
    return {}
  },
  methods: {
    logout(){
      document.cookie = 'access_token' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      this.$store.commit('setIsLogged', false)
      router.push({name: "Login"});
    }
  },
  computed: {
    isLogged(){
      return store.getters.isLogged()
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
