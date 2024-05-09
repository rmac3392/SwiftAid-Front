<template>
  <div class="h-full">
    <div class="flex pb-5 gap-5 h-[15%]">
      <div class="bg-white w-1/4 h-full rounded-lg p-5 flex shadow-lg">
        <div class="h-full w-[40%]">
          <div
            class="bg-primary h-full rounded-lg flex items-center justify-center text-white"
          >
            <!-- <mdicon
              class="origin-center"
              name="ProgressUpload"
              :width="50"
              :height="50"
            /> -->
            <img src="../assets/fire.svg" alt="SVG Icon" class="fill-current w-[50px] h-[50px] text-white" />
          </div>
        </div>
        <div class="h-full pl-3 w-[60%]">
          <div class="h-full">
            <div
              class="h-[65%] flex justify-center font-semibold items-end text-4xl"
            >
              {{ fireCount }}
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
            <img src="../assets/flood.svg" class="h-[50px] w-[50px]" alt="">
          </div>
        </div>
        <div class="h-full pl-3 w-[60%]">
          <div class="h-full">
            <div
              class="h-[65%] flex justify-center font-semibold items-end text-4xl"
            >
              {{ floodCount }}
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
            <img src="../assets/injuries.svg" class="h-[50px] w-[50px]" alt="">
          </div>
        </div>
        <div class="h-full pl-3 w-[60%]">
          <div class="h-full">
            <div
              class="h-[65%] flex justify-center font-semibold items-end text-4xl"
            >
              {{ injuriesCount }}
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
            <img src="../assets/assault.svg" class="h-[60px] w-[60px] mt-2" alt="">
          </div>
        </div>
        <div class="h-full pl-3 w-[60%]">
          <div class="h-full">
            <div
              class="h-[65%] flex justify-center font-semibold items-end text-4xl"
            >
              {{ assaultCount }}
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
            <img src="../assets/biohazard.svg" class="h-[50px] w-[50px] mt-2" alt="">
          </div>
        </div>
        <div class="h-full pl-3 w-[60%]">
          <div class="h-full">
            <div
              class="h-[65%] flex justify-center font-semibold items-end text-4xl"
            >
              {{ biohazardCount }}
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
            <img src="../assets/other.svg" class="h-[50px] w-[50px] mt-2" alt="">
          </div>
        </div>
        <div class="h-full pl-3 w-[60%]">
          <div class="h-full">
            <div
              class="h-[65%] flex justify-center font-semibold items-end text-4xl"
            >
              {{ othersCount }}
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
          <OperatorPieChart 
          :red="pending"
          :blue="acknowledged"
          />
        </div>
        <div
          class="bg-white rounded-lg mt-2 shadow-lg h-1/2 flex items-center justify-center"
        >
          <OperatorPieChart2 
          :fire="fireCount"
          :flood="floodCount"
          :injuries="injuriesCount"
          :assault="assaultCount"
          :biohazard="biohazardCount"
          :others="othersCount"
          />
        </div>
      </div>
      <div class="w-[72%] ml-2 flex flex-col">
        <div class="bg-white w-full rounded-lg mb-3 shadow-lg h-[50%] ">
          <OperatorBarChart
            :key="chartKey"
            :jan="jan"
            :feb="feb"
            :mar="mar"
            :apr="apr"
            :may="may"
            :jun="jun"
            :jul="jul"
            :aug="aug"
          />
        </div>
        <div class="bg-white  rounded-lg mt-2 shadow-lg h-[50%]">
          <div class="overflow-auto h-full rounded-lg">
            <table
              class="table border border-gray-300 table-pin-rows table-pin-cols "
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
                <tr class="hover" v-for="(post, index) in posts">
                  <th class="border border-gray-300">{{ index + 1 }}</th>
                  <td class="border border-gray-300">{{ post.location }}</td>
                  <td class="border border-gray-300">
                    {{ post.emergency }}
                  </td>
                  <td class="border border-gray-300">{{ post.description }}</td>
                  <td class="border border-gray-300">{{ post.status }}</td>
                  <td class="border border-gray-300">{{ post.timestamp }}</td>
                  <td class="border border-gray-300">
                    <dialogAction
                      :emergency="post.emergency"
                      :date="post.timestamp"
                      :time="post.time"
                      :description="post.description"
                    />
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
import OperatorPieChart2 from "../composables/Charts/SixPieChart.vue";

import OperatorBarChart from "../composables/Charts/OperatorBarChart.vue";
import dialogAction from "../composables/dialogAction.vue";
import { ref, onMounted } from "vue";

onMounted(() => {
  getPost();
});

const posts = ref([]);

const fireCount = ref(0);
const floodCount = ref(0);
const assaultCount = ref(0);
const injuriesCount = ref(0);
const biohazardCount = ref(0);
const othersCount = ref(0);

//month referencers
const jan = ref(0);
const feb = ref(0);
const mar = ref(0);
const apr = ref(0);
const may = ref(0);
const jun = ref(0);
const jul = ref(0);
const aug = ref(0);

//status referencers
const acknowledged = ref(0);
const pending = ref(0);

const getPost = async () => {
  const response = await fetch("http://localhost:8080/getPost");
  const data = await response.json();

  for (var i = 0; i < data.length; i++) {
    const timestamp = new Date(data[i].timestamp);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = timestamp.getMonth();
    const monthName = months[monthIndex];
    const day = timestamp.getDate();
    const year = timestamp.getFullYear();

    let hours = timestamp.getHours();
    const minutes = timestamp.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const time = hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + ampm;

    posts.value.push({
      id: data[i].post_id,
      location: data[i].address,
      emergency: data[i].emergency_type,
      description: data[i].description,
      status: data[i].status,
      timestamp: `${monthName} ${day}, ${year}`,
      time: time,
    });

    if(data[i].status=='Pending'){
      pending.value++;
    }
    if(data[i].status=='Acknowledged'){
      acknowledged.value++;
    }


    if (data[i].emergency_type == "Fire") {
      fireCount.value++;
    }
    if (data[i].emergency_type == "Flood") {
      floodCount.value++;
    }
    if (data[i].emergency_type == "Assault") {
      assaultCount.value++;
    }
    if (data[i].emergency_type == "Injuries") {
      injuriesCount.value++;
    }
    if (data[i].emergency_type == "Biohazard") {
      biohazardCount.value++;
    }
    if (data[i].emergency_type == "Others") {
      othersCount.value++;
    }
    if (monthName == "January") {
      jan.value++;
    }
    if (monthName == "February") {
      feb.value++;
    }
    if (monthName == "March") {
      mar.value++;
    }
    if (monthName == "April") {
      apr.value++;
    }
    if (monthName == "May") {
      may.value++;
    }
    if (monthName == "June") {
      jun.value++;
    }
    if (monthName == "July") {
      jul.value++;
    }
    if (monthName == "August") {
      aug.value++;
    }

    
  }
};
</script>
