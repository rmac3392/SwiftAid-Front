<template>
  <div class="flex h-[87%] w-full">
    <div class="w-[100%] h-full pl-3 pr-5 pb-2 flex">
      <div class="w-[100%] h-[80%] pl-3">
        <div class="flex h-[15%] w-[100%] bg-white items-end rounded-lg mb-4">
          <div class="flex h-full w-[25%] text-primary flex-col">
            <div class="flex items-end justify-end mr-[20%] mt-3">
              <Notifications notif="8" />
            </div>

            <div class="flex flex-row gap-3 justify-center items-center">
              <mdicon
                class="origin-center"
                name="ProgressUpload"
                :width="40"
                :height="40"
              />
              <div
                class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
              >
                Flood
              </div>
            </div>
          </div>
          <div class="flex h-full w-[25%] text-primary flex-col">
            <div class="flex items-end justify-end mt-3 mr-[10%]">
              <Notifications notif="3" />
            </div>

            <div class="flex flex-row gap-3 justify-center items-center">
              <mdicon
                class="origin-center -rotate-90"
                name="ProgressClose"
                :width="40"
                :height="40"
              />
              <div
                class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
              >
                Fire Incidents
              </div>
            </div>
          </div>
          <div class="flex h-full w-[25%] text-primary flex-col">
            <div class="flex items-end justify-end mr-[20%] mt-3">
              <Notifications notif="5" />
            </div>

            <div class="flex flex-row gap-3 justify-center items-center">
              <mdicon
                class="origin-center"
                name="ProgressCheck"
                :width="40"
                :height="40"
              />
              <div
                class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
              >
                Typhoon
              </div>
            </div>
          </div>
          <div class="flex h-full w-[25%] text-primary flex-col mr-5">
            <div class="flex items-end justify-end mr-[10%] mt-3">
              <Notifications notif="9" />
            </div>

            <div class="flex flex-row gap-3 justify-center items-center">
              <mdicon
                class="origin-center"
                name="ProgressQuestion"
                :width="40"
                :height="40"
              />
              <div
                class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
              >
                Road Incidents
              </div>
            </div>
          </div>
          <div class="flex h-full w-[25%] text-primary flex-col mr-5">
            <div class="flex items-end justify-end mr-[5%] mt-3">
              <Notifications notif="9" />
            </div>

            <div class="flex flex-row gap-3 justify-center items-center">
              <mdicon
                class="origin-center"
                name="ProgressQuestion"
                :width="40"
                :height="40"
              />
              <div
                class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
              >
                Marine Incidents
              </div>
            </div>
          </div>
        </div>
        <div class="w-[100%] h-[107%] bg-[#dcd3dd] rounded-lg flex">
          <div
            class="w-[30%] h-full pl-3 pr-3 pb-3 bg-white rounded-lg border-r-2 border-gray drop-shadow-lg"
          >
            <div
              class="text-primary font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-xl flex text-center justify-center items-center my-7"
            >
              Pending Reports
            </div>
            <Alert location="Pasil Cebu " />
            <Alert location="Cebu City " />
            <Alert location="Tejero Cebu" />
            <Alert location="Sanciangko Cebu " />
            <Alert location="Guadalupe Cebu" />
            <Alert location="Labangon Cebu " />
            <Alert location="Olango Lapu Lapu" />
          </div>

          <div class="flex flex-col col-span-1 w-[70%]">
            <div
              class="h-[55%] mx-5 bg-gray-100 border-2 border-white rounded-lg drop-shadow-lg"
            >
              <OperatorBarChart />
            </div>
            <div
              class="w-[96%] h-[50%] flex flex-row row-span-3 gap-5 my-5 mx-5"
            >
              <div
                class="w-[33.3%] h-[105%] bg-gray-100 border-2 border-white gap-3 rounded-lg"
              >
                <OperatorPieChart />
              </div>
              <div
                class="w-[33.3%] h-[105%] bg-gray-100 border-2 border-white rounded-lg"
              >
                <OperatorDoughnutChart />
              </div>
              <div
                class="w-[33.3%] h-[105%] bg-gray-100 border-2 border-white rounded-lg"
              >
                <OperatorPieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Notifications from "../../composables/Notifications.vue";
import Alert from "../../composables/Alert.vue";
import OperatorBarChart from "../../composables/Charts/OperatorBarChart.vue";
import OperatorPieChart from "../../composables/Charts/OperatorPieChart.vue";
import OperatorDoughnutChart from "../../composables/Charts/OperatorDoughnutChart.vue";
</script>
