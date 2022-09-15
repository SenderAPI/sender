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
    data: null,
  },
  mounted() {
    var ctx = document.getElementById(this.id).getContext("2d");
    const labels = this.data.map((category) => category.name);
    const amounts = this.data.map((category) => category.amount);
    const colors = this.data.map((category) => category.color);
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            label: "My First Dataset",
            data: amounts,
            backgroundColor: colors,
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
                return tooltipItem.label + " $" + Math.abs(tooltipItem.raw);
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
