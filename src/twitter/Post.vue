<template>
  <div class="flex h-auto w-full p-[0.7rem] border-b-2 border-[#0e1110]">
    <div class="w-[11%] ">
      <div class="h-12 rounded-full  flex justify-start items-center">
        <!-- profile -->
        <img src="../assets/pp.jpg" class="rounded-full h-11 " alt="" />
      </div>

      <!--  -->
      <div class=""></div>
    </div>
    <div class=" w-[89%] ">
      <div class="h-7 w-full flex items-center space-x-2">
        <div class="font-semibold text-white w-auto text-nowrap">CDN Digital</div>
        <div class="text-sm text-[#6b6e75] w-auto text-nowrap">@cebudailynews</div>
        
        <div class="text-sm text-[#6b6e75] w-auto text-nowrap">. 1h</div>
        <div class="flex justify-end w-full">
          <mdicon
            name="dots-horizontal"
            width="20"
            height="20"
            class="text-[#6b6e75]"
          />
        </div>
      </div>
      <div class="h-auto text-white mb-3">
        {{ props.post }}
      </div>
      <div class="h-auto ">
        <!-- <img src="../assets/news.jpeg" alt="" class="rounded-3xl border-2 border-[#0e1110]" /> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
const props = defineProps(['post']);

</script>
