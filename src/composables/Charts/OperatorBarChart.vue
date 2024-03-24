<template>
  <div class="h-[90%] w-full flex items-center justify-center">
    <div class="h-full flex w-[100%]">
      <div class="w-[100%]">
        <div class="h-full pt-3 flex items-center justify-center">
          <Bar
            :key="chartKey"
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
import { ref, defineProps, onMounted, watch } from "vue";
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

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});

const props = defineProps({
  jan: Number,
  feb: Number,
  mar: Number,
  apr: Number,
  may: Number,
  jun: Number,
  jul: Number,
  aug: Number,
});

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
      data: [],
      backgroundColor: ["#2b2d56"],
    },
  ],
});

const chartKey = ref(0);

watch(
  () => [props.jan, props.feb, props.mar, props.apr, props.may, props.jun, props.jul, props.aug],
  () => {
    updateChartData();
  }
);

onMounted(() => {
  updateChartData();
});

const updateChartData = () => {
  chartData.value.datasets[0].data = [
    props.jan,
    props.feb,
    props.mar,
    props.apr,
    props.may,
    props.jun,
    props.jul,
    props.aug,
  ];
  chartKey.value++;
};
</script>
