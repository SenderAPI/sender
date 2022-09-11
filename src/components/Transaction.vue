<template>
  <div
    class="bg-dark rounded-md flex justify-between items-center animation-card h-full w-full p-5"
  >
    <icon-bell style="font-size: 2.5rem" class="text-white" id="dropdown-notification" />
    <p style="font-size: 0.7rem; font-weight: 200" class="px-10 text-white">
      {{ description }}
    </p>
    <h1 class="text-danger text-xs font-bold">${{ amount }}</h1>
  </div>
</template>
<script setup>
import IconBell from "~icons/mdi/bell";
</script>

<script>
export default {
  props: {
    description: String,
    amount: String,
  },
};
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
