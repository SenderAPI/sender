<template>
  <div class="bg-secondary">
    <ComponentHeader style="position: absolute; top: 0; left: 0; right: 0" />
    <div style="height: 100vh; padding-top: 3rem">
      <router-view />
    </div>
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
html {
  background: #edf2f4;
}
</style>
