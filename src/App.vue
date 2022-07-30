<template>
  <div>
    <ComponentHeader style="position: absolute; top: 0; left: 0; right: 0" />
    <div class="bg-slate-200" style="height: 97vh; margin-top: 6rem">
      <router-view />
      <div class="bg-slate-200 flex justify-center">
        <h2>@Backsoul</h2>
      </div>
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
  color: #2c3e50;
}
html {
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity));
}
</style>
