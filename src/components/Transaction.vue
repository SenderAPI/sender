<template>
  <div
    class="bg-white rounded-md flex justify-between items-center animation-card h-full w-full p-5"
  >
    <icon-bell
      style="font-size: 2.5rem"
      class="text-gray-300"
      id="dropdown-notification"
    />
    <p style="font-size: 0.9rem; font-weight: 200" class="px-10">
      Descripcion para la transaccion
    </p>
    <h1 class="text-danger text-xs font-bold">$100000</h1>
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
