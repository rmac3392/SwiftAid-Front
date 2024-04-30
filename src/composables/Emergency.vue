<template>
  <div
    class="flex  justify-center items-center h-[30px] text-center w-[90px] text-sm  bg-secondary text-primary rounded-lg  font-semibold border-black border-2  "
  >
  {{ emergency }}
  </div>
</template>
<script setup>
defineProps({ emergency: String });
</script>
