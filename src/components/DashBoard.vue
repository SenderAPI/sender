<template>
  <div class="flex flex-col gap-10">
    <div class="flex gap-10">
      <div
        class="flex justify-center flex-col w-3/6 glass-container gap-2 p-10 container-card"
      >
        <span class="text-white text-4xl font-bold">Amount</span>
        <div class="flex justify-center items-center gap-2">
          <span class="text-white text-3xl font-bold">$</span>
          <h1 class="text-white text-7xl font-bold">{{ wallet?.Amount }}</h1>
        </div>
        <router-link to="/history-credits" class="text-darkness font-semibold"
          >View history credits</router-link
        >
      </div>
      <div class="flex flex-col w-3/6 bg-white gap-2 p-10 container-card rounded-xl">
        <a href="" class="text-darkness text-2xl font-extrabold">SenderApi v0.1</a>

        <p class="text-lg font-bold">10 Juny 2020 Added new tables</p>
        <p class="text-lg font-bold">SenderApi In Colombia it’s working!</p>
        <p class="text-lg font-bold">Currently system on since november</p>
        <p class="text-lg font-bold">Happy meetings!</p>
        <p class="text-lg font-bold">New Year 2023!</p>
      </div>
    </div>
    <div class="flex gap-20">
      <div
        class="flex glass-container rounded-xl justify-center items-center p-2 h-full w-full"
      >
        <BarChart />
      </div>
    </div>
  </div>
</template>
<script setup>
import BarChart from "../components/BarChart.vue";
</script>
<script>
import store from "../store/store.js";

export default {
  name: "Dashboard",
  data() {
    return {
      months: [
        {
          total: 123,
        },
        {
          total: 123,
        },
        {
          total: 123,
        },
        {
          total: 123,
        },
        {
          total: 123,
        },
        {
          total: 123,
        },
        {
          total: 123,
        },
        {
          total: 123,
        },
      ],
    };
  },
  computed: {
    wallet() {
      return store.getters.wallet();
    },
  },
  mounted() {
    store.dispatch("getWallet");
  },
  components: [BarChart],
};
</script>
