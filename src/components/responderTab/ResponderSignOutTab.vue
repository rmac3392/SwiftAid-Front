<template>
  <div class="flex h-[87%] w-full p-60 pr-96 pl-96 rounded-lg">
    <div class="h-full bg-white w-full rounded-lg shadow-xl p-5">
      <div class="w-full h-[45%] flex items-center justify-center mt-5">
        <img src="../../assets/SWIFTAID_logo.png" alt="" class="h-[10rem]" />
      </div>
      <div
        class="flex justify-center items-center text-4xl font-medium text-primary mt-5"
      >
        You are about to logout
      </div>
      <div class="flex items-center justify-center pt-8 gap-5 pr-10 pl-10">
        <button
          class="w-full h-12 bg-primary text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
          type="submit"
        >
          Cancel
        </button>
        <button
          class="w-full h-12 bg-primary text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
          type="submit"
        >
          Proceed
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
