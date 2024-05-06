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
              <mdicon class="" name="chart-box" :width="65" :height="65" />
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
              <mdicon class="" name="help-box" :width="65" :height="60" />
            </div>
            <div class="flex items-center">Help</div>
          </div>
        </div>

        <div
          :class="currentTab === 3 ? 'active-tab' : 'general-tab'"
          @click="showModal(); isClicked=true"
        >
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="logout-variant" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Sign Out</div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[80%]">
      <dialog v-if="isClicked==true" id="my_modal_3" class="modal" ref="myModal">
        <div class="modal-box">
          <form method="dialog">
            <button
              class="btn btn-md btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h1 class="font-bold text-xl">Sign Out</h1>
          <p class="py-4 text-center text-lg font-medium">
            Are you sure you want to sign out?
          </p>
          <div class="flex items-center justify-center">
            <button
              class="btn bg-primary text-white hover:bg-white hover:text-primary hover:border-primary"
              @click="logout"
            >
              Sign Out
            </button>
          </div>
        </div>
      </dialog>
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
                <div>{{ lastName }}, {{ firstName }}</div>
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

          <OperatorHelpTab v-else-if="currentTab === 2" />
          <!-- <OperatorSignOutTab v-else-if="currentTab === 3" /> -->
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

const isClicked = ref(false);

onMounted(() => {
  operatorAuth();
});

const auth = ref();
auth.value = localStorage.getItem("operatorAuth");

const router = useRouter();
const currentTab = ref(0);
const firstName = ref();
const lastName = ref();

const myModal = ref(null);

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

const showModal = () => {
  if (myModal.value) {
    myModal.value.showModal();
  }
};

const logout = () => {
  localStorage.clear();
  router.push("/");
}

onMounted(() => {
  showModal(); // Optionally show the modal on component mount
});
</script>
