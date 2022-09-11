<template>
  <div class="wrapper">
    <h2
      class="font-bold text-xl text-left"
      style="color: white; font-weight: 600; text-align: center"
    >
      {{ text }}
    </h2>
    <canvas id="chartGeneral"></canvas>
  </div>
</template>
<script>
import store from "../store/store";

export default {
  props: {
    text: String,
  },
  computed: {
    reportMonths() {
      let data = [];
      if (store.getters.reportMonths()) {
        store.getters.reportMonths().forEach((element) => {
          data.push(element.total);
        });
      }
      return data;
    },
  },
  mounted() {
    var ctx = document.getElementById("chartGeneral").getContext("2d");
    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#1d3557");
    gradientStroke.addColorStop(1, "#457b9d");

    let chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "ENERO",
          "FEBRERO",
          "MARZO",
          "ABRIL",
          "MAYO",
          "JUNIO",
          "AGOSTO",
          "SEPTIEMBRE",
          "OCTUBRE",
          "NOVIEMBRE",
          "DICIEMBRE",
        ],
        datasets: [
          {
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            pointBorderWidth: 1,
            pointHoverRadius: 1,
            pointHoverBorderWidth: 5,
            pointRadius: 3,
            fill: "start",
            backgroundColor: "#1d3557",
            borderWidth: 4,
            hidden: false,
            data: this.reportMonths,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "#1d3557",
            titleFont: {
              weight: "bold",
              size: 12,
            },
            bodyFont: {
              weight: "bold",
              size: 20,
            },
            callbacks: {
              label: function (tooltipItem) {
                return "$" + tooltipItem.raw;
              },
              labelColor: function (context) {
                return {
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  borderColor: "#fff",
                  borderWidth: 0.1,
                };
              },
              labelTextColor: function (context) {
                return "#ffff";
              },
            },
          },
        },
        tension: 0.4,
        scales: {
          x: {
            ticks: {
              font: {
                size: 10,
              },
              color: "#BFBEE0",
            },
            grid: {
              drawBorder: false,
              display: false,
            },
          },
          y: {
            ticks: {
              callback: function (value, index, values) {
                if (parseInt(value) > 999) {
                  return "$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                } else if (parseInt(value) < -999) {
                  return (
                    "-$" +
                    Math.abs(value)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  );
                } else {
                  return "$" + value;
                }
              },
              font: {
                size: 12,
              },
              color: "#BFBEE0",
            },
            grid: {
              drawBorder: false,
              display: false,
            },
          },
        },
      },
    });
  },
  methods: {},
};
</script>

<style>
.wrapper {
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  min-height: 10rem;
  padding: 1rem;
}
</style>
