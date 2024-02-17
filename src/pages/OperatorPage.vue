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
          :class="currenTab == 0 ? 'active-tab' : 'general-tab'"
          @click="currenTab = 0"
        >
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="view-dashboard" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Dashboard</div>
          </div>
        </div>

        <div
          :class="currenTab == 1 ? 'active-tab' : 'general-tab'"
          @click="currenTab = 1"
        >
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon
                class=""
                name="chart-bar-stacked"
                :width="65"
                :height="65"
              />
            </div>
            <div class="flex items-center">Reports</div>
          </div>
        </div>

        <div
          :class="currenTab == 2 ? 'active-tab' : 'general-tab'"
          @click="currenTab = 2"
        >
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon
                class=""
                name="text-box-multiple"
                :width="65"
                :height="60"
              />
            </div>
            <div class="flex items-center">Records</div>
          </div>
        </div>

        <div
          :class="currenTab == 3 ? 'active-tab' : 'general-tab'"
          @click="currenTab = 3"
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
        <div class="flex w-full h-full bg-white rounded-lg shadow-xl">
          <div class="w-[77%] p-3">
            <div
              class="w-[100%] h-full rounded-xl text-primary font-semibold text-4xl flex items-center justify-start"
            >
              Welcome Back, Ryan
            </div>
          </div>
          <div class="flex w-[23%]">
            <div class="w-[25%] flex items-center justify-end">
              <mdicon
                class="text-primary"
                name="account-circle"
                :width="70"
                :height="70"
              />
            </div>
            <div class="w-[75%]">
              <div
                class="pt-5 h-[50%] text-xl font-medium flex items-center justify-center text-primary"
              >
                <div>Macawili, Ryan James</div>
              </div>
              <div
                class="pb-5 h-[50%] text-l flex items-center justify-center text-primary"
              >
                Operator
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Current tab -->
      <Transition name="fade" mode="out-in">
        <OperatorDashboardTab v-if="currenTab == 0" />
        <OperatorReportTab v-else-if="currenTab == 1" />
        <OperatorRecordTab v-else-if="currenTab == 2" />
        <OperatorSignOutTab v-else-if="currenTab == 3" />
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import OperatorDashboardTab from "../components/operatorTab/OperatorDashboardTab.vue";
import OperatorRecordTab from "../components/operatorTab/OperatorRecordTab.vue";
import OperatorReportTab from "../components/operatorTab/OperatorReportTab.vue";
import OperatorSignOutTab from "../components/operatorTab/OperatorSignOutTab.vue";
const currenTab = ref(0);
</script>
