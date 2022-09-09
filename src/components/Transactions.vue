<template>
  <div style="overflow-y: auto; height: 20rem" class="transactions-container">
    <div class="rounded-xl gap-1 flex flex-col justify-center gap-y-5">
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
    </div>
  </div>
</template>

<script>
import Transaction from "./Transaction.vue";
export default { components: { Transaction } };
</script>

<style>
.transactions-container {
  background: transparent;
  padding-right: 0.9rem;
  padding-left: 0.9rem;
  padding-top: 0.5rem;
}
.transactions-container::-webkit-scrollbar {
  width: 3px;
  margin: 1rem;
}

.transactions-container::-webkit-scrollbar-track {
  background-color: #233d62;
  margin: 1rem;
  border-radius: 100px;
}

.transactions-container::-webkit-scrollbar-thumb {
  margin: 1rem;
  border-radius: 50%;
  border: 6px solid rgba(0, 0, 0, 0.18);
  border-left: 0;
  border-right: 0;
  background-color: white;
}
</style>
