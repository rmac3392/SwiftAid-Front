<template>
  <div>
    <div
      class="flex items-center w-full h-22 bg-white border-2 rounded-lg mb-4 border-gray-200 shadow-xl hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] hover:scale-[1.02] p-2"
    >
      <div class="w-[18%]">
        <div
          class="flex items-center justify-center bg-red-400 rounded-full h-16 w-16"
        >
          <mdicon class="text-white" name="fire" :width="58" :height="58" />
        </div>
      </div>
      <div class="w-[53%] text-center font-medium text-xl">
        <div>Balagtas Cebu City</div>
      </div>
      <div class="w-[29%] ">
        <button
          class="flex justify-center items-center h-11 w-full p-1 bg-primary text-white rounded-full font-semibold hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
        >
          <div class="mr-[1px]">
            <mdicon class="" name="pencil" :width="18" :height="18" />
          </div>
          Manage
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
