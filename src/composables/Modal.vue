<template>
  <button
    data-modal-target="popup-modal"
    data-modal-toggle="popup-modal"
    class="block text-white bg-primary w-[100%] py-2 px-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-blue-800"
    type="button"
  >
    <span class="flex flex-row row-span-2 gap-2 justify-center items-center"
      ><mdicon name="ClipboardEditOutline" :width="30" :height="30" />
      Details</span
    >
  </button>

  <div
    id="popup-modal"
    tabindex="-1"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-[100%] md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-2 items-center justify-center flex flex-col">
          <div class="w-[90%] mt-[10%] mb-[3%]">
            <ScenarioReport
              location="Sanciangko Cebu"
              typeOfEmergency="Fire Incident"
              subjectDescription="Fire incident near Cebu City Medical Center"
              emergencyResponseTeam="Fire Department, Emergency Medical Team"
              reportDate="February 23, 2024"
              reportTime="12:11 AM"
              operatorName="Michael Tonilon"
              assignRole="Emergency Operator Office Department"
              responderDepartment="Pasil Fire Department"
            />
          </div>
          <div
            class="flex-row flex row-2 justify-center items-center gap-5 my-[2%]"
          >
            <!-- <button
              data-modal-hide="popup-modal"
              type="button"
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Yes, I'm sure
            </button>
            <button
              type="button"
              class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              No, cancel
            </button> -->
            <div class="w-[100%] px-5">
              <Buttons
                data-modal-hide="popup-modal"
                buttonName="Print Report"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import { initFlowbite } from "flowbite";
import ScenarioReport from "./ScenarioReport.vue";
import Buttons from "./Buttons.vue";
onMounted(() => {
  initFlowbite();
});
</script>
