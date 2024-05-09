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
  red: Number,
  blue: Number,
});

const chartOptions = ref({
  responsive: true,
});

const chartData = ref({
  labels: ["Pending", "Acknowledged"],
  datasets: [
    {
      label: "My First Dataset",
      data: [],
      backgroundColor: ["#312e81", "#4338ca"],
      hoverOffset: 4,
    },
  ],
});

const chartKey = ref(0);

watch(
  () => [props.red, props.blue],
  () => {
    updateChartData();
  }
);

onMounted(() => {
  updateChartData();
});

const updateChartData = () => {
  chartData.value.datasets[0].data = [props.red, props.blue];
  chartKey.value++;
};
</script>
