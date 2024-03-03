<template>
  <div class="flex h-[87%] w-full">
    <div class="w-[100%] h-full pl-3 pr-5 pb-2 flex gap-2">
      <div
        class="w-[30%] h-full pl-3 pr-3 pb-3 bg-gray-100 border-2 border-white rounded-lg drop-shadow-lg"
      >
        <div
          class="text-primary font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-xl flex text-center justify-center items-center my-7"
        >
          Emergency Reports
        </div>
        <Alert location="Pasil Cebu " button-alert=" Details" />
        <Alert location="Cebu City " button-alert=" Details" />
        <Alert location="Tejero Cebu" button-alert=" Details" />
        <Alert location="Sanciangko Cebu " button-alert=" Details" />
        <Alert location="Guadalupe Cebu" button-alert=" Details" />
        <Alert location="Labangon Cebu " button-alert=" Details" />
        <Alert location="Olango Lapu Lapu" button-alert=" Details" />
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
                class="flex items-end justify-end w-[70%] mr-[-50%] mt-[-42%] absolute z-20"
              >
                <Notifications notif="8" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
                <mdicon
                  class="origin-center"
                  name="ProgressDownload"
                  :width="40"
                  :height="40"
                />
                <div
                  class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                >
                  Recieved
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
                class="flex items-end justify-end w-[60%] mr-[-55%] mt-[-37%] absolute z-20"
              >
                <Notifications notif="8" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
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
          </div>
          <div
            class="flex h-full w-[23%] text-primary flex-col gap-2 justify-center items-center"
          >
            <div
              class="bg-gray-100 py-5 rounded-lg border-2 border-white drop-shadow-lg px-5 ml-[-9%] justify-center items-center flex"
            >
              <div
                class="flex items-end justify-end w-[75%] mr-[-42%] mt-[-45%] absolute z-20"
              >
                <Notifications notif="8" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
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
          <div
            class="flex h-full w-[19%] text-primary flex-col gap-2 justify-center items-center"
          >
            <div
              class="bg-gray-100 py-5 rounded-lg border-2 border-white drop-shadow-lg px-8 ml-[-9%] justify-center items-center flex"
            >
              <div
                class="flex items-end justify-end w-[68%] mr-[-50%] mt-[-42%] absolute z-20"
              >
                <Notifications notif="8" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
                <mdicon
                  class="origin-center"
                  name="ProgressClose"
                  :width="40"
                  :height="40"
                />
                <div
                  class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                >
                  Unread
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[100%] h-[107%] rounded-lg flex bg-gray-100">
          <div
            class="w-[100%] border-2 border-white bg-gray-100 rounded-lg drop-shadow-lg"
          >
            <span
              class="text-primary font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-lg flex text-center my-5 ml-5"
              >Scenario Report</span
            >

            <div class="my-8 rounded-lg w-[40%] mx-auto">
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
              <div class="w-[30%]">
                <Buttons buttonName="Acknowledge" />
              </div>
              <div class="w-[30%]"><Buttons buttonName="Pending" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ScenarioReport from "../../composables/ScenarioReport.vue";
import Alert from "../../composables/Alert.vue";
import Buttons from "../../composables/Buttons.vue";
import Notifications from "../../composables/Notifications.vue";
</script>
