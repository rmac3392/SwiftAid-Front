<template>
  <div class="h-full">
    <div class="flex pb-5 gap-5 h-[15%]">
      <div class="bg-white w-1/4 h-full rounded-lg p-5 flex shadow-lg">
        <div class="h-full w-[40%]">
          <div
            class="bg-primary h-full rounded-lg flex items-center justify-center text-white"
          >
            <mdicon
              class="origin-center"
              name="ProgressUpload"
              :width="50"
              :height="50"
            />
          </div>
        </div>
        <div class="h-full pl-3 w-[60%]">
          <div class="h-full">
            <div
              class="h-[65%] flex justify-center font-semibold items-end text-4xl"
            >
              12
            </div>
            <div class="h-[35%] flex justify-center items-start text-sm">
              Fire
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white w-1/4 h-full rounded-lg p-5 flex shadow-lg">
        <div class="h-full w-[40%]">
          <div
            class="bg-primary h-full rounded-lg flex items-center justify-center text-white"
          >
            <mdicon
              class="origin-center"
              name="ProgressUpload"
              :width="50"
              :height="50"
            />
          </div>
        </div>
        <div class="h-full pl-3 w-[60%]">
          <div class="h-full">
            <div
              class="h-[65%] flex justify-center font-semibold items-end text-4xl"
            >
              12
            </div>
            <div class="h-[35%] flex justify-center items-start text-sm">
              Flood
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white w-1/4 h-full rounded-lg p-5 flex shadow-lg">
        <div class="h-full w-[40%]">
          <div
            class="bg-primary h-full rounded-lg flex items-center justify-center text-white"
          >
            <mdicon
              class="origin-center"
              name="ProgressUpload"
              :width="50"
              :height="50"
            />
          </div>
        </div>
        <div class="h-full pl-3 w-[60%]">
          <div class="h-full">
            <div
              class="h-[65%] flex justify-center font-semibold items-end text-4xl"
            >
              12
            </div>
            <div class="h-[35%] flex justify-center items-start text-sm">
              Injuries
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white w-1/4 h-full rounded-lg p-5 flex shadow-lg">
        <div class="h-full w-[40%]">
          <div
            class="bg-primary h-full rounded-lg flex items-center justify-center text-white"
          >
            <mdicon
              class="origin-center"
              name="ProgressClose"
              :width="50"
              :height="50"
            />
          </div>
        </div>
        <div class="h-full pl-3 w-[60%]">
          <div class="h-full">
            <div
              class="h-[65%] flex justify-center font-semibold items-end text-4xl"
            >
              12
            </div>
            <div class="h-[35%] flex justify-center items-start text-sm">
              Assault
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white w-1/4 h-full rounded-lg p-5 flex shadow-lg">
        <div class="h-full w-[40%]">
          <div
            class="bg-primary h-full rounded-lg flex items-center justify-center text-white"
          >
            <mdicon
              class="origin-center"
              name="ProgressCheck"
              :width="50"
              :height="50"
            />
          </div>
        </div>
        <div class="h-full pl-3 w-[60%]">
          <div class="h-full">
            <div
              class="h-[65%] flex justify-center font-semibold items-end text-4xl"
            >
              12
            </div>
            <div class="h-[35%] flex justify-center items-start text-sm">
              Biohazard
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white w-1/4 h-full rounded-lg p-5 flex shadow-lg">
        <div class="h-full w-[40%]">
          <div
            class="bg-primary h-full rounded-lg flex items-center justify-center text-white"
          >
            <mdicon
              class="origin-center"
              name="ProgressQuestion"
              :width="50"
              :height="50"
            />
          </div>
        </div>
        <div class="h-full pl-3 w-[60%]">
          <div class="h-full">
            <div
              class="h-[65%] flex justify-center font-semibold items-end text-4xl"
            >
              12
            </div>
            <div class="h-[35%] flex justify-center items-start text-sm">
              Others
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[85%] flex">
      <div class="w-[28%] h-full mr-3 flex flex-col">
        <div
          class="bg-white rounded-lg mb-3 shadow-lg h-1/2 flex items-center justify-center"
        >
          <OperatorPieChart />
        </div>
        <div
          class="bg-white rounded-lg mt-2 shadow-lg h-1/2 flex items-center justify-center"
        >
          <OperatorPieChart />
        </div>
      </div>
      <div class="w-[72%] h-full ml-2 flex flex-col">
        <div class="bg-white rounded-lg mb-3 shadow-lg h-1/2 px-5">
          <OperatorBarChart />
        </div>
        <div class="bg-white rounded-lg mt-2 shadow-lg h-1/2 p-5">
          <div class="overflow-auto h-full">
            <table
              class="table border border-gray-300 table-pin-rows table-pin-cols"
            >
              <!-- head -->
              <thead class="text-primary">
                <tr>
                  <th></th>
                  <th class="border border-gray-300">Location</th>
                  <th class="border border-gray-300">Type of Emergency</th>
                  <th class="border border-gray-300">Description</th>
                  <th class="border border-gray-300">Status</th>
                  <th class="border border-gray-300">Timestamp</th>
                  <th class="border border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody class="">
                <!-- row 1 -->
                <tr class="hover">
                  <th class="border border-gray-300">1</th>
                  <td class="border border-gray-300">Cy Ganderton</td>
                  <td class="border border-gray-300">
                    Quality Control Specialist
                  </td>
                  <td class="border border-gray-300">Blue</td>
                  <td class="border border-gray-300">On</td>
                  <td class="border border-gray-300">12:30:01</td>
                  <td class="border border-gray-300">
                    <dialogAction />
                  </td>
                </tr>
                <!-- row 2 -->
                <tr class="hover">
                  <th class="border border-gray-300">1</th>
                  <td class="border border-gray-300">Cy Ganderton</td>
                  <td class="border border-gray-300">
                    Quality Control Specialist
                  </td>
                  <td class="border border-gray-300">Blue</td>
                  <td class="border border-gray-300">On</td>
                  <td class="border border-gray-300">12:30:01</td>
                  <td class="border border-gray-300">
                    <dialogAction />
                  </td>
                </tr>
                <!-- row 3 -->
                <tr class="hover">
                  <th class="border border-gray-300">1</th>
                  <td class="border border-gray-300">Cy Ganderton</td>
                  <td class="border border-gray-300">
                    Quality Control Specialist
                  </td>
                  <td class="border border-gray-300">Blue</td>
                  <td class="border border-gray-300">On</td>
                  <td class="border border-gray-300">12:30:01</td>
                  <td class="border border-gray-300">
                    <dialogAction />
                  </td>
                </tr>

                <tr class="hover">
                  <th class="border border-gray-300">1</th>
                  <td class="border border-gray-300">Cy Ganderton</td>
                  <td class="border border-gray-300">
                    Quality Control Specialist
                  </td>
                  <td class="border border-gray-300">Blue</td>
                  <td class="border border-gray-300">On</td>
                  <td class="border border-gray-300">12:30:01</td>
                  <td class="border border-gray-300">
                    <dialogAction />
                  </td>
                </tr>

                <tr class="hover">
                  <th class="border border-gray-300">1</th>
                  <td class="border border-gray-300">Cy Ganderton</td>
                  <td class="border border-gray-300">
                    Quality Control Specialist
                  </td>
                  <td class="border border-gray-300">Blue</td>
                  <td class="border border-gray-300">On</td>
                  <td class="border border-gray-300">12:30:01</td>
                  <td class="border border-gray-300">
                    <dialogAction />
                  </td>
                </tr>

                <tr class="hover">
                  <th class="border border-gray-300">1</th>
                  <td class="border border-gray-300">Cy Ganderton</td>
                  <td class="border border-gray-300">
                    Quality Control Specialist
                  </td>
                  <td class="border border-gray-300">Blue</td>
                  <td class="border border-gray-300">On</td>
                  <td class="border border-gray-300">12:30:01</td>
                  <td class="border border-gray-300">
                    <dialogAction />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import OperatorPieChart from "../composables/Charts/OperatorPieChart.vue";
import OperatorBarChart from "../composables/Charts/OperatorBarChart.vue";
import dialogAction from "../composables/dialogAction.vue";
</script>

