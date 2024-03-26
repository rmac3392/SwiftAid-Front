<template>
    <div
      v-if="isVisible"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 "
    >
    <div class="flex items-center justify-center w-[25%] h-[72%] flex-col bg-white ">
        <button
        @click="closeModal"
        type="button"
        class="absolute top-[15%] right-[38%] text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
    <div
      class="bg-gray border-white border-2 w-[80%] h-[500px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] drop-shadow-lg rounded-lg"
    >
    
      <div
        class="h-[50px] mt-[15%] mb-[5%] flex flex-col items-center justify-center text-xs text-black font-500"
      >
        <span class="w-[13%] flex justify-center text-center items-center">
          <img src="../assets/SWIFTAID_logo.png" alt="swiftaidlogo" />
        </span>
        <span class="">Swift Aid Philippines</span>
        <span>Republic of the Philippines</span>
        <span>Archbishop Palace Cebu City, Philippines</span>
        <div>
          <span class="text-xs">{{ assignRole }}</span>
        </div>
      </div>
      <div class="flex justify-center items-center text-xs">
        <div class="w-[90%] my-[5%] font-500">
          <div class="flex flex-col col-span-3 gap-1 text-xs">
            Date: {{ reportDate }}
            <span> Time: {{ reportTime }} </span>
            <span class=""> From: {{ operatorName }}</span>
            To: {{ responderDepartment }}
          </div>
          <div class="border-b-2 border-gray-500 my-4"></div>
          <div class="font-bold my-[6%]">
            Subject Description:
            <div>
              <span class="font-500">{{ subjectDescription }}</span>
            </div>
          </div>
          <div class="font-bold my-[6%]">
            Type of Emergency:
            <div>
              <span class="font-500"> {{ typeOfEmergency }} </span>
            </div>
          </div>
          <div class="font-bold my-[6%]">
            Location:
            <div>
              <span class="font-500">{{ location }}</span>
            </div>
          </div>

          <div class="font-bold my-[6%]">
            Emergency Response Team:
            <div>
              <span class="font-500">{{ emergencyResponseTeam }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row w-[80%] gap-10 mt-10"><Buttons buttonName="Resend"/> <Buttons buttonName="Close"/></div>
    
  </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Buttons from './Buttons.vue';
  // Prop for controlling visibility from the parent component
  const props = defineProps({
    isVisible: Boolean
  });
  
  const emit = defineEmits(['update:isVisible']);
  
  // Method to close the modal
  function closeModal() {
    emit('update:isVisible', false);
  }
  </script>
  
  <style scoped>
  /* Add any additional styling for your modal here */
  </style>
  