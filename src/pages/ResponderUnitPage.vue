<template>
  <div class="flex bg-secondary h-screen w-screen">
    <div class="w-[20%] bg-primary h-screen">
      <div class="h-[25%] w-full flex items-center justify-center">
        <img class="w-80" src="../assets/SWIFTAID_+.png" alt="" />
      </div>
      <div
        class="h-[75%] w-full flex flex-col items-end text-3xl space-y-2 text-white font-medium"
      >
        <div :class="tab === 0 ? 'active-tab' : 'general-tab'" @click="tab = 0">
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="view-dashboard" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Dashboard</div>
          </div>
        </div>

        <div :class="tab === 1 ? 'active-tab' : 'general-tab'" @click="tab = 1">
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon
                class=""
                name="account-multiple"
                :width="65"
                :height="65"
              />
            </div>
            <div class="flex items-center">Users</div>
          </div>
        </div>

        <div :class="tab === 2 ? 'active-tab' : 'general-tab'" @click="tab = 2">
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="help-box" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Help</div>
          </div>
        </div>

        <div :class="tab === 3 ? 'active-tab' : 'general-tab'" @click="tab = 3">
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="logout" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Sign Out</div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-[80%] p-5">
      <!-- User Information -->
      <div class="h-[11.5%] w-full pb-5">
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
                Responder Unit
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- User Information -->

      <!-- Count Total Departments -->
      <div class="flex h-[13.5%] w-full pb-5">
        <div class="w-[15%] h-full"></div>
        <div class="w-[85%] h-full flex gap-6 items-end">
          <!-- Each department -->
          <div
            class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
          >
            <div class="flex items-center justify-center w-[40%] p-3">
              <div
                class="bg-secondary w-full h-full rounded-md flex items-center justify-center"
              >
                <mdicon class="" name="fire-station" :width="45" :height="45" />
              </div>
            </div>
            <div class="w-[60%] pl-1 pb-3 pt-6">
              <div class="h-[50%] flex items-center font-semibold text-5xl">
                2
              </div>
              <div class="h-[50%] flex items-center text-ternary">
                Fire Department
              </div>
            </div>
          </div>
          <!-- Each department -->

          <!-- Each department -->
          <div
            class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
          >
            <div class="flex items-center justify-center w-[40%] p-3">
              <div
                class="bg-secondary w-full h-full rounded-md flex items-center justify-center"
              >
                <mdicon
                  class=""
                  name="police-station"
                  :width="45"
                  :height="45"
                />
              </div>
            </div>
            <div class="w-[60%] pl-1 pb-3 pt-6">
              <div class="h-[50%] flex items-center font-semibold text-5xl">
                2
              </div>
              <div class="h-[50%] flex items-center text-ternary">
                Department
              </div>
            </div>
          </div>
          <!-- Each department -->

          <!-- Each department -->
          <div
            class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
          >
            <div class="flex items-center justify-center w-[40%] p-3">
              <div
                class="bg-secondary w-full h-full rounded-md flex items-center justify-center"
              >
                <mdicon class="" name="close-thick" :width="45" :height="45" />
              </div>
            </div>
            <div class="w-[60%] pl-1 pb-3 pt-6">
              <div class="h-[50%] flex items-center font-semibold text-5xl">
                2
              </div>
              <div class="h-[50%] flex items-center text-ternary">
                Cancel Reports
              </div>
            </div>
          </div>
          <!-- Each department -->

          <!-- Each department -->
          <div
            class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
          >
            <div class="flex items-center justify-center w-[40%] p-3">
              <div
                class="bg-secondary w-full h-full rounded-md flex items-center justify-center"
              >
                <mdicon class="" name="close-thick" :width="45" :height="45" />
              </div>
            </div>
            <div class="w-[60%] pl-1 pb-3 pt-6">
              <div class="h-[50%] flex items-center font-semibold text-5xl">
                2
              </div>
              <div class="h-[50%] flex items-center text-ternary">
                Cancel Reports
              </div>
            </div>
          </div>
          <!-- Each department -->

          <!-- Each department -->
          <div
            class="flex h-full w-[25%] bg-white rounded-lg shadow-xl text-primary p-2"
          >
            <div class="flex items-center justify-center w-[40%] p-3">
              <div
                class="bg-secondary w-full h-full rounded-md flex items-center justify-center"
              >
                <mdicon class="" name="close-thick" :width="45" :height="45" />
              </div>
            </div>
            <div class="w-[60%] pl-1 pb-3 pt-6">
              <div class="h-[50%] flex items-center font-semibold text-5xl">
                2
              </div>
              <div class="h-[50%] flex items-center text-ternary">
                Cancel Reports
              </div>
            </div>
          </div>
          <!-- Each department -->
        </div>
      </div>
      <!-- Count Total Departments -->

      <!-- This is the admin dashbard page -->
      <AdminDashboardTab v-if="tab === 0" />
      <AdminUserTab v-else-if="tab === 1" />
      <AdminHelpTab v-else-if="tab === 2" />
      <AdminSignOutTab v-else-if="tab === 3" />
    </div>
  </div>
</template>

<script setup>
// import AlertPane from "../components/AlertPane.vue";
// import EditReportPane from "../components/EditReportPane.vue";
// import GraphPane from "../components/GraphPane.vue";
// import EditUserPane from "../components/EditUserPane.vue";
import AdminDashboardTab from "../components/administratorTab/AdminDashboardTab.vue";
import AdminUserTab from "../components/administratorTab/AdminUserTab.vue";
import AdminSignOutTab from "../components/administratorTab/AdminSignOutTab.vue";
import AdminHelpTab from "../components/administratorTab/AdminHelpTab.vue";
import { ref } from "vue";
const tab = ref(0);
</script>
