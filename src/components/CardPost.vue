<template>
  <div class="flex items-center justify-center px-5 py-5">
    <div
      class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50"
    >
      <div class="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
        <a href="#" class="block relative">
          <img
            alt="profil"
            src="https://avatars.githubusercontent.com/u/65988584?s=400&u=0c04476b6821b4dda1d1a677758f4ff32a241f9a&v=4"
            class="mx-auto object-cover rounded-full h-20 w-20"
          />
        </a>
      </div>
      <div class="w-full mb-10">
        <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
        <p class="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
          {{ text }}
        </p>
        <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
      </div>
      <div class="w-full">
        <p class="text-md text-indigo-500 font-bold text-center">Tom Hardy</p>
        <p class="text-xs text-gray-500 dark:text-gray-300 text-center">@thom.hardy</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: "",
  },
};
</script>
