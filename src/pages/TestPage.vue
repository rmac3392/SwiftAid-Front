<template>
  <div class="flex bg-secondary h-screen w-screen" v-if="auth">
    <div class="w-[20%] bg-primary h-screen">
      <div class="h-[25%] w-full flex items-center justify-center">
        <img class="w-80" src="../assets/SWIFTAID_+.png" alt="" />
      </div>
      <div
        class="h-[75%] w-full flex flex-col items-end text-3xl space-y-2 text-white font-medium"
      >
        <div
          :class="currentTab === 0 ? 'active-tab' : 'general-tab'"
          @click="currentTab = 0"
        >
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="view-dashboard" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Dashboard</div>
          </div>
        </div>

        <div
          :class="currentTab === 1 ? 'active-tab' : 'general-tab'"
          @click="currentTab = 1"
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
          :class="currentTab === 2 ? 'active-tab' : 'general-tab'"
          @click="currentTab = 2"
        >
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="ClipboardList" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Records</div>
          </div>
        </div>

        <div
          :class="currentTab === 3 ? 'active-tab' : 'general-tab'"
          @click="currentTab = 3"
        >
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon
                class=""
                name="MapMarkerQuestion"
                :width="65"
                :height="60"
              />
            </div>
            <div class="flex items-center">Help</div>
          </div>
        </div>

        <div
          :class="currentTab === 4 ? 'active-tab' : 'general-tab'"
          @click="currentTab = 4"
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
        <div class="flex w-full h-full bg-white rounded-lg shadow-lg">
          <div class="w-[77%] p-3"></div>
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
      <div class="pb-5 px-5 h-[87%]">
        <Transition name="fade" mode="out-in">
          <!-- <OperatorDashboardTab v-if="currentTab === 0" /> -->
          <operatorDashboardView v-if="currentTab === 0" />
          <!-- <OperatorReportTab v-else-if="currentTab === 1" /> -->
          <operatorReportView v-else-if="currentTab === 1" />
          <OperatorRecordTab v-else-if="currentTab === 2" />
          <OperatorHelpTab v-else-if="currentTab === 3" />
          <OperatorSignOutTab v-else-if="currentTab === 4" />
        </Transition>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center items-center h-48">
    <div
      class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"
    ></div>
    <div class="ml-4 text-purple-500">Loading...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import OperatorDashboardTab from "../components/operatorTab/OperatorDashboardTab.vue";
import OperatorRecordTab from "../components/operatorTab/OperatorRecordTab.vue";
import OperatorReportTab from "../components/operatorTab/OperatorReportTab.vue";
import OperatorSignOutTab from "../components/operatorTab/OperatorSignOutTab.vue";
import OperatorHelpTab from "../components/operatorTab/OperatorHelpTab.vue";

import operatorDashboardView from "../view/operatorDashboardView.vue";
import operatorReportView from "../view/operatorReportView.vue";
import { useRouter } from "vue-router";

onMounted(() => {
  operatorAuth();
});

const auth = ref();
auth.value = localStorage.getItem("operatorAuth");

const router = useRouter();
const currentTab = ref(0);
const firstName = ref();
const lastName = ref();

const operatorAuth = async () => {
  const operator = localStorage.getItem("operatorAuth");
  if (!operator) {
    router.push("/");
  }
  const response = await fetch(`http://localhost:8080/getOperator`);
  const data = await response.json();

  for (var i = 0; i < data.length; i++) {
    if (localStorage.getItem("operator_userId") == data[i].user_id) {
      firstName.value = data[i].first_name;
      lastName.value = data[i].last_name;

      localStorage.setItem(
        `currentOperator`,
        `${firstName.value} ${lastName.value}`
      );

      break;
    }
  }
};
</script>
