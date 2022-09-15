<template>
  <header>
    <nav class="bg-primary px-4 lg:px-6 py-2.5">
      <div class="flex flex-wrap justify-between items-center mx-auto w-full">
        <div class="flex items-center" @click="router.push({ name: 'Home' })">
          <img
            src="https://avatars.githubusercontent.com/u/65988584?s=400&u=0c04476b6821b4dda1d1a677758f4ff32a241f9a&v=4"
            class="mr-3 h-6 sm:h-9 rounded-full cursor-pointer"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap text-white cursor-pointer"
            >Finance</span
          >
        </div>

        <div class="flex gap-4 items-center" v-if="user?.Picture">
          <!-- <div class="hidden text-white gap-10 md:flex">
            <a @click="router.push({ name: 'Home' })" class="cursor-pointer">Reporte</a>
            <a @click="router.push({ name: 'Profile' })" class="cursor-pointer"
              >Proyeccion</a
            >
          </div> -->
          <div @click="toggleDropdown('dropdown-notification')">
            <icon-bell
              style="font-size: 1.5em"
              class="text-gray-800 hover:opacity-80 notification-container"
              id="dropdown-notification"
            />
            <div
              class="menu-notification-dropdown origin-top-right absolute right-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none Z-10"
              role="menu"
              v-if="dropNotificationOpen"
              id="dropdown-notification"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
              style="position: absolute; z-index: 999"
            >
              <div class="py-1" role="none">
                <div v-for="notification of notifications">
                  <div
                    style="display: flex; justify-content: center; align-items: center"
                  >
                    <img :src="user?.Picture" style="border-radius: 50%; width: 3rem" />
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        margin: 1rem;
                        text-align: center;
                      "
                    >
                      <p class="font-bold">
                        {{ notification.text }}
                      </p>
                      <p style="padding: 0">{{ notification.date }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative inline-block text-left">
            <div>
              <img
                class="p-1 w-10 h-10 rounded-full ring-2 ring-gray-500"
                :src="user?.Picture"
                v-if="user?.Picture"
                referrerpolicy="no-referrer"
                @click="toggleDropdown('dropdown-profile')"
                id="dropdown-profile"
              />
            </div>
            <div
              class="menu-profile-dropdown origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none Z-10"
              role="menu"
              v-if="dropProfileOpen"
              id="dropdown-profile"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
              style="position: absolute; z-index: 999"
            >
              <div class="py-1" role="none">
                <p class="px-5 font-bold">{{ user?.Name }}</p>
                <button
                  type="submit"
                  class="text-gray-700 block w-full text-left px-4 py-2 text-sm mb-2 hover:text-gray-400"
                  style="
                    font-weight: 500;
                    margin: 1px 5px;
                    width: 95%;
                    border-radius: 0.5rem;
                  "
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                  @click="router.push({ name: 'Profile' })"
                >
                  Perfil
                </button>
                <button
                  type="submit"
                  class="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-gray-400"
                  style="
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
                  Salir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import IconBell from "~icons/mdi/bell";
</script>

<script>
import store from "../store/store.js";
import router from "../router.js";

export default {
  name: "Header",
  data() {
    return {
      dropProfileOpen: false,
      dropNotificationOpen: false,
      dropdownName: "dropdown-profile",
      notifications: [
        {
          image: "",
          text: "Backsoul Follow you",
          type: "info",
          date: "4 hours ago",
        },
      ],
    };
  },
  methods: {
    logout() {
      document.cookie =
        "access_token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      this.dropProfileOpen = false;
      this.$store.commit("setIsLogged", false);
      this.$store.commit("setUser", null);
      this.$store.commit("setWallet", null);
      router.push({ name: "Login" });
    },
    closeIfClickedOutside(event) {
      if (document.getElementById(this.dropdownName) != null) {
        if (!document.getElementById(this.dropdownName).contains(event.target)) {
          switch (this.dropdownName) {
            case "dropdown-notification":
              this.dropNotificationOpen = false;
              break;
            case "dropdown-profile":
              this.dropProfileOpen = false;
              break;
            default:
              break;
          }
          document.removeEventListener("click", this.closeIfClickedOutside);
        }
      }
    },
    toggleDropdown(name) {
      this.dropdownName = name;
      switch (name) {
        case "dropdown-notification":
          this.dropNotificationOpen = !this.dropNotificationOpen;
          break;
        case "dropdown-profile":
          this.dropProfileOpen = !this.dropProfileOpen;
          break;
        default:
          break;
      }

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
.notification-container {
  border-radius: 50%;
  padding: 0.2rem;
}

.notification-container:hover {
  background: rgba(245, 245, 245, 0.315);
}

.menu-profile-dropdown {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.15s;
}

.menu-notification-dropdown {
  animation-name: slide-from-bottom;
  animation-duration: 0.5s;
  width: 25vw;
  margin-right: 1rem;
  margin-top: 1rem;
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 500px) {
  .menu-notification-dropdown {
    width: 90vw;
  }
}
@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slide-from-bottom {
  0% {
    opacity: 0;
    margin-top: 0rem;
  }
  100% {
    opacity: 1;
    margin-top: 1rem;
  }
}
</style>
