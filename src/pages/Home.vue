<template>
  <div class="mt-10 mx-5">
    <div class="flex justify-between w-full flex-col xl:flex-row xl:gap-0">
      <div class="w-full grid xl:grid-cols-2 grid-cols-1 gap-x-2 gap-y-5">
        <div class="flex flex-col gap-5 h-auto" style="height: fit-content">
          <div style="height: fit-content">
            <Chart class="animation-card" :text="'Total'" v-if="reportMonths" />
          </div>

          <div style="height: fit-content">
            <BarChart
              class="animation-card"
              :color="'#e63946'"
              :id="'expense'"
              :text="'Egresos'"
              :data="reportExpenses"
              v-if="reportExpenses"
            />
          </div>
        </div>

        <div class="flex flex-col" style="height: fit-content">
          <div>
            <BarChart
              v-if="reportEntries"
              class="animation-card"
              :color="'#06d6a0'"
              :id="'entries'"
              :text="'Ingresos'"
              :data="reportEntries"
            />
          </div>
          <div
            class="grid xl:grid-cols-2 grid-cols-1 gap-x-5 gap-y-0 justify-center items-center mt-5"
          >
            <Categories />
            <CircleChart :id="1" />
          </div>
        </div>
      </div>

      <div style="min-width: 19%">
        <h2 class="font-bold text-xl text-center text-white">Historial transacciones</h2>
        <Transactions :transactions="transactions" />
        <h2 class="font-bold text-xl text-center mt-5 text-white">Pagos programados</h2>
        <Transactions />
      </div>
    </div>
  </div>
</template>
<script setup>
import CircleChart from "../components/CircleChart.vue";
import BarChart from "../components/BarChart.vue";
import Categories from "../components/Categories.vue";
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
    reportMonths() {
      return store.getters.reportMonths();
    },
    reportEntries() {
      return store.getters.reportEntries();
    },
    reportExpenses() {
      return store.getters.reportExpenses();
    },
    transactions() {
      return store.getters.transactions();
    },
  },
  mounted() {
    store.dispatch("getCategories");
    store.dispatch("getWallet");
    store.dispatch("getMoves");
    store.dispatch("getAllTransactions");
    store.dispatch("getReportMonths");
  },
};
</script>

<style>
.animation-card {
  transition: 0.5s all;
  background-color: #1a2e4b;
  border-radius: 1rem;
}
.animation-card:hover {
  transform: scale(1.05);
  transition: 0.5s all;
  box-shadow: 0px 0px 14px -5px #111e30;
}
</style>
