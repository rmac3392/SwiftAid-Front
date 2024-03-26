<template>
  <div
    class="flex justify-center items-center h-10 text-center w-[150px] text-sm py-5 bg-secondary text-primary rounded-lg mx-2 my-2 font-semibold border-black border-2 transition duration-300"
  >
    {{ department }}
  </div>
</template>
<script setup>
defineProps({ department: String });
</script>
