<template>
  <div class="h-screen w-screen bg-[#011137]">
    <div class="flex justify-center items-center">
      <span class="flex justify-center items-center w-[15%] mt-[7%] mb-[]"
        ><img src="../assets/SWIFTAID_logo.png"
      /></span>
    </div>
    <div
      class="flex justify-center items-center flex-col text-white text-center gap-y-10"
    >
      <p class="my-[2%]">
        Enter the email address associated with your account and <br />
        we’ll send you a link to reset your password.
      </p>
      <div class="flex flex-col col-span-2">
        <label
          for="input-group-1"
          class="mb-2 text-sm font-medium text-white flex justify-start"
          >Your Email</label
        >
        <div class="relative mb-6">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path
                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
              />
              <path
                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="input-group-1"
            class="bg-gray-50 border font-500 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full px-10 ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@gmail.com"
          />
        </div>
        <div class="w-[50%] mx-auto mb-[10%] mt-[2%]">
          <button
            class="w-[100%] px-2 h-[2.7rem] bg-[#13449c] text-white rounded-lg font-semibold hover:bg-blue-600 hover:text-black hover:border-primary border-primary border-2 transition duration-300"
            type="submit"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row row-span-3 gap-10 justify-center items-center text-white font-500 mt-[12%]"
    >
      <h2 class="hover:text-[#13449c] hover:underline hover:cursor-pointer">
        SwiftAid+
      </h2>
      <h2 class="hover:text-[#13449c] hover:underline hover:cursor-pointer">
        Contact
      </h2>
      <h2 class="hover:text-[#13449c] hover:underline hover:cursor-pointer">
        Privacy and Terms
      </h2>
    </div>
  </div>
</template>

<script setup>
import Buttons from "../composables/Buttons.vue";
</script>
