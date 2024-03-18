<template>
  <div
    class="w-[20%] h-[18%] px-2 py-3 hover:shadow-[0_2px_2px_0px_rgba(0,0,0,0.70)] border-2 border-white bg-gray-100 drop-shadow-lg rounded-lg flex flex-row row-span-3"
  >
    <div class="flex row-span-1 justify-center items-center w-[35%]">
      <img
        src="../../assets/ProfilePics/propayl.jpg"
        class="rounded-full w-[80%] drop-shadow-2xl"
      />
    </div>
    <div class="w-[55%] font-500 ml-2">
      <p class="text-sm my-2">Michael Tonilon</p>
      <p class="text-sm">09770373926</p>
      <p class="drop-shadow-lg my-2 font-bold text-sm text-primary">
        System Operator
      </p>
    </div>

    <div class="flex row-span-3 justify-center items-start w-[10%]">
      <button
        id="dropdownDots "
        data-dropdown-toggle="dropdownDots"
        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg"
        type="button"
        s
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path
            d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        id="dropdownDots"
        class="z-10 hidden bg-white divide-gray-100 rounded-lg shadow w-[37%]"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDots"
        >
          <li>
            <a
              href="#"
              class="block px-2 py-2 hover:bg-gray-100 text-xs font-500 text-primary"
              >Edit Account</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-1 py-2 hover:bg-gray-100 text-xs font-500 text-red-700"
              >Delete Account</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import DottedDropdown from "./DottedDropdown.vue";
defineProps({
  userName: String,
  userContact: String,
  userRole: String,
});
import { onMounted } from "vue";

import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>
