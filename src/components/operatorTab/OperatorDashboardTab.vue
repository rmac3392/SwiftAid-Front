<template>
  <div class="flex h-[87%] w-full">
    <div class="w-[100%] h-full pl-3 pr-5 pb-2 flex">
      <div class="w-[30%] h-full pl-3 pr-3 pb-3 bg-white rounded-lg">
        <div
          class="text-primary font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-xl flex text-center justify-center items-center my-7"
        >
          Emergency Departments
        </div>
        <Alert location="Pasil Cebu " />
        <Alert location="Cebu City " />
        <Alert location="Tejero Cebu" />
        <Alert location="Sanciangko Cebu " />
        <Alert location="Guadalupe Cebu" />
        <Alert location="Labangon Cebu " />
        <Alert location="Olango Lapu Lapu" />
      </div>

      <div class="w-[70%] h-[80%] pl-3">
        <div class="flex h-[15%] w-[100%] bg-white items-end rounded-lg mb-4">
          <div class="flex h-full w-[25%] text-primary flex-col">
            <div class="flex items-end justify-end mr-5 mt-3">
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
                Sent Reports
              </div>
            </div>
          </div>
          <div class="flex h-full w-[25%] text-primary flex-col">
            <div class="flex items-end justify-end mt-3">
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
                Cancelled Reports
              </div>
            </div>
          </div>
          <div class="flex h-full w-[25%] text-primary flex-col">
            <div class="flex items-end justify-end mr-6 mt-3">
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
                Acknowledge
              </div>
            </div>
          </div>
          <div class="flex h-full w-[25%] text-primary flex-col mr-5">
            <div class="flex items-end justify-end mr-10 mt-3">
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
                Pending
              </div>
            </div>
          </div>
        </div>
        <div class="w-[100%] h-[107%] bg-white rounded-lg flex">
          <EditReportPane />
          <div class="w-[100%]">
            <span
              class="text-primary font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-lg flex text-center my-5 ml-5"
              >Scenario Report</span
            >
            <div class="my-8">
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
            <Buttons buttonName1="Send" buttonName2="Discard" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Alert from "../../composables/Alert.vue";
import Notifications from "../../composables/Notifications.vue";
import ScenarioReport from "../../composables/ScenarioReport.vue";
import EditReportPane from "../operatorPane/EditReportPane.vue";
import Buttons from "../../composables/Buttons.vue";
</script>
