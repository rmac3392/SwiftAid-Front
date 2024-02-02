<template>
    <div class="flex h-[87%] w-full ">
        <div class="w-[100%] h-full pl-3 pr-5 pb-2 flex">
          <AlertPane />
          
          <div class="w-[70%] h-full pl-3">
            <div class="flex h-[15%] w-[100%] pb-3 gap-6 items-end">
              <div
                class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
              >
                <div class="flex items-center justify-center w-[40%] p-3">
                  <div class="bg-secondary w-full h-full rounded-md flex items-center justify-center">
                    <mdicon class="" name="close-thick" :width="45" :height="45" />
                  </div>
                </div>
                <div class="w-[60%] pl-1 pb-3 pt-6">
                  <div class="h-[50%] flex items-center font-semibold text-5xl ">2</div>
                  <div class="h-[50%] flex items-center text-ternary">Cancel Reports</div>
                </div>
              </div>
              <div
                class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
              >
                <div class="flex items-center justify-center w-[40%] p-3">
                  <div class="bg-secondary w-full h-full rounded-md flex items-center justify-center">
                    <mdicon class="" name="send-variant" :width="45" :height="45" />
                  </div>
                </div>
                <div class="w-[60%] pl-1 pb-3 pt-6">
                  <div class="h-[50%] flex items-center font-semibold text-5xl ">8</div>
                  <div class="h-[50%] flex items-center text-ternary">Send Reports</div>
                </div>
              </div>
              <div
                class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
              >
                <div class="flex items-center justify-center w-[40%] p-3">
                  <div class="bg-secondary w-full h-full rounded-md flex items-center justify-center">
                    <mdicon class="" name="receipt-clock" :width="45" :height="45" />
                  </div>
                </div>
                <div class="w-[60%] pl-1 pb-3 pt-6">
                  <div class="h-[50%] flex items-center font-semibold text-5xl ">3</div>
                  <div class="h-[50%] flex items-center text-ternary">Pending</div>
                </div>
              </div>
              <div
                class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
              >
                <div class="flex items-center justify-center w-[40%] p-3">
                  <div class="bg-secondary w-full h-full rounded-md flex items-center justify-center">
                    <mdicon class="" name="check-bold" :width="45" :height="45" />
                  </div>
                </div>
                <div class="w-[60%] pl-1 pb-3 pt-6">
                  <div class="h-[50%] flex items-center font-semibold text-5xl ">5</div>
                  <div class="h-[50%] flex items-center text-ternary">Acknowledge</div>
                </div>
              </div>
            </div>
            <EditReportPane />
          </div>
        </div>
      </div>
</template>

<script setup>
import AlertPane from "../AlertPane.vue";
import EditReportPane from "../EditReportPane.vue";
</script>