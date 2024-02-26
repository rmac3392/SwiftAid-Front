<template>
  <div class="w-[74.2%] p-[0.77rem]">
    <div class="h-full w-full bg-white rounded-lg shadow-xl text-primary p-5">
      <div class="flex h-[5%]">
        <div
          :class="active == 0 ? 'active-tabs' : 'general-tabs'"
          @click="active = 0"
        >
          Fire Department
        </div>
        <div
          :class="active == 1 ? 'active-tabs' : 'general-tabs'"
          @click="active = 1"
        >
          Emergency Medical Services
        </div>
        <div
          :class="active == 2 ? 'active-tabs' : 'general-tabs'"
          @click="active = 2"
        >
          Search and Rescue Teams
        </div>
        <div
          :class="active == 3 ? 'active-tabs' : 'general-tabs'"
          @click="active = 3"
        >
          Police Department
        </div>
        <div
          :class="active == 4 ? 'active-tabs' : 'general-tabs'"
          @click="active = 4"
        >
          Coast Guards
        </div>
      </div>
      <Transition name="fade" mode="out-in">
        >
        <FireDepartmentView v-if="active == 0" />
        <EmergencyMedicalView v-else-if="active == 1" />
        <SearchRescueView v-else-if="active == 2" />
        <PoliceDepartmentView v-else-if="active == 3" />
        <CoastGuardView v-else-if="active == 4" />
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import FireDepartmentView from "../../src/components/operatorView/FireDepartmentView.vue";
import EmergencyMedicalView from "../../src/components/operatorView/EmergencyMedicalView.vue";
import SearchRescueView from "../../src/components/operatorView/SearchRescueView.vue";
import PoliceDepartmentView from "../../src/components/operatorView/PoliceDepartmentView.vue";
import CoastGuardView from "../../src/components/operatorView/CoastGuardView.vue";
import { ref } from "vue";
const active = ref(0);
</script>
