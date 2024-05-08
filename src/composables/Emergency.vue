<template>
  <div
    class="flex justify-center items-center h-[30px] text-center  px-8 text-sm bg-secondary text-primary rounded-lg font-semibold border-black border-2 overflow-hidden whitespace-nowrap"
    :style="{ width: `${emergency.length * 9}px` }"
  >
    {{ emergency }}
  </div>
</template>

<script setup>
defineProps({ emergency: String });
</script>
