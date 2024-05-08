<template>
  <div>
    <div
      class="flex items-center justify-center w-full h-[70px] rounded-xl border bg-gray-100 border-gray-200 shadow-[0_4px_4px_0px_rgba(0,0,0,0.20)] hover:scale-[1.02] p-2"
    >
      <div class="w-[18%] flex justify-center items-center">
        <div
          class="flex items-center justify-center bg-primary rounded-full h-12 w-12"
        >
          <!-- <mdicon class="text-white" name="fire" :width="30" :height="30" /> -->
          <img v-if="type==='Fire'" src="../assets/fire.svg" class="h-[30px]w-[30px] p-2"  alt="">
          <img v-if="type==='Flood'" src="../assets/flood.svg" class="h-[30px]w-[30px] p-2"  alt="">
          <img v-if="type==='Biohazard'" src="../assets/biohazard.svg" class="h-[30px]w-[30px] p-2"  alt="">
          <img v-if="type==='Injuries'" src="../assets/injuries.svg" class="h-[30px]w-[30px] p-2"  alt="">
          <img v-if="type==='Assault'" src="../assets/fire.svg" class="h-[30px]w-[30px] p-2"  alt="">
          <img v-if="type==='Other'" src="../assets/fire.svg" class="h-[30px]w-[30px] p-2"  alt="">
        </div>
      </div>
      <div class="w-[67%] ml-1 font-normal cursor-pointer">
        <div class="text-lg">{{ location }}</div>
        <div class="text-sm">{{ type }}</div>
      </div>
      <div class="w-[15%] h-full flex items-center font-medium text-[10px]">
        {{ time }}
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  location: String,
  buttonAlert: String,
  time:String,
  type:String,
});
</script>
