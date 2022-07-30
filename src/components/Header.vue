<template>
  <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto w-full">
        <div class="flex items-center" @click="this.$router.push('/')">
          <img
            src="https://avatars.githubusercontent.com/u/65988584?s=400&u=0c04476b6821b4dda1d1a677758f4ff32a241f9a&v=4"
            class="mr-3 h-6 sm:h-9 rounded-full"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
            >Social</span
          >
        </div>
        <div class="relative inline-block text-left">
          <div>
            <img
              class="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              :src="user?.Picture"
              v-if="user?.Picture"
              referrerpolicy="no-referrer"
              @click="toggleMenu"
              id="dropdown"
            />
          </div>
          <div
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none Z-10"
            role="menu"
            v-if="dropOpen"
            id="dropdown"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
            style="position: absolute; z-index: 999"
          >
            <div class="py-1" role="none">
              <p class="px-2 font-bold">{{ user?.Name }}</p>
              <button
                type="submit"
                class="text-gray-700 block w-full text-left px-4 py-2 text-sm mb-2"
                style="
                  background: rgb(247, 247, 247);
                  color: rgb(131, 131, 131);
                  font-weight: 500;
                  margin: 1px 5px;
                  width: 95%;
                  border-radius: 0.5rem;
                "
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
                @click="this.$router.push('me')"
              >
                My Profile
              </button>

              <button
                type="submit"
                class="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                style="
                  background: rgb(247, 247, 247);
                  color: rgb(131, 131, 131);
                  font-weight: 500;
                  margin: 1px 5px;
                  width: 95%;
                  border-radius: 0.5rem;
                "
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
                @click="logout"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import store from "../store/store.js";
import router from "../router.js";

export default {
  name: "Header",
  data() {
    return {
      dropOpen: false,
    };
  },
  methods: {
    logout() {
      document.cookie =
        "access_token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      this.dropOpen = false;
      this.$store.commit("setIsLogged", false);
      this.$store.commit("setUser", null);
      router.push({ name: "Login" });
    },
    closeIfClickedOutside(event) {
      if (document.getElementById("dropdown") != null) {
        if (!document.getElementById("dropdown").contains(event.target)) {
          this.dropOpen = false;
          document.removeEventListener("click", this.closeIfClickedOutside);
        }
      }
    },
    toggleMenu() {
      this.dropOpen = !this.dropOpen;
      document.addEventListener("click", this.closeIfClickedOutside);
    },
  },
  computed: {
    isLogged() {
      return store.getters.isLogged();
    },
    user() {
      return store.getters.user();
    },
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
