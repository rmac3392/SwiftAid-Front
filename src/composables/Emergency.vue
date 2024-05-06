<template>
  <div
    class="flex justify-center items-center h-[30px]  text-center text-sm bg-secondary text-primary rounded-lg font-semibold border-black border-2 overflow-hidden whitespace-nowrap"
  >
    {{ emergency }}
  </div>
</template>

<script setup>
defineProps({ emergency: String });
</script>
