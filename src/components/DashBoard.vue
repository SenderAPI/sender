<template>
  <div class="flex flex-col w-full gap-10 h-full">
    <div class="flex gap-20">
      <div
        class="flex justify-center flex-col w-3/6 glass-container gap-2 p-10 container-card"
      >
        <span class="text-white text-4xl font-bold">Amount</span>
        <div class="flex justify-center items-center gap-2">
          <span class="text-white text-3xl font-bold">$</span>
          <h1 class="text-white text-7xl font-bold">{{ wallet?.Amount }}</h1>
        </div>
        <a href="" class="text-darkness font-semibold">View history credits</a>
      </div>
      <div class="flex flex-col w-3/6 glass-container gap-2 p-10 container-card">
        <div>
          <CircleChart class="animation-card" :id="'entries'" />
        </div>
        <a href="" class="text-white font-semibold">Remaining messages</a>
      </div>
    </div>
    <div class="flex flex-col w-full glass-container gap-2 p-10 container-card">
      <h1>Hola</h1>
    </div>
  </div>
</template>

<script>
import store from "../store/store.js";
export default {
  name: "Dashboard",
  data() {
    return {};
  },
  computed: {
    wallet() {
      return store.getters.wallet();
    },
  },
  mounted() {
    store.dispatch("getWallet");
  },
};
</script>
