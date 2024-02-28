<template>
  <div
    class="flex justify-center items-center rounded-full w-[25%] h-[30px] bg-[#ddd3dd] text-white font-500"
  >
    <div class="w-[80%] h-[85%] flex justify-center items-center">
      <span
        class="bg-red-700 w-[95%] h-[80%] flex justify-center items-center rounded-full"
        >{{ notif }}</span
      >
    </div>
  </div>
</template>

<script setup>
defineProps({
  notif: String,
});
</script>
