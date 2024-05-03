<template>
  <div class="flex h-[87%] w-full">
    <div class="w-[100%] h-full pb-4 flex space-x-5 mt-5">
      <div
        class="w-[33%] h-full pl-3 pr-3 pb-3 bg-gray-100 border-2 border-white rounded-lg"
      >
        <div
          class="text-primary font-bold text-2xl flex text-center justify-center items-center mt-7 mb-8"
        >
          EMERGENCY REPORTS
        </div>
        <!-- <Alert location="Pasil Cebu " button-alert=" Details" />
        <Alert location="Cebu City " button-alert=" Details" />
        <Alert location="Tejero Cebu" button-alert=" Details" />
        <Alert location="Sanciangko Cebu " button-alert=" Details" />
        <Alert location="Guadalupe Cebu" button-alert=" Details" />
        <Alert location="Labangon Cebu " button-alert=" Details" />
        <Alert location="Olango Lapu Lapu" button-alert=" Details" /> -->
        <div class="space-y-5 w-[95%] mx-auto">
          <TestAlert
            location="Sanciangko Cebu City"
            buttonAlert=""
            time="3:00PM"
            type="Fire Incident"
          />
          <TestAlert
            location="Mabolo Cebu City"
            buttonAlert=""
            time="3:00PM"
            type="Fire Incident"
          />
          <TestAlert
            location="Labangon Cebu City"
            buttonAlert=""
            time="3:00PM"
            type="Fire Incident"
          />
          <TestAlert
            location="Labangon Cebu City"
            buttonAlert=""
            time="3:00PM"
            type="Fire Incident"
          />
          <TestAlert
            location="Labangon Cebu City"
            buttonAlert=""
            time="3:00PM"
            type="Fire Incident"
          />
          <TestAlert
            location="Labangon Cebu City"
            buttonAlert=""
            time="3:00PM"
            type="Fire Incident"
          />
          <TestAlert
            location="Labangon Cebu City"
            buttonAlert=""
            time="3:00PM"
            type="Fire Incident"
          />
        </div>
      </div>

      <div class="w-[33%] h-[93.5%]">
        <div class="w-[100%] h-[107%] rounded-lg flex bg-gray-100 flex-col">
          <div
            class="text-primary font-bold text-2xl flex text-center justify-center mx-auto mt-8 mb-6"
          >
            EMERGENCY DETAILS
          </div>
          <div class="">
            <div class="h-[100%] w-[92%] mx-auto">
              <div class="w-full h-[560px] p-2 font-serif">
                <div
                  class="bg-white h-[100%] drop-shadow-lg shadow-lg py-8 px-10"
                >
                  <div class="h-[20%] flex">
                    <div
                      class="h-full w-[22%] flex items-center justify-center"
                    >
                      <img src="../../assets/ndrmc.png" alt="" />
                    </div>
                    <div
                      class="h-full w-[56%] text-[0.55rem] flex flex-col items-center font-medium justify-center gap-1"
                    >
                      <div class="leading-[0.58rem]">
                        Republic of the Philippines
                      </div>
                      <div class="leading-[0.58rem]">N.D.R.R.M.C</div>
                      <div class="leading-[0.58rem]">SWIFTAID</div>
                      <div class="leading-[0.58rem] font-bold">
                        EMERGENCY DISPATCH CENTER
                      </div>
                      <div class="leading-[0.58rem]">Cebu City</div>
                    </div>
                    <div
                      class="h-full w-[22%] flex justify-center items-center"
                    >
                      <img
                        src="../../assets/SWIFTAID_logo.png"
                        alt=""
                        width="48"
                      />
                    </div>
                  </div>
                  <div class="h-[30%] text-[0.60rem] mt-3">
                    <div class="font-bold ml-2">INCIDENT REPORT</div>
                    <div class="pl-8 font-medium space-y-1">
                      <div class="flex">
                        <div class="w-[100%] mt-2">EMERGENCY TYPE</div>
                        <div class="w-[20%] text-center">:</div>
                        <div class="w-[50%]">{{ emergency }}</div>
                      </div>
                      <div class="flex">
                        <div class="w-[30%]">RESPONDER</div>
                        <div class="w-[20%] text-center">:</div>
                        <div class="w-[50%]">
                          {{ responder }} Bureau of Fire Protection
                        </div>
                      </div>
                      <div class="flex">
                        <div class="w-[30%]">OPERATOR</div>
                        <div class="w-[20%] text-center">:</div>
                        <div class="w-[50%]">{{ operator }} Ryan Macawili</div>
                      </div>
                      <div class="flex">
                        <div class="w-[30%]">DATE</div>
                        <div class="w-[20%] text-center">:</div>
                        <div class="w-[50%]">{{ date }}</div>
                      </div>
                      <div class="flex">
                        <div class="w-[30%]">TIME</div>
                        <div class="w-[20%] text-center">:</div>
                        <div class="w-[50%]">{{ time }}</div>
                      </div>
                    </div>
                    <hr class="border border-gray-800 mt-3" />
                  </div>
                  <div
                    class="h-[40%] pt-5 pl-3 font-medium text-xs text-justify"
                  >
                    <div class="leading-3 text-[0.68rem]">
                      1. {{ firstDetails }} Lorem ipsum dolor sit amet
                      consectetur, adipisicing elit. Dolore, dignissimos.
                    </div>
                    <br />
                    <div class="leading-3 text-[0.68rem]">
                      2. {{ secondDetails }} Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Amet, voluptate.
                    </div>
                    <br />
                    <div class="leading-3 text-[0.68rem]">
                      3. {{ thirdDetails }} Lorem, ipsum dolor sit amet
                      consectetur adipisicing elit. Repudiandae, esse.
                    </div>
                  </div>
                  <div class="h-[10%] font-medium text-[0.60rem]">
                    <div class="leading-[0.60rem] text-end font-bold">
                      {{ operator }} Ryan Macawili
                    </div>
                    <div class="leading-[0.60rem] text-end">
                      Dispatch Operator
                    </div>
                  </div>
                </div>
                <div class="flex-row flex justify-center gap-10 mt-[10%]">
                  <div class="flex items-center justify-center">
                    <button
                      class="btn bg-white text-primary hover:bg-primary hover:text-white border-primary px-10"
                    >
                      Dismiss
                    </button>
                  </div>
                  <div class="flex items-center justify-center">
                    <button
                      class="btn bg-primary text-white hover:bg-white hover:text-primary hover:border-primary px-6"
                    >
                      Acknowledge
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[33%] h-[93.5%]">
        <div class="w-[100%] h-[107%] rounded-lg flex bg-gray-100 flex-col">
          <div
            class="text-primary font-bold text-2xl flex text-center justify-center my-8 mx-auto"
          >
            EMERGENCY LOCATION
          </div>
          <div>
            <div class="h-[545px]">
              <div class="flex items-center justify-center h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.7727507333092!2d123.97775943645873!3d10.27627414471288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a990a651f06419%3A0x430493c25b84de00!2sStephen&#39;s%20Place!5e0!3m2!1sen!2sph!4v1712670503004!5m2!1sen!2sph"
                  class="w-[90%] h-full border-2 rounded-lg border-gray-400 shadow-[0_4px_4px_0px_rgba(0,0,0,0.20)]"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="flex flex-col mt-7 items-center justify-center">
                <div class="flex items-center justify-center mt-3">
                  <button
                    class="btn bg-primary text-white hover:bg-white hover:text-primary hover:border-primary px-6"
                  >
                    View Map
                  </button>
                </div>
              </div>
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
import TestAlert from "../../testComposables/testAlert.vue";
</script>
