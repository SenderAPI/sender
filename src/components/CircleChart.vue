<template>
  <div
    class="animation-card flex justify-center items-center"
    style="height: 17rem"
  >
    <canvas :id="id" class="circle"></canvas>
    <div class="absolute z-10">
      <h1 class="font-extrabold text-white text-5xl">1000</h1>
      <span class="font-extrabold text-darkness text-2xl">remaing</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: String,
  },
  data(){
    return{
      data: [{name:"hola", amount:10,color:"red"}]
    }
  },
  mounted() {
    var ctx = document.getElementById(this.id).getContext("2d");
    const labels = [" Messages sent", " Messages remaining"];
    const amounts = [100,1000]
    const colors = ["#046AC8", "#fff"]
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            label: "My First Dataset",
            data: amounts,
            backgroundColor: colors,
            hoverOffset: 0,
          },
        ],
      },
      options: {
        cutout:98,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            titleAlign: 'center',
            bodyAlign: 'center',
            backgroundColor: "#fff",
            titleFont: {
              weight: "bold",
              size: 12,
            },
            bodyFont: {
              weight: "bold",
              size: 15,
            },
            callbacks: {
              label: function (tooltipItem) {
                return Math.abs(tooltipItem.raw) + tooltipItem.label;
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
                return "#007BED";
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
              color: "#fff",
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
  padding: 1rem;
}
</style>
