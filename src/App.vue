<template>
  <div class="bg-secondary">
    <ComponentHeader style="position: absolute; top: 0; left: 0; right: 0" />
    <div style="height: 100vh; padding-top: 3rem" class="container-scroll">
      <router-view />
      <p class="text-white p-10">@Backsoul copyright 2022</p>
    </div>
    <ModalTransaction v-show="showModal" @close-modal="showModal = false" />
    <div class="button-fab cursor-pointer" @click="showModal = true">+</div>
  </div>
</template>

<script>
import ModalTransaction from "./components/ModalTransaction.vue";
export default {
  name: "App",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {},
  computed: {},
  mounted() {},
  components: { ModalTransaction },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.container-scroll {
  background: #1d3557;
}
html {
  background: #1d3557;
}
html::-webkit-scrollbar {
  width: 10px;
}

html::-webkit-scrollbar-track {
  background-color: #1d3557;
  margin: 1rem;
}

html::-webkit-scrollbar-thumb {
  border-radius: 100px;
  border: 6px solid rgba(0, 0, 0, 0.18);
  border-left: 0;
  border-right: 0;
  background-color: #233d62;
}

.button-fab {
  width: 4rem;
  height: 4rem;
  background: #1d3557;
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
  border: 1px solid white;
}
.button-fab:hover {
  box-shadow: 0px 6px 17px -10px white;
}
</style>
