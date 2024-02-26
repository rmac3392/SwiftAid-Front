<template>
  <div class="w-[100%] justify-center items-center flex gap-5">
    <button
      class="w-[25%] h-[2.7rem] bg-primary text-white rounded-lg font-semibold hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
      type="submit"
    >
      {{ buttonName1 }}
    </button>
    <button
      class="w-[25%] h-[2.7rem] bg-primary text-white rounded-lg font-semibold hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
      type="submit"
    >
      {{ buttonName2 }}
    </button>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  buttonName1: String,
  buttonName2: String,
});
</script>
