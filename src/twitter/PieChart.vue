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
        backgroundColor: ["#312e81", "#4338ca", "#818cf8"],
        hoverOffset: 4,
        
      },
    ],
  };
  const chartOptions = ref({
    responsive: true,
  });
  </script>
  