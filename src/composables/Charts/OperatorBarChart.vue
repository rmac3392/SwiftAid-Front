<template>
  <div class="h-[90%] w-full flex items-center justify-center">
    <div class="h-full flex w-[100%]">
      <div class="w-[100%]">
        <div class="h-full pt-3 flex items-center justify-center">
          <Bar
            class=""
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
const chartData = ref({
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ],
  datasets: [
    {
      data: [40, 20, 12, 50, 12, 25, 20, 128],
      // backgroundColor: [
      //   "red",
      //   "green",
      //   "blue",
      //   "red",
      //   "green",
      //   "blue",
      //   "red",
      //   "green",
      // ],
      backgroundColor: ["#2b2d56"],
    },
  ],
});

const chartOptions = ref({
  responsive: true,
});
</script>
