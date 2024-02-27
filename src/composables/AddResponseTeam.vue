<template>
  <button
    id="dropdownBgHoverButton"
    data-dropdown-toggle="dropdownBgHover"
    class="w-[100%] px-5 my-auto h-[2.7rem] bg-primary text-white rounded-lg font-semibold hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
    type="button"
  >
    Add
    <svg
      class="w-2.5 h-2.5 ms-3"
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
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>

  <!-- Dropdown menu -->
  <div
    id="dropdownBgHover"
    class="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700 max-h-[200px] overflow-y-auto"
  >
    <ul
      class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownBgHoverButton"
    >
      <li>
        <div
          class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <input
            id="checkbox-item-4"
            type="checkbox"
            value=""
            class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="checkbox-item-4"
            class="w-full ms-2 text-sm font-medium text-primary text-center rounded dark:text-gray-300"
            >Search and Rescue Group</label
          >
        </div>
      </li>
      <li>
        <div
          class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <input
            id="checkbox-item-5"
            type="checkbox"
            value=""
            class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="checkbox-item-5"
            class="w-full ms-2 text-sm font-medium text-primary text-center rounded dark:text-gray-300"
            >Fire Department</label
          >
        </div>
      </li>
      <li>
        <div
          class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <input
            id="checkbox-item-6"
            type="checkbox"
            value=""
            class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="checkbox-item-6"
            class="w-full ms-2 text-sm font-medium text-primary text-center rounded dark:text-gray-300"
            >Non Government Organization</label
          >
        </div>
      </li>
      <li>
        <div
          class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <input
            id="checkbox-item-6"
            type="checkbox"
            value=""
            class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="checkbox-item-6"
            class="w-full ms-2 text-sm font-medium text-primary text-center rounded dark:text-gray-300"
            >Private Sector</label
          >
        </div>
      </li>
      <li>
        <div
          class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <input
            id="checkbox-item-6"
            type="checkbox"
            value=""
            class="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          />
          <label
            for="checkbox-item-6"
            class="w-full ms-2 text-sm font-medium text-primary text-center rounded dark:text-gray-300"
            >Barangay Tanod</label
          >
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
