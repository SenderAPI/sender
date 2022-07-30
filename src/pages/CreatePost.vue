<template>
  <div class="flex justify-center flex-col items-center">
    <h1 class="font-bold">Inspire for new Post!!</h1>
    <label
      for="message"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >Content post</label
    >
    <textarea
      id="message"
      rows="4"
      v-model="content"
      class="block p-2.5 xl:w-2/5 md:w-3/5 sm:w-4/5 w-11/12 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Your message..."
    ></textarea>
    <button
      @click="savePost()"
      class="xl:w-2/5 md:w-3/5 sm:w-4/5 w-11/12 m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Save
    </button>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    savePost() {
      this.$store.dispatch("createPost", this.content);
    },
  },
};
</script>
