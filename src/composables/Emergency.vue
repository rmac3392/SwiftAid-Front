<template>
  <div
    class="flex justify-center items-center h-7 w-[150px] text-sm p-1 bg-secondary text-primary rounded-full font-semibold border-black border-2 transition duration-300"
  >
    {{ department }}
  </div>
</template>
<script setup>
defineProps({ department: String });
</script>
