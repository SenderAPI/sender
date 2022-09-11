<template>
  <div
    class="bg-light rounded-xl p-5 flex justify-center whitespace-pre-wrap items-center hover:bg-white text-white hover:text-primary cursor-pointer"
  >
    <h2
      class="font-bold text-xs md:text-base text-center"
      style="font-weight: 600; text-align: center; width: 100%; overflow-wrap: break-word"
    >
      {{ this.text }}
    </h2>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
  },
};
</script>
