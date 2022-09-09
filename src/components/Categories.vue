<template>
  <div
    class="bg-dark grid grid-cols-3 gap-x-2 gap-y-2 p-5 rounded-xl categories-container"
    style="overflow-y: auto; height: 15rem"
  >
    <Category :text="'Salario'" />
    <Category :text="'Telecomunicación'" />
    <Category :text="'Creditos'" />
    <Category :text="'Comida'" />
    <Category :text="'Otros'" />
    <Category :text="'Otros'" />
    <Category :text="'Otros'" />
    <Category :text="'Otros'" />
    <Category :text="'Otros'" />
    <Category :text="'Otros'" />
  </div>
</template>
<script>
import Category from "./Category.vue";
export default { components: { Category } };
</script>

<style>
.categories-container::-webkit-scrollbar {
  width: 3px;
  margin: 1rem;
}

.categories-container::-webkit-scrollbar-track {
  background-color: #233d62;
  margin: 1rem;
  border-radius: 100px;
}

.categories-container::-webkit-scrollbar-thumb {
  margin: 1rem;
  border-radius: 50%;
  border: 6px solid rgba(0, 0, 0, 0.18);
  border-left: 0;
  border-right: 0;
  background-color: white;
}
</style>
