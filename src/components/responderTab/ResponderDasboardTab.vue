<template>
  <div class="w-full">
    <div class="w-[100%] pl-3 pr-5 flex">
      <div class="w-[30%] pl-3 pr-3 pb-3">
        <Alert location="Pasil Fire Department" />
      </div>

      <div class="w-[60%] h-[635px] ml-3 bg-white rounded-lg shadow-xl">
        <div class="w-full text-lg font-bold text-black py-[1%] pl-5">
          Scenario Report :
        </div>
        <div class="pb-5">
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
        <div class="w-[80%] flex justify-center items-center mx-auto">
          <Buttons buttonName1="Acknowledge" buttonName2="Pending" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ScenarioReport from "../../composables/ScenarioReport.vue";
import Alert from "../../composables/Alert.vue";
import Buttons from "../../composables/Buttons.vue";
</script>
