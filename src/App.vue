<template>
  <div class="bg-secondary">
    <ComponentHeader style="position: absolute; top: 0; left: 0; right: 0" />
    <div style="height: 100vh; padding-top: 3rem" class="container-scroll">
      <router-view />
      <p class="text-white p-10">@Backsoul copyright 2022</p>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {},
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
</style>
