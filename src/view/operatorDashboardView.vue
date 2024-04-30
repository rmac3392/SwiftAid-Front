<template>
  <div class="flex h-full">
    <div
      class="bg-white h-full rounded-lg w-[28%] mr-3 p-5 overflow-auto space-y-5 shadow-lg"
    >
      <div class="font-semibold text-xl text-primary">Emergency Alert :</div>
      <testAlert />
      <testAlert />
      <testAlert />
      <testAlert />
      <testAlert />
      <testAlert />
      <testAlert />
      <testAlert />
    </div>
    <div class="h-full w-[72%] ml-2">
      <div class="flex h-[15%] pb-5 gap-5">
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
                Sent Reports
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
                Cancel Reports
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
                Acknowledged
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
                Pending Reports
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[85%]">
        <div class="h-full flex">
          <div class="w-1/2 h-full bg-white rounded-lg shadow-lg mr-3">
            <EditReportPane
              v-model:additionalDescription="additionalDescription"
              v-model:snr="snr"
              v-model:fire_department="fire_department"
              v-model:ngo="ngo"
              v-model:private_sector="private_sector"
              v-model:baranggay_tanod="baranggay_tanod"
              :postDetails="postDetails"
              :zipcode="postZipcode"
              :address="postAddress"
              :city="postCity"
              :emergency_type="postTypeOfEmergency"
              :emergency_team="postEmergencyTeam"
            />
          </div>
          <div class="w-1/2 h-full p-5 bg-white rounded-lg shadow-lg ml-2">
            <div for="" class="w-full text-lg font-semibold text-primary mb-2">
              Map :
            </div>
            <div class="h-[75%]">
              <div class="flex items-center justify-center h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.7727507333092!2d123.97775943645873!3d10.27627414471288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a990a651f06419%3A0x430493c25b84de00!2sStephen&#39;s%20Place!5e0!3m2!1sen!2sph!4v1712670503004!5m2!1sen!2sph"
                  class="w-[85%] h-full border-2 rounded-lg border-gray-400 shadow-[0_4px_4px_0px_rgba(0,0,0,0.20)]"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="flex flex-col mt-5 items-center justify-center">
                <button
                  class="w-[85%] h-12 bg-primary text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
                >
                  Send
                </button>
                <button
                  class="w-[85%] h-12 bg-primary text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
                >
                  Discard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import testAlert from "../testComposables/testAlert.vue";
import EditReportPane from "../components/operatorPane/EditReportPane.vue";
</script>
