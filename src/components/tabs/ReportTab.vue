<template>
  <div class="h-[87%] w-full">
    <div class="w-full h-full pl-3 pr-5 pb-2">
      <div class="w-full h-[15%] flex">
        <div class="w-[15%]"></div>
        <div class="flex h-full w-[85%] pb-3 gap-6 items-end">
          <div
            class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
          >
            <div class="flex items-center justify-center w-[40%] p-3">
              <div
                class="bg-secondary w-full h-full rounded-md flex items-center justify-center"
              >
                <mdicon class="" name="close-thick" :width="45" :height="45" />
              </div>
            </div>
            <div class="w-[60%] pl-1 pb-3 pt-6">
              <div class="h-[50%] flex items-center font-semibold text-5xl">
                2
              </div>
              <div class="h-[50%] flex items-center text-ternary">
                Cancel Reports
              </div>
            </div>
          </div>
          <div
            class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
          >
            <div class="flex items-center justify-center w-[40%] p-3">
              <div
                class="bg-secondary w-full h-full rounded-md flex items-center justify-center"
              >
                <mdicon class="" name="close-thick" :width="45" :height="45" />
              </div>
            </div>
            <div class="w-[60%] pl-1 pb-3 pt-6">
              <div class="h-[50%] flex items-center font-semibold text-5xl">
                2
              </div>
              <div class="h-[50%] flex items-center text-ternary">
                Cancel Reports
              </div>
            </div>
          </div>
          <div
            class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
          >
            <div class="flex items-center justify-center w-[40%] p-3">
              <div
                class="bg-secondary w-full h-full rounded-md flex items-center justify-center"
              >
                <mdicon class="" name="send-variant" :width="45" :height="45" />
              </div>
            </div>
            <div class="w-[60%] pl-1 pb-3 pt-6">
              <div class="h-[50%] flex items-center font-semibold text-5xl">
                8
              </div>
              <div class="h-[50%] flex items-center text-ternary">
                Send Reports
              </div>
            </div>
          </div>
          <div
            class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
          >
            <div class="flex items-center justify-center w-[40%] p-3">
              <div
                class="bg-secondary w-full h-full rounded-md flex items-center justify-center"
              >
                <mdicon
                  class=""
                  name="receipt-clock"
                  :width="45"
                  :height="45"
                />
              </div>
            </div>
            <div class="w-[60%] pl-1 pb-3 pt-6">
              <div class="h-[50%] flex items-center font-semibold text-5xl">
                3
              </div>
              <div class="h-[50%] flex items-center text-ternary">Pending</div>
            </div>
          </div>
          <div
            class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
          >
            <div class="flex items-center justify-center w-[40%] p-3">
              <div
                class="bg-secondary w-full h-full rounded-md flex items-center justify-center"
              >
                <mdicon class="" name="check-bold" :width="45" :height="45" />
              </div>
            </div>
            <div class="w-[60%] pl-1 pb-3 pt-6">
              <div class="h-[50%] flex items-center font-semibold text-5xl">
                5
              </div>
              <div class="h-[50%] flex items-center text-ternary">
                Acknowledge
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="h-[85%] w-full">
        <div class="h-full flex">
          <div class="w-[74.2%] p-[0.77rem]">
            <div
              class="h-full w-full bg-white rounded-lg shadow-xl text-primary p-5"
            >
              <div class="flex h-[5%]">
                <div
                  :class="active == 0 ? 'active-tabs' : 'general-tabs'"
                  @click="active = 0"
                >
                  Fire Department
                </div>
                <div
                  :class="active == 1 ? 'active-tabs' : 'general-tabs'"
                  @click="active = 1"
                >
                  Emergency Medical Services
                </div>
                <div
                  :class="active == 2 ? 'active-tabs' : 'general-tabs'"
                  @click="active = 2"
                >
                  Search and Rescue Teams
                </div>
                <div
                  :class="active == 3 ? 'active-tabs' : 'general-tabs'"
                  @click="active = 3"
                >
                  Police Department
                </div>
                <div
                  :class="active == 4 ? 'active-tabs' : 'general-tabs'"
                  @click="active = 4"
                >
                  Coast Guards
                </div>
              </div>
              <Transition name="fade" mode="out-in">
                <FdTab v-if="active == 0" />
                <EmsTab v-else-if="active == 1" />
                <SrTab v-else-if="active == 2" />
                <PdTab v-else-if="active == 3" />
                <CgTab v-else-if="active == 4" />
              </Transition>
            </div>
          </div>
          <div class="w-[25.8%] p-[0.77rem] pl-2 pr-0">
            <div class="h-1/4 pb-3">
              <div
                class="h-full w-full bg-white rounded-lg shadow-xl text-primary p-2"
              ></div>
            </div>
            <div class="h-3/4 pt-3">
              <div
                class="h-full w-full bg-white rounded-lg shadow-xl text-primary p-5 flex items-center justify-center"
              >
                <Bar
                  id="my-chart-id"
                  :options="chartOptions"
                  :data="chartData"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FdTab from "../FdTab.vue";
import EmsTab from "../EmsTab.vue";
import SrTab from "../SrTab.vue";
import PdTab from "../PdTab.vue";
import CgTab from "../CgTab.vue";
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
import { ref } from "vue";
const active = ref(0);

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
const chartData = ref({
  labels: ["January", "February", "March"],
  datasets: [{ data: [40, 20, 12], backgroundColor: ["red", "green", "blue"] }],
});

const chartOptions = ref({
  responsive: true,
});
</script>
