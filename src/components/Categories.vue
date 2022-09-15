<template>
  <div
    class="bg-dark grid grid-cols-2 gap-x-2 gap-y-2 p-5 rounded-xl categories-container mt-5"
    style="width: 100%; overflow-y: auto; height: 60%"
    v-if="categories"
  >
    <Category :text="category.name" v-for="category in categories" :key="category.name" />
  </div>
</template>
<script>
import store from "../store/store";
import Category from "./Category.vue";
export default {
  data() {
    return {
      categories: null,
    };
  },
  computed: {
    categories() {
      return store.getters.categories();
    },
  },
  components: { Category },
};
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
