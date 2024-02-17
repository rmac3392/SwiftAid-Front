<template>
  <div class="flex h-[87%] w-full p-24 pl-32 pr-32 rounded-lg ">
    <div class="h-full flex bg-white w-full rounded-lg shadow-xl">
      <div class="w-[10%] flex h-full bg-primary rounded-lg">
        <div class="w-[90%] bg-primary h-full rounded-lg pt-32 pb-32 text-white">
          <div class="h-1/4 flex items-center justify-center"> <mdicon class="" name="arrow-right-drop-circle" :width="57.5" :height="57.5" /></div>
          <div class="flex items-center justify-center h-1/4 "> <mdicon class="" name="clipboard-account" :width="57.5" :height="57.5" /> </div>
          <div class="flex items-center justify-center h-1/4"> <mdicon class="" name="cog" :width="57.5" :height="57.5" /></div>
          <div class="flex items-center justify-center h-1/4"><mdicon class="" name="update" :width="57.5" :height="57.5" /></div>
        </div>
        <div class="w-[3%] bg-white h-full"></div>
        <div class="w-[7%] bg-primary"></div>
      </div>
      <div class="w-[90%] h-full bg-white rounded-lg pt-7 pb-32 text-primary font-bold text-5xl ">
        <div class="flex items-center justify-start h-1/5 ml-5 mr-5">SwiftAid Help Center</div>
        <div class="flex items-center justify-start h-1/5 pl-5 pr-5 hover:bg-secondary cursor-pointer"> Getting Started</div>
        <div class="flex items-center justify-start h-1/5 pl-5 pr-5 hover:bg-secondary cursor-pointer"> Contact Us</div>
        <div class="flex items-center justify-start h-1/5 pl-5 pr-5 hover:bg-secondary cursor-pointer">Options</div>
        <div class="h-1/5 flex items-center justify-start pl-5 pr-5 hover:bg-secondary cursor-pointer"> Check for updates</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
