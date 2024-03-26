<template>
  <div
    id="popup-modal1"
    tabindex="-1"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-[25%] max-h-full">
      <div class="relative bg-white rounded-lg shadow">
        <button
          type="button"
          class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          data-modal-hide="popup-modal1"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>

        <div class="md:p-5 text-center">
          <img
            src="../assets/ProfilePics/propayl.jpg"
            class="rounded-full w-[30%] h-[30%] mx-auto mt-3"
          />
          <div class="w-[90%]">
            <div class="w-[100%] h-[80%] my-[5%] mx-[5%]">
              <div class="flex justify-start items-start my-5">
                <div class="flex flex-row">
                  <div class="flex flex-row"></div>

                  <div></div>
                </div>
              </div>
              <form>
                <div class="flex justify-start items-start">
                  <label for="company" class="block mb-2 text-sm font-medium"
                    >First Name</label
                  >
                </div>

                <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      id="first_name"
                      class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="John"
                      required
                    />
                  </div>

                  <div class="mt-[-13%]">
                    <label
                      for="company"
                      class="mb-2 text-sm font-medium justify-start items-start flex"
                      >Last Name</label
                    >
                    <input
                      type="text"
                      id="last_name"
                      class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="Doe"
                      required
                    />
                  </div>

                  <div>
                    <div class="flex justify-start items-start">
                      <label for="phone" class="block mb-2 text-sm font-medium"
                        >Phone number</label
                      >
                    </div>

                    <input
                      type="tel"
                      id="phone"
                      class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="123-45-678"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                    />
                  </div>

                  <div>
                    <div class="flex justify-start items-start">
                      <label
                        for="visitors"
                        class="block mb-2 text-sm font-medium"
                        >Birth Date</label
                      >
                    </div>

                    <div class="relative max-w-sm">
                      <div
                        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                      >
                        <svg
                          class="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                          />
                        </svg>
                      </div>
                      <input
                        datepicker
                        datepicker-autohide
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="flex items-start justify-start gap-6 flex-row row-span-2"
                >
                  <div class="mb-6">
                    <div class="flex justify-start items-start">
                      <label for="email" class="block mb-2 text-sm font-medium"
                        >Email address</label
                      >
                    </div>

                    <input
                      type="email"
                      id="email"
                      class="bg-gray-50 border pr-8 border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      placeholder="john.doe@company.com"
                      required
                    />
                  </div>
                  <div
                    class="flex flex-col col-span-2 justify-start items-start"
                  >
                    <label for="Password" class="block mb-2 text-sm font-medium"
                      >New Password</label
                    >
                    <div class="mb-6">
                      <input
                        type="password"
                        id="password"
                        class="bg-gray-50 border pr-8 justify-start items-start border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="•••••••••"
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="flex row-span gap-10 w-[65%] mx-auto">
            <Buttons buttonName="Save" /> <Buttons buttonName="Discard" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Buttons from "./Buttons.vue";
import { ref, onMounted, computed } from "vue";

const userData = ref([]);

// Computed property to get the currently selected user data
const selectedUserData = computed(() => {
  return selectedUserIndex.value !== null
    ? userData.value[selectedUserIndex.value]
    : null;
});

import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>
