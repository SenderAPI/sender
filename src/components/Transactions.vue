<template>
  <div>
    <div class="rounded-xl gap-1 flex flex-col justify-center gap-y-5">
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
