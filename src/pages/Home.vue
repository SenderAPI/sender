<template>
  <div class="m-10">
    <ComponentCardPost
      text="To get social media testimonials like these, keep your customers engaged with
          your social media accounts by posting regularly yourself"
    />
  </div>
</template>

<script>
import store from "../store/store.js";
export default {
  data() {
    return {
      user: "hola",
    };
  },
  mounted() {
    this.$store.dispatch("me");
  },
};
</script>
