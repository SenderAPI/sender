<template>
  <div class="w-full h-full">
    <canvas id="barChart"></canvas>
  </div>
</template>
<script>
export default {
  mounted() {
    var ctx = document.getElementById("barChart").getContext("2d");

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
          "JULIO",
          "AGOSTO",
          "SEPTIEMBRE",
          "OCTUBRE",
          "NOVIEMBRE",
          "DICIEMBRE",
        ],
        datasets: [
          {
            fill: "start",
            backgroundColor: "#007BED",
            borderWidth: 7,
            hidden: false,
            hoverBackgroundColor: "#fff",
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
            displayColors: false,
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
                return tooltipItem.raw + " sms";
              },
              labelColor: function (context) {
                return {
                  backgroundColor: "#1d3557",
                  borderColor: "#1d3557",
                  labelTextColor: "#1d3557",
                };
              },
              labelTextColor: function (context) {
                return "#fff";
              },
            },
          },
        },
        tension: 0.5,
        scales: {
          x: {
            ticks: {
              font: {
                size: 10,
              },
              color: "#fff",
            },
            grid: {
              drawBorder: false,
              display: false,
            },
          },
          y: {
            ticks: {
              callback: function (value, index, values) {
                return value + " sms";
              },
              font: {
                size: 12,
              },
              color: "#fff",
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
#barChart {
  border-radius: 1rem;
  max-height: 31rem !important;
  width: 100% !important;
}
</style>
