<template>
  <div class="flex bg-secondary h-screen w-screen">
    <div class="w-[20%] bg-primary h-screen"></div>
    <div class="w-[80%]">
      <div class="h-[13%] w-full p-5">
        <div class=" w-full h-full bg-white rounded-lg shadow-xl">
            
        </div>
      </div>
      <div class="flex h-[87%] w-full">
        <div class="w-[30%] h-full pl-5 pr-3 pb-5 ">
            <div class=" w-full h-full bg-white rounded-lg shadow-xl p-5 overflow-auto">
                  <Alert/>
                  <Alert/>
                  <Alert/>
                  <Alert/>
                  <Alert/>
                  <Alert/>
                  <Alert/>
                  <Alert/>
                  <Alert/>
                  <Alert/>
            </div>
        </div>
        <div class="w-[70%] h-full  pl-3 pr-5 pb-2">
            <div class="flex h-[15%] w-full pb-3 gap-6">
                <div class="h-full w-[25%] bg-white rounded-lg shadow-xl"></div>
                <div class="h-full w-[25%] bg-white rounded-lg shadow-xl"></div>
                <div class="h-full w-[25%] bg-white rounded-lg shadow-xl"></div>
                <div class="h-full w-[25%] bg-white rounded-lg shadow-xl"></div>
            </div>
            <div class="h-[85%] pt-3 w-full pb-3">
                <div class=" w-full h-full bg-white rounded-lg shadow-xl"></div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Alert from '../components/Alert.vue';
</script>
