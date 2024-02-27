<template>
  <div class="flex h-[87%] w-full">
    <div class="w-[100%] h-full pl-3 pr-5 pb-2 flex gap-2">
      <div
        class="w-[30%] h-full pl-3 pr-3 pb-3 bg-gray-100 border-2 border-white rounded-lg drop-shadow-lg ml-2"
      >
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
        <div
          class="flex h-[15%] w-[100%] items-end rounded-lg mb-4 drop-shadow-lg gap-6 ml-[-1%]"
        >
          <div
            class="flex h-full w-[25%] text-primary flex-col justify-center items-center"
          >
            <div
              class="bg-gray-100 py-5 rounded-lg border-2 border-white drop-shadow-lg px-6 justify-center items-center flex"
            >
              <div
                class="flex items-end justify-end w-[100%] mr-[-13%] mt-[-36%] absolute z-20"
              >
                <Notifications notif="8" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
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
          </div>
          <div
            class="flex h-full w-[26%] text-primary flex-col gap-2 justify-center items-center"
          >
            <div
              class="bg-gray-100 py-5 rounded-lg border-2 border-white drop-shadow-lg px-4 ml-[-9%] justify-center items-center flex"
            >
              <div
                class="flex items-end justify-end w-[85%] mr-[-26%] mt-[-32%] absolute z-20"
              >
                <Notifications notif="8" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
                <mdicon
                  class="origin-center"
                  name="ProgressUpload"
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
          </div>
          <div
            class="flex h-full w-[23%] text-primary flex-col gap-2 justify-center items-center"
          >
            <div
              class="bg-gray-100 py-5 rounded-lg border-2 border-white drop-shadow-lg px-5 ml-[-9%] justify-center items-center flex"
            >
              <div
                class="flex items-end justify-end w-[100%] mr-[-12%] mt-[-36%] absolute z-20"
              >
                <Notifications notif="8" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
                <mdicon
                  class="origin-center"
                  name="ProgressUpload"
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
          </div>
          <div
            class="flex h-full w-[19%] text-primary flex-col gap-2 justify-center items-center"
          >
            <div
              class="bg-gray-100 py-5 rounded-lg border-2 border-white drop-shadow-lg px-8 ml-[-9%] justify-center items-center flex"
            >
              <div
                class="flex items-end justify-end w-[115%] mr-[-1%] mt-[-42%] absolute z-20"
              >
                <Notifications notif="8" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
                <mdicon
                  class="origin-center"
                  name="ProgressUpload"
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
        </div>
        <div class="w-[100%] h-[107%] rounded-lg flex bg-gray-100">
          <EditReportPane />
          <div
            class="w-[100%] border-2 border-white bg-gray-100 rounded-r-lg drop-shadow-lg"
          >
            <span
              class="text-primary font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-lg flex text-center my-5 ml-5"
              >Scenario Report</span
            >

            <div class="my-8 rounded-lg w-[70%] mx-auto">
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
              class="flex flex-row justify-center items-center w-[50%] gap-10 mx-auto"
            >
              <div class="w-[50%]">
                <Buttons buttonName="Send" />
              </div>
              <div class="w-[50%]"><Buttons buttonName="Discard" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Alert from "../../composables/Alert.vue";
import Notifications from "../../composables/Notifications.vue";
import ScenarioReport from "../../composables/ScenarioReport.vue";
import EditReportPane from "../operatorPane/EditReportPane.vue";
import Buttons from "../../composables/Buttons.vue";
</script>
