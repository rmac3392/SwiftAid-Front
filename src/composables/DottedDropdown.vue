<template>
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
      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDots"
      >
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Edit Account</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >Delete Account</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>
