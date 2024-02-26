<template>
  <div
    class="flex justify-center items-end bg-red-700 rounded-full w-[10%] text-white font-500"
  >
    {{ notif }}
  </div>
</template>

<script lang="ts" setup>
defineProps({
  notif: String,
});
</script>
