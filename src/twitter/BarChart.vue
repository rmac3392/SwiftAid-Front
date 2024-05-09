<template>
  <div>
    <canvas width="500" height="500" ref="chartCanvas" ></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const chartCanvas = ref(null);
let myChart;

onMounted(() => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext("2d");
    myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Assault", "Biohazard", "Fire", "Injuries", "Other", "Flood"],
        datasets: [
          {
            label: "Change (%)",
            data: [153.66, 117.13, 142.89, 101.58, 148.04, -178.53].map((v) =>
              Math.abs(v)
            ),
            backgroundColor: [
              "#312e81",
              "#4338ca",
              "#2563eb",
              "#312e81",
              "#4338ca",
              "#2563eb",
            ],
            borderColor: [
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        
        scales: {
          x: {
            ticks: {
              color: "white", // Set tick color to white
            },
            grid: {
              color: "", // Set grid color to white with transparency
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return (
                  (value * (this.getLabelForValue(value) > 0 ? 1 : -1)).toFixed(
                    2
                  ) + "%"
                );
              },
              
              color: "white", // Set tick color to white
            },
            grid: {
              color: "#ffffff", // Set grid color to white with transparency
            },
            
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || "";
                let value = context.raw;
                return (
                  label +
                  ": " +
                  (value * (context.parsed.y > 0 ? -1 : 1)).toFixed(2) +
                  "%"
                );
              },
            },
          },
        },
      },
    });
  }
});

onBeforeUnmount(() => {
  if (myChart) {
    myChart.destroy();
  }
});
</script>

<style scoped>
/* Add styles if needed */
</style>
