<template>
  <div>
    <div
      class="flex items-center justify-center w-full h-[70px] rounded-xl border bg-gray-100 border-gray-200 shadow-[0_4px_4px_0px_rgba(0,0,0,0.20)] hover:scale-[1.02] p-2"
    >
      <div class="w-[18%] flex justify-center items-center">
        <div
          class="flex items-center justify-center bg-primary rounded-full h-12 w-12"
        >
          <mdicon class="text-white" name="fire" :width="30" :height="30" />
        </div>
      </div>
      <div class="w-[67%] ml-1 font-normal cursor-pointer">
        <div class="text-lg">Lapu Lapu City, Masiwa</div>
        <div class="text-sm">Fire Incident</div>
      </div>
      <div class="w-[15%] h-full flex items-center font-medium text-[10px]">
        3:00 pm
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  location: String,
  buttonAlert: String,
});
</script>
