<template>
  <div class="bg-white rounded-md flex justify-between items-center animation-card m-5">
    <icon-bell
      style="font-size: 1.5em"
      class="text-gray-800"
      id="dropdown-notification"
    />
    <p>Descripcion para la transaccion</p>
    <h1 class="text-danger text-lg font-bold">100000</h1>
  </div>
</template>
<script setup>
import IconBell from "~icons/mdi/bell";
</script>

<style>
.animation-card {
  transition: 0.5s all;
}
.animation-card:hover {
  transform: scale(1.05);
  transition: 0.5s all;
}
</style>
