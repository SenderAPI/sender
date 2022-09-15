<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div class="flex flex-col justify-center items-center h-full w-full">
        <div class="w-full flex justify-center flex-col p-5">
          <h2 class="text-white text-start font-bold">Nombre</h2>
          <input
            type="text"
            v-model="name"
            placeholder="Nombre de la categoria"
            style="border-radius: 1rem; padding: 0.5rem"
          />
        </div>
        <div class="flex gap-5 w-full px-5">
          <h2 class="text-white text-start font-bold">Selecciona el color:</h2>
          <input type="color" v-model="color" />
        </div>
        <div class="mt-5">
          <button @click="save()">Guardar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/store";
export default {
  data() {
    return {
      name: "",
      color: "",
    };
  },

  methods: {
    save() {
      store.dispatch("createCategory", { name: this.name, color: this.color });
    },
  },
};
</script>

<style scoped>
.icon-modal {
  border-radius: 1rem;
  padding: 0.5rem;
  color: white;
}
.icon-modal:hover {
  background: #1a2e4b;
  color: #0f1a2c;
}
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000c4;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  animation-duration: 0.2s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.modal {
  text-align: center;
  background-color: #1d3557;
  height: 200px;
  width: 300px;
  border-radius: 20px;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #1a2e4b;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
}
</style>
