<template>
  <div>
    <ComponentCardPost
      v-for="post in posts"
      :name="post.userName"
      :picture="post.userUrlPhoto"
      :text="post.content"
      v-if="posts?.length"
    />

    <div class="button-fab" @click="this.$router.push('create-post')">+</div>
  </div>
</template>

<script>
import store from "../store/store.js";
export default {
  data() {
    return {};
  },
  computed: {
    posts() {
      return store.getters.posts();
    },
  },
  methods: {
    getPosts() {
      this.$store.dispatch("getPosts");
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style>
.button-fab {
  width: 4rem;
  height: 4rem;
  background: black;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  font-weight: 800;
  font-size: 2rem;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 3rem 1rem;
  box-shadow: 0px 6px 17px -1px grey;
}
</style>
