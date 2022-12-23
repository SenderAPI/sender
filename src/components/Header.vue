<template>
  <header>
    <nav class="m-5 z-50 header">
      <div class="flex justify-center w-full">
        <div class="flex items-center">
          <span
            class="self-center text-3xl font-semibold whitespace-nowrap text-white cursor-pointer"
            >SenderAPI</span
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import store from "../store/store.js";
import router from "../router.js";

export default {
  name: "Header",
};
</script>

<style>
.header {
  position: relative;
  z-index: 1000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
