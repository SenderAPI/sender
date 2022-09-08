<template>
  <div class="m-10">
    <div class="flex justify-between w-full flex-col xl:flex-row gap-32 xl:gap-12 px-10">
      <div class="w-full grid xl:grid-cols-2 grid-cols-1 gap-5 gap-y-20">
        <div style="height: fit-content">
          <h2 class="font-bold text-xl text-left">Dinero total</h2>
          <Chart class="animation-card mt-5" />
        </div>
        <div style="height: fit-content">
          <h2 class="font-bold text-xl text-left">Total egresos</h2>
          <BarEntries class="animation-card mt-5" />
        </div>
        <div style="height: fit-content">
          <h2 class="font-bold text-xl text-left">Total ingresos</h2>
          <BarExpense class="animation-card mt-5" />
        </div>

        <div style="height: fit-content">
          <h2 class="font-bold text-xl text-left">Categorias</h2>
          <CategoriesReport class="animation-card mt-5 flex justify-center" />
        </div>
      </div>

      <div>
        <h2 class="font-bold text-xl text-left">Transacciones</h2>
        <Transactions />

        <div class="mt-5">
          <h2 class="font-bold text-xl text-left">Pagos programados</h2>
          <div class="w-full bg-white mt-5 p-5 rounded-xl">
            <div class="bg-white rounded-md flex justify-between items-center">
              <icon-bell
                style="font-size: 1.5em"
                class="text-gray-800"
                id="dropdown-notification"
              />
              <p>Descripcion para la transaccion</p>
              <h1 class="text-danger text-lg font-bold">100000</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="button-fab" @click="this.$router.push('create-post')">+</div>
  </div>
</template>
<script setup>
import IconBell from "~icons/mdi/bell";
import CategoriesReport from "../components/CategoriesReport.vue";
</script>

<script>
import store from "../store/store.js";
import Chart from "../components/Chart.vue";
import Transactions from "../components/Transactions.vue";
import BarEntries from "../components/BarEntries.vue";
import BarExpense from "../components/BarExpense.vue";
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
  components: { Chart, Transactions, BarEntries, BarExpense },
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
}
</style>
