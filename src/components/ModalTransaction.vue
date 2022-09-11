<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div
        style="
          width: 100%;
          display: flex;
          justify-content: end;
          padding: 1rem;
          margin-top: -5.5rem;
          color: white;
        "
      >
        <p
          style="font-size: 1.2rem; font-weight: 900"
          @click="$emit('close-modal')"
          class="cursor-pointer"
        >
          x
        </p>
      </div>
      <div class="flex flex-col gap-2 mx-10">
        <h2 class="text-white text-start font-bold">Ingrese el valor</h2>
        <InputMoney
          v-model="amount"
          :options="{ currency: 'COP' }"
          style="border-radius: 1rem; padding: 0.5rem"
        />
        <h2 class="text-white text-start font-bold" v-modal="description">Descripción</h2>
        <input
          type="text"
          name=""
          id=""
          placeholder="Descripción"
          style="border-radius: 1rem; padding: 0.5rem"
        />
        <h2 class="text-white text-start font-bold">Selecciona una categoria</h2>
        <select name="Categorias" style="border-radius: 1rem; padding: 0.5rem">
          <option>Fútbol</option>
          <option>Críquet</option>
          <option>Básquetbol</option>
          <option>Hockey</option>
          <option>Tenis</option>
        </select>
        <h2 class="text-white text-start font-bold">Selecciona tipo de movimiento</h2>
        <select name="Tipo de movimiento" style="border-radius: 1rem; padding: 0.5rem">
          <option>Ingreso</option>
          <option>Egreso</option>
        </select>

        <h2 class="text-white text-start font-bold">Fecha</h2>
        <Datepicker v-model="date"></Datepicker>

        <div class="flex gap-2">
          <h2 class="text-white text-start font-bold">Movimiento recurrente:</h2>
          <input type="checkbox" v-model="payRecurrent" />
        </div>

        <div>
          <button @click="save()">Guardar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/store";
import InputMoney from "./inputMoney.vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  data() {
    return {
      amount: 0,
      date: null,
      payRecurrent: false,
      description: "",
    };
  },

  methods: {
    save() {
      store.dispatch("createTransaction", {
        amount: this.amount,
        description: this.description,
      });
    },
  },
  components: { InputMoney, Datepicker },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
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
  height: 600px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
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
  margin-top: 50px;
}
</style>
