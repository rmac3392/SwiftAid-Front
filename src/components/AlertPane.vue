<template>
  <div class="w-[30%] h-full pl-3 pr-3 pb-3">
    <div class="w-full h-full bg-white rounded-lg shadow-xl p-5 overflow-auto space-y-3">
      <div for="" class="w-full text-lg font-bold text-primary">
          Alert :
        </div>
      <Alert />
      <Alert />
      <Alert />
      <Alert />
      <Alert />
      <Alert />
      <Alert />
    </div>
  </div>
</template>
<script setup>
import Alert from "../composables/Alert.vue";
</script>
