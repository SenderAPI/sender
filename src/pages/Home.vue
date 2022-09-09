<template>
  <div class="mt-10 mx-10">
    <div class="flex justify-between w-full flex-col xl:flex-row xl:gap-12">
      <div class="w-full grid xl:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5">
        <div class="flex flex-col gap-5 h-auto" style="height: fit-content">
          <div style="height: fit-content">
            <Chart class="animation-card" :text="'Total'" />
          </div>

          <div style="height: fit-content">
            <BarChart
              class="animation-card"
              :color="'#e63946'"
              :id="'expense'"
              :text="'Egresos'"
            />
          </div>

          <div style="height: fit-content">
            <PolarChart class="animation-card" />
          </div>
        </div>

        <div class="flex flex-col" style="height: fit-content">
          <div>
            <BarChart
              class="animation-card"
              :color="'#06d6a0'"
              :id="'entries'"
              :text="'Ingresos'"
            />
          </div>
          <div class="mb-10">
            <div class="grid grid-cols-2 gap-x-5 gap-y-0">
              <CircleChart :id="1" />
              <CircleChart :id="2" />
              <CircleChart :id="3" />
              <CircleChart :id="4" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="font-bold text-xl text-left my-5">Transacciones</h2>
        <Transactions />
        <h2 class="font-bold text-xl text-left my-5">Pagos programados</h2>
        <Transactions />
      </div>
    </div>

    <div class="button-fab" @click="this.$router.push('create-post')">+</div>
  </div>
</template>
<script setup>
import IconBell from "~icons/mdi/bell";
import CircleChart from "../components/CircleChart.vue";
import PolarChart from "../components/PolarChart.vue";
import BarChart from "../components/BarChart.vue";
</script>

<script>
import store from "../store/store.js";
import Chart from "../components/Chart.vue";

import Transactions from "../components/Transactions.vue";
export default {
  data() {
    return {};
  },
  computed: {
    posts() {
      return store.getters.posts();
    },
  },
  methods: {
    getPosts() {
      this.$store.dispatch("getPosts");
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style>
.button-fab {
  width: 4rem;
  height: 4rem;
  background: black;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  font-weight: 800;
  font-size: 2rem;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 3rem 1rem;
  box-shadow: 0px 6px 17px -1px grey;
}
.animation-card {
  transition: 0.5s all;
}
.animation-card:hover {
  transform: scale(1.05);
  transition: 0.5s all;
  box-shadow: -2px 6px 29px -12px #a6a6a6;
}
</style>
