<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div class="flex justify-center items-center gap-5 h-full w-full">
        <div class="icon-modal cursor-pointer">
          <icon-filter-variant
            style="font-size: 2.5rem"
            @click="setModal('setModalTransaction', true)"
          />
        </div>
        <div class="icon-modal cursor-pointer">
          <icon-shape-outline
            style="font-size: 2.5rem"
            @click="setModal('setModalCategory', true)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconFilterVariant from "~icons/mdi/filterVariant";
import IconShapeOutline from "~icons/mdi/shapeOutline";
</script>

<script>
import store from "../store/store";
export default {
  data() {
    return {
      amount: 0,
      date: null,
      payRecurrent: false,
    };
  },

  methods: {
    setModal(modal, show) {
      store.commit("setModalAdd", false);
      store.commit(modal, show);
    },
  },
  components: {},
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
  height: 100px;
  width: 200px;
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
