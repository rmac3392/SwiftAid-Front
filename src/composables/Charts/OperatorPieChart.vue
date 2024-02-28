<template>
  <div class="h-[90%] w-full flex items-center justify-center">
    <div class="h-full flex w-[100%]">
      <div class="w-[100%]">
        <div class="h-full pt-3 flex items-center justify-center">
          <Pie id="my-chart-id" :options="chartOptions" :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PieController,
  ArcElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, PieController, ArcElement);
const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
const chartOptions = ref({
  responsive: true,
});
</script>
