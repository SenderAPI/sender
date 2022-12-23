<template>
  <div
    class="flex justify-center items-center h-full bgHome bg-secondary w-screen gap-10 font-sans tracking-wide"
  >
    <div class="glass-container w-1/5 h-5/6 p-5">
      <div class="flex mt-5 items-center gap-5" v-if="isLogged && user?.Picture">
        <img
          class="p-1 w-10 h-10 rounded-full ring-2 ring-gray-500"
          :src="user.Picture"
          referrerpolicy="no-referrer"
          id="dropdown-profile"
        />
        <span class="text-white font-semibold text-xl">{{ user.Name }}</span>
      </div>

      <div
        class="flex flex-col items-start text-white gap-10 font-semibold px-5 py-10 text-xl"
      >
        <router-link class="cursor-pointer hover:text-darkness" to="/">Home</router-link>
        <router-link class="cursor-pointer hover:text-darkness" to="/send-sms"
          >Send sms</router-link
        >
        <router-link class="cursor-pointer hover:text-darkness" to="/history-credits"
          >History credits</router-link
        >
        <a class="cursor-pointer hover:text-darkness">History sms</a>
        <router-link class="cursor-pointer hover:text-darkness" to="/purchase-credits"
          >Purchase credits</router-link
        >
        <a class="cursor-pointer hover:text-darkness">Documentation API</a>
      </div>
    </div>
    <div class="w-4/6 h-5/6">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import DashBoard from "../components/DashBoard.vue";
import CircleChart from "../components/CircleChart.vue";
</script>
<script>
import store from "../store/store.js";
export default {
  name: "Default",
  data() {
    return {};
  },
  components: [CircleChart],
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
.router-link-exact-active {
  color: #007bed;
}
#dropdown-profile {
  width: 5rem;
  height: 5rem;
}
.bgHome {
  background: url("./../assets/bgHome.png") no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.glass-container {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.19);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(179, 179, 179, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.container-card {
  transition: 1s all;
}
.container-card:hover {
  box-shadow: 0 4px 60px rgba(223, 223, 223, 0.1);
  transform: scale(1.02);
  transition: 0.2s all;
}
</style>
