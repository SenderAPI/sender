<template>
  <div>
    <vs-table max-items="3" pagination :data="credits" search>
      <template #thead>
        <vs-th> Amount </vs-th>
        <vs-th> Status </vs-th>
        <vs-th> Date </vs-th>
      </template>

      <template v-slot="{ data }">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].Amount">
            <p class="font-bold text-2xl text-darkness">${{ data[indextr].Amount }}</p>
          </vs-td>

          <vs-td :data="data[indextr].status">
            <p class="font-bold text-xl text-gray-400">
              {{
                data[indextr].status === 'SUCCESS' ? 'Completado' :
                  data[indextr].status === 'PENDING_VERIFICATION' ? 'Verificación pendiente' :
                    data[indextr].status === 'ERROR' ? 'Error al procesar el pago' :
              'Otro estado'
              }}
            </p>
          </vs-td>

          <vs-td :data="data[indextr].date">
            <p class="font-bold text-xl text-darkness">
              {{ getFormattedDate(data[indextr].CreatedAt) }}
            </p>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import store from "../store/store.js";

export default {
  data() {
    return {};
  },
  computed: {
    credits() {
      return store.getters.credits;
    },
  },
  mounted() {
    store.dispatch("getCredits");
  },
  methods: {
    getFormattedDate(date) {
      date = new Date(date);
      let year = date.getFullYear();
      let month = (1 + date.getMonth()).toString().padStart(2, "0");
      let day = date.getDate().toString().padStart(2, "0");

      return month + "/" + day + "/" + year;
    },
  },
};
</script>

<style>
.vs-con-table {
  background: none !important;
}

.vs-con-table table {
  border-collapse: separate !important;
  border-spacing: 0 2em !important;
}

input-search vs-table--search-input {
  padding: 0.5rem 2rem !important;
  font-size: 1rem !important;
}

.vuesax-app-is-ltr .vs-table--search i {
  left: 0px !important;
  transform: scale(1.5) !important;
}

.vs-table--search-input {
  margin: 1.5rem;
  transform: scale(1.2);
  padding: 11px 35px !important;
}

.vs-pagination--ul {
  padding: 0.5rem 1rem !important;
}

.vs-table--tbody-table .tr-values td {
  padding: 37px !important;
}

th .sort-th,
th .vs-table-text {
  justify-content: center;
}

div.vs-con-tbody.vs-table--tbody>table>thead>tr>th>div {
  font-size: 1.3rem !important;
}

.vs-table--tbody-table tr {
  background: none !important;
}

th .sort-th,
th .vs-table-text {
  color: white !important;
  font-size: 1rem !important;
  text-align: center !important;
  justify-content: center !important;
  font-weight: 600 !important;
  align-items: center !important;
}

div.vs-con-tbody.vs-table--tbody>table>tr {
  background-color: white !important;
}

div.vs-con-tbody.vs-table--tbody>table>tr>td:nth-child(1) {
  border-radius: 1rem 0 0 1rem !important;
}

div.vs-con-tbody.vs-table--tbody>table>tr>td:nth-child(3) {
  border-radius: 0 1rem 1rem 0 !important;
}
</style>
