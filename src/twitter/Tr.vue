<template>
  <div class="w-full ">
    <div class="text-sm text-[#6a6f74] leading-5 flex">
      <div class="w-[92%]">{{ upper }}</div>
      <div class="w-[8%] flex items-end"><EllipsisHorizontalIcon class="h-7 w-7" /></div>
    </div>
    <div class="text-lg font-semibold leading-5">{{ middle }}</div>
    <div class="text-sm leading-5 text-[#6a6f74]">{{ lower }}</div>
  </div>
</template>
<script setup>
const { upper, middle, lower } = defineProps({
  upper: String,
  middle: String,
  lower: String,
});
import { EllipsisHorizontalIcon } from "@heroicons/vue/24/solid";
</script>
