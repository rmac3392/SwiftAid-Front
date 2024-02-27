<template>
  <div
    class="flex justify-center items-center bg-red-700 rounded-full w-[13%] h-[28px] text-white font-500"
  >
    {{ notif }}
  </div>
</template>

<script setup>
defineProps({
  notif: String,
});
</script>
