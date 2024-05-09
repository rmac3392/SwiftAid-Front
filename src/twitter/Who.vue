<template>
    <div
      class="bg-[#202127] h-auto w-full rounded-2xl flex mt-2 p-5 text-xl text-white"
    >
    <div class="space-y-5">
      <div class="font-extrabold text-xl ">Who to follow</div>
      <People upper="Trending in the Philippines" middle="#SHKiller" lower="9,895 posts"/>
      <People upper="Music · Trending" middle="GUSTO NA KITA EH" lower="8,924 posts"/>
      <People upper="Trending in Philippines" middle="SKYBET MOMENT OF TRUTH" lower="9,827 posts"/>

      <div class="text-[#0089f4] text-sm">Show more</div>
    </div>
    </div>
  </template>
  <script setup>
  import People from './People.vue';
</script>
  