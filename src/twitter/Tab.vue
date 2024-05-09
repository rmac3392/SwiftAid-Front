<template>
  <div class="flex w-full h-10">
    <div class="w-[20%] h-full">
      <!-- <HomeIcon class="h-12 w-12 text-white"/> -->
      <mdicon :name="icon" width="40" height="40" class="text-white" />
    </div>
    <div class="w-[80%] text-white text-2xl font-base p-2 pl-3">{{ name }}</div>
  </div>
</template>
<script setup>
const { name,icon } = defineProps(["name", "icon"  ]);
</script>
