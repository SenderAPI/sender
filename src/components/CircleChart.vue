<template>
  <div
    class="animation-card mt-5 flex justify-center"
    style="width: 100%; height: fit-content"
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
        labels: ["Red", "Blue", "Yellow", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100, 1321],
            backgroundColor: ["rgb(255, 99, 132)"],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "#fff",
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
                return tooltipItem.label + " $" + tooltipItem.raw;
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
                return "#000";
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
  height: 100%;
}
</style>
