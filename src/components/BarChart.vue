<template>
  <div class="barChart">
    <h2
      class="font-bold text-xl text-left"
      style="color: rgb(230 230 252); font-weight: 600; text-align: center"
    >
      {{ text }}
    </h2>
    <canvas :id="id"></canvas>
  </div>
</template>
<script>
export default {
  props: {
    color: String,
    id: String,
    text: String,
  },
  mounted() {
    var ctx = document.getElementById(this.id).getContext("2d");

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);

    let chart = new Chart(ctx, {
      type: "bar",
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
            backgroundColor: this.color,
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
            backgroundColor: this.color,
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
.barChart {
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 1rem;
}
</style>
