<template>
  <div class="flex items-center justify-center w-full h-[72%] flex-col">
    <div
      class="bg-gray border-white border-2 w-[70%] h-[500px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] drop-shadow-lg rounded-lg"
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
  </div>
</template>
<script lang="ts" setup>
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
</script>
