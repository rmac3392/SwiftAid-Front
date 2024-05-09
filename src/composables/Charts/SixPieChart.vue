<template>
    <div class="h-[90%] w-full flex items-center justify-center">
      <div class="h-full flex w-[100%]">
        <div class="w-[100%]">
          <div class="h-full pt-3 flex items-center justify-center">
            <Pie :key="chartKey" id="my-chart-id" :options="chartOptions" :data="chartData" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, onMounted, watch } from "vue";
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
  
  const props = defineProps({
    fire: Number,
    flood: Number,
    injuries: Number,
    assault: Number,
    biohazard: Number,
    others: Number,
  });
  
  const chartOptions = ref({
    responsive: true,
  });
  
  const chartData = ref({
    labels: ["Fire", "Flood", "Injuries", "Assault", "Biohazard", "Others"],
    datasets: [
      {
        label: "My Dataset",
        data: [],
        backgroundColor: ["#312e81", "#4338ca", "#818cf8", "#fbbf24", "#ef4444", "#10b981"],
        hoverOffset: 4,
      },
    ],
  });
  
  const chartKey = ref(0);
  
  watch(
    () => [props.fire, props.flood, props.injuries, props.assault, props.biohazard, props.others],
    () => {
      updateChartData();
    }
  );
  
  onMounted(() => {
    updateChartData();
  });
  
  const updateChartData = () => {
    chartData.value.datasets[0].data = [props.fire, props.flood, props.injuries, props.assault, props.biohazard, props.others];
    chartKey.value++;
  };
  </script>
  