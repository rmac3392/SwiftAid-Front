<template>
  <div class="flex w-full h-[75%]">
    <div class="h-full w-[30%] pr-3">
      <div class="h-full bg-white w-full rounded-lg shadow-xl p-5">
        <div class="flex h-[5%] text-primary">
          <div
            :class="active == 0 ? 'active-tabs' : 'general-tabs'"
            @click="active = 0"
          >
            Operator
          </div>
          <div
            :class="active == 1 ? 'active-tabs' : 'general-tabs'"
            @click="active = 1"
          >
            E.R.U
          </div>
        </div>
        <!-- preview -->
        <OperatorFormPane v-if="active == 0" />
        <ERUFormPane v-else-if="active == 1" />
      </div>
    </div>
    <div class="h-full w-[70%] pl-2">
      <div class="h-full flex bg-white w-full rounded-lg shadow-xl"></div>
    </div>
  </div>
</template>
<script setup>
import OperatorFormPane from "../administratorPane/OperatorFormPane.vue";
import ERUFormPane from "../administratorPane/ERUFormPane.vue";
import { ref } from "vue";
const active = ref(0);
</script>
