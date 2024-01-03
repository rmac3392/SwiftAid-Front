<template>
  <div class="flex bg-secondary h-screen w-screen">
    <div class="w-[20%] bg-primary h-screen">
      <div class="h-[25%] w-full flex items-center justify-center">
        <img class="w-80" src="../assets/SWIFTAID_+.png" alt="" />
      </div>
      <div
        class="h-[75%] w-full flex flex-col items-end text-3xl space-y-2 text-white font-medium"
      >
        <div
          class="hover:bg-secondary hover:text-primary w-[90%] pl-10 rounded-l-lg"
        >
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="view-dashboard" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Dashboard</div>
          </div>
        </div>

        <div
          class="hover:bg-secondary hover:text-primary w-[90%] pl-10 rounded-l-lg"
        >
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="chart-box" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Reports</div>
          </div>
        </div>

        <div
          class="hover:bg-secondary hover:text-primary w-[90%] pl-10 rounded-l-lg"
        >
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="help-box" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Help</div>
          </div>
        </div>

        <div
          class="hover:bg-secondary hover:text-primary w-[90%] pl-10 rounded-l-lg"
        >
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="logout" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Sign Out</div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[80%]">
      <div class="h-[13%] w-full p-5">
        <div class="w-full h-full bg-white rounded-lg shadow-xl"></div>
      </div>
      <div class="flex h-[87%] w-full">
        <div class="w-[100%] h-full pl-3 pr-5 pb-2 flex">
          <AlertPane />
          <div class="w-[70%] h-full pl-3">
            <div class="flex h-[15%] w-[100%] pb-3 gap-6 items-end">
              <div
                class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
              >
                <div class="flex items-center justify-center w-[40%] p-3">
                  <div class="bg-secondary w-full h-full rounded-md flex items-center justify-center">
                    <mdicon class="" name="close-thick" :width="55" :height="55" />
                  </div>
                </div>
                <div class="w-[60%] pl-1 pb-3 pt-6">
                  <div class="h-[50%] flex items-center font-semibold text-5xl ">2</div>
                  <div class="h-[50%] flex items-center">Cancel Reports</div>
                </div>
              </div>
              <div
                class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
              >
                <div class="flex items-center justify-center w-[40%] p-3">
                  <div class="bg-secondary w-full h-full rounded-md flex items-center justify-center">
                    <mdicon class="" name="send-variant" :width="55" :height="55" />
                  </div>
                </div>
                <div class="w-[60%] pl-1 pb-3 pt-6">
                  <div class="h-[50%] flex items-center font-semibold text-5xl ">8</div>
                  <div class="h-[50%] flex items-center">Send Reports</div>
                </div>
              </div>
              <div
                class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
              >
                <div class="flex items-center justify-center w-[40%] p-3">
                  <div class="bg-secondary w-full h-full rounded-md flex items-center justify-center">
                    <mdicon class="" name="receipt-clock" :width="55" :height="55" />
                  </div>
                </div>
                <div class="w-[60%] pl-1 pb-3 pt-6">
                  <div class="h-[50%] flex items-center font-semibold text-5xl ">3</div>
                  <div class="h-[50%] flex items-center">Pending</div>
                </div>
              </div>
              <div
                class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
              >
                <div class="flex items-center justify-center w-[40%] p-3">
                  <div class="bg-secondary w-full h-full rounded-md flex items-center justify-center">
                    <mdicon class="" name="check-bold" :width="55" :height="55" />
                  </div>
                </div>
                <div class="w-[60%] pl-1 pb-3 pt-6">
                  <div class="h-[50%] flex items-center font-semibold text-5xl ">5</div>
                  <div class="h-[50%] flex items-center">Acknowledge</div>
                </div>
              </div>
            </div>
            <EditReportPane />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import AlertPane from "../components/AlertPane.vue";
import EditReportPane from "../components/EditReportPane.vue";
import GraphPane from "../components/GraphPane.vue";
</script>
