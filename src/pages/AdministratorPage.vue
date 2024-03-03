<template>
  <div class="flex bg-secondary h-screen w-screen">
    <div class="w-[20%] bg-primary h-screen">
      <div class="h-[25%] w-full flex items-center justify-center">
        <img class="w-80" src="../assets/SWIFTAID_+.png" alt="" />
      </div>
      <div
        class="h-[75%] flex flex-col items-center text-3xl space-y-2 text-white font-medium"
      >
        <div id="accordion-collapse" data-accordion="collapse">
          <div id="accordion-collapse-heading-1">
            <div></div>
            <div
              class="cursor-pointer flex items-center justify-between p-2 font-medium gap-5 bg-primary hover:bg-secondary hover:text-primary"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <mdicon
                class=""
                name="AccountMultiplePlus"
                :width="65"
                :height="65"
              />
              <span class="text-white text-2xl px-7 hover:text-primary"
                >Add Users</span
              >
              <svg
                data-accordion-icon
                class="w-5 h-5 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </div>
          </div>
          <div
            id="accordion-collapse-body-1"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div
              class="font-500 text-lg flex justify-start items-start flex-col col-span-2 mr-[-25%]"
            >
              <div
                :class="tab === 0 ? 'active-tab' : 'general-tab'"
                @click="tab = 0"
                class="rounded-lg my-3 py-2"
              >
                <span
                  class="flex justify-center items-center flex-row row-span gap-5 mx-auto mr-10 ml-[-10%]"
                  ><mdicon
                    class=""
                    name="AccountPlus"
                    :width="30"
                    :height="30"
                  />
                  <p class="cursor-pointer items-center justify-center flex">
                    System Operator
                  </p></span
                >
              </div>
              <div
                :class="tab === 1 ? 'active-tab' : 'general-tab'"
                @click="tab = 1"
                class="rounded-lg mb-3 py-2"
              >
                <span
                  class="flex justify-center items-center flex-row row-span mx-auto ml-[-10%] gap-2"
                  ><mdicon
                    class=""
                    name="PoliceBadge"
                    :width="30"
                    :height="30"
                  />
                  <p
                    class="cursor-pointer items-center justify-center flex text-lg"
                  >
                    Emergency Responder
                  </p></span
                >
              </div>
            </div>
          </div>
        </div>

        <div id="accordion-collapse-2" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-2">
            <div
              class="cursor-pointer flex items-center justify-between p-2 font-medium border gap-5 bg-primary"
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-2"
            >
              <mdicon class="" name="ShieldHalfFull" :width="65" :height="65" />
              <span class="text-white text-2xl">Manage Users</span>
              <svg
                data-accordion-icon
                class="w-5 h-5 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </div>
          </h2>
          <div
            id="accordion-collapse-body-2"
            class="hidden"
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div
              class="border font-500 text-lg flex justify-center items-center flex-col col-span-2"
            >
              <div
                :class="tab === 2 ? 'active-tab' : 'general-tab'"
                @click="tab = 2"
                class="rounded-lg my-3 py-2"
              >
                <p class="mb-2 cursor-pointer">System Operator</p>
              </div>
              <div
                :class="tab === 3 ? 'active-tab' : 'general-tab'"
                @click="tab = 3"
                class="rounded-lg mb-3 py-2"
              >
                <p class="cursor-pointer">Emergency Responder</p>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="tab === 4 ? 'active-tab' : 'general-tab'"
          @click="tab = 4"
          class="my-5"
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

    <div class="w-[80%] p-5">
      <!-- User Information -->
      <div class="h-[11.5%] w-full pb-5">
        <div class="flex w-full h-full bg-white rounded-lg shadow-xl">
          <div class="w-[77%] p-3">
            <div
              class="w-[100%] h-full rounded-xl text-primary font-semibold text-4xl flex items-center justify-start"
            >
              Welcome Back, Paul
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
                <div>Sedigo, Paul Adrian</div>
              </div>
              <div
                class="pb-5 h-[50%] text-l flex items-center justify-center text-primary"
              >
                Administrator
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdminAddSystOperator v-if="tab === 0" />
      <AdminAddRespoUnit v-else-if="tab === 1" />
      <AdminManageSysOperator v-else-if="tab === 2" />
      <AdminManageRespoUnit v-else-if="tab === 3" />
      <AdminSignOutTab v-else-if="tab === 4" />
    </div>
  </div>
</template>

<script setup>
import AdminAddSystOperator from "../components/administratorTab/AdminAddSystOperator.vue";
import AdminAddRespoUnit from "../components/administratorTab/AdminAddRespoUnit.vue";
import AdminManageRespoUnit from "../components/administratorTab/AdminManageRespoUnit.vue";
import AdminManageSysOperator from "../components/administratorTab/AdminManageSysOperator.vue";
import AdminSignOutTab from "../components/administratorTab/AdminSignOutTab.vue";
import { ref } from "vue";
const tab = ref(0);
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
