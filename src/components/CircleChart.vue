<template>
  <div
    class="animation-card mt-5 flex justify-center"
    style="width: fit-content; height: fit-content"
  >
    <canvas :id="id" class="circle"></canvas>
  </div>
</template>
<script>
export default {
  props: {
    id: String,
  },
  mounted() {
    var ctx = document.getElementById(this.id).getContext("2d");

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);

    let chart = new Chart(ctx, {
      type: "doughnut",
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
            fill: "start",
            backgroundColor: "#e63946",
            borderWidth: 0,
            hidden: false,
            data: [100000, 12000, 12350, 15570, 18220, 1710, 160],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "#e63946",
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
            display: false,
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
            display: false,
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
              color: "#1d3557",
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
};
</script>

<style>
.circle {
  border-radius: 1rem;
  background-color: #233d62;
  padding: 1rem;
  width: 100%;
  height: 100%;
}
</style>
