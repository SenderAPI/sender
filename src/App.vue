<template>
  <div>
    <nav>
      <router-link to="/" v-if="isLogged">Home</router-link>&nbsp;
      <router-link to="/login" v-if="!isLogged">Login</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import store from "./store/store.js"
export default {
  name: "App",
  data(){
    return {
      isLogged: false,
    }
  },
  computed: {
    isLogged:{
      get: function(){

        return store.getters.isLogged()
      }
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
