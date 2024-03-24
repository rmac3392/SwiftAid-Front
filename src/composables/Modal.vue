<template>
  <button
    @click="toggleModal"
    class="block text-white bg-primary w-[100%] py-2 px-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-blue-800"
    type="button"
  >
    <span class="flex flex-row row-span-2 gap-2 justify-center items-center">
      <mdicon name="ClipboardEditOutline" :width="30" :height="30" />
      Details
    </span>
  </button>

  <div
    v-if="modalOpen"
    id="popup-modal"
    class="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-40"
  >
    <div class="relative p-4 max-w-md max-h-full overflow-y-auto bg-white rounded-lg shadow dark:bg-gray-700">
      <button
        @click="closeModal"
        type="button"
        class="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
      <div class="p-2 flex flex-col items-center justify-center">
        <div class="w-90 mt-10 mb-3">
          <ScenarioReport
            :location="location"
            :typeOfEmergency="typeOfEmergency"
            :subjectDescription="subjectDescription"
            :emergencyResponseTeam="emergencyResponseTeam"
            :reportDate="reportDate"
            :reportTime="reportTime"
            :operatorName="operatorName"
            assignRole="Emergency Operator Office Department"
            responderDepartment="Pasil Fire Department"
          />
        </div>
        <div class="flex justify-center items-center gap-5 my-2">
          <div class="w-full px-5">
            <Buttons
              @click="closeModal"
              buttonName="Print Report"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ScenarioReport from "./ScenarioReport.vue";
import Buttons from "./Buttons.vue";


defineProps({
  location: String,
  typeOfEmergency: String,
  subjectDescription: String,
  emergencyResponseTeam: String,
  submit: String,
  discard: String,
  reportDate: String,
  reportTime: String,
  operatorName: String,
  assignRole: String,
  responderDepartment: String,
});



const modalOpen = ref(false);
const toggleModal = () => {
  modalOpen.value = !modalOpen.value;
};
const closeModal = () => {
  modalOpen.value = false;
};
</script>
