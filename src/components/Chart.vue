<template>
  <div class="wrapper">
    <canvas id="chartGeneral"></canvas>
  </div>
</template>
<script>
export default {
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
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 5,
            pointRadius: 0.5,
            fill: "start",
            backgroundColor: "#fff",
            borderWidth: 4,
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
                  borderRadius: 5,
                  backgroundColor: "#1d3557",
                  borderColor: "#1d3557",
                  borderDash: 0,
                  borderWidth: 5,
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
.wrapper {
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 1rem;
}
</style>
