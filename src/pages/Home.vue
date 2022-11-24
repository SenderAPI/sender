<template>
  <div class="flex justify-center items-center h-full bgHome bg-secondary w-screen gap-10 font-sans tracking-wide">
      <div class="glass-container w-1/5 h-5/6 p-5">
        <div class="flex mt-5 items-center gap-5" v-if="isLogged && user?.Picture">
          <img
                class="p-1 w-10 h-10 rounded-full ring-2 ring-gray-500"
                :src="user.Picture"
                
                referrerpolicy="no-referrer"
                id="dropdown-profile"
              />
          <span class="text-white font-semibold text-xl">Daniel Sarmiento</span>
        </div>

        <div class="flex flex-col items-start text-white gap-10 font-semibold px-5 py-10 text-xl">
          <a class="cursor-pointer hover:text-darkness">Home</a>
          <a class="cursor-pointer hover:text-darkness">Send sms</a>
          <a class="cursor-pointer hover:text-darkness">History credits</a>
          <a class="cursor-pointer hover:text-darkness">History sms</a>
          <a class="cursor-pointer hover:text-darkness">Purchase credits</a>
          <a class="cursor-pointer hover:text-darkness">Documentation API</a>
        </div>
      </div>
      <div class="w-4/6 h-5/6">
      <div class="flex flex-col h-full w-full gap-10">
        <div class="flex gap-20">
          <div class="flex justify-center flex-col w-3/6  glass-container gap-2 p-10 container-card">
            <span class="text-white text-4xl font-bold">Amount</span>
            <div class="flex justify-center items-center gap-2">
              <span class="text-white text-3xl font-bold">$</span>
            <h1 class="text-white text-7xl font-bold">12,2</h1>
            </div>
            <a href="" class="text-darkness font-semibold">View history credits</a>
          </div>
          <div class="flex flex-col w-3/6  glass-container gap-2 p-10 container-card">
            <div>
              <CircleChart
                class="animation-card"  
                :id="'entries'"
              />
            </div>
            <a href="" class="text-white font-semibold">Remaining messages</a>
          </div>
        </div>
        <div class="flex flex-col w-full  glass-container gap-2 p-10 container-card">
          <h1>Hola</h1>
        </div>
      </div>
      </div>
  </div>
</template>
<script setup>
import CircleChart from "../components/CircleChart.vue";
</script>
<script>
import store from "../store/store.js";
export default {
  name: "Home",
  data() { return { user:{} }},
  components:[CircleChart],
  methods: {
    logout() {
      document.cookie =
        "access_token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      this.dropProfileOpen = false;
      this.$store.commit("setIsLogged", false);
      this.$store.commit("setUser", null);
      this.$store.commit("setWallet", null);
      router.push({ name: "Login" });
    },
  },
  computed: {
    isLogged() {
      return store.getters.isLogged();
    },
    user() {
      return store.getters.user();
    },
  },
  mounted() {},
};
</script>
<style>
#dropdown-profile{
  width: 5rem;
  height: 5rem;
}
.bgHome{
  background: url('./../assets/bgHome.png') no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.glass-container{
  /* From https://css.glass */
background: rgba(255, 255, 255, 0.19);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(179, 179, 179, 0.1);
backdrop-filter: blur(7.6px);
-webkit-backdrop-filter: blur(7.6px);
border: 1px solid rgba(255, 255, 255, 0.05);
}
.container-card{
  transition: 1s all;
}
.container-card:hover{
  box-shadow: 0 4px 60px rgba(223, 223, 223, 0.1);
  transform: scale(1.02);
  transition: .2s all;
}
</style>