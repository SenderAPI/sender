<template>
  <div>
    <ComponentHeader style="position: absolute; top: 0; left: 0; right: 0" />
    <div style="height: 100vh; padding-top: 3rem" class="container-scroll">
      <div>
        <router-view />
      </div>
      <p class="text-white p-10">@Backsoul copyright 2022</p>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  methods: {},
  computed: {},
  components: [Sidebar],
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
