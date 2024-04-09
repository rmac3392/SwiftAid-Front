<template>
  <div class="h-full w-[100%]">
    <div class="flex w-full h-full">
      <div class="w-full space-y-2 p-5">
        <div for="" class="w-full text-lg font-semibold text-primary">
          Post Details :
        </div>
        <div
          class="bg-white w-full h-[12%] border-2 rounded-lg mb-4 border-gray-400 px-2 py-2 font-semibold"
        >
          {{ postDetails }}
        </div>

        <div for="" class="w-full text-lg font-semibold text-primary">
          Location
        </div>

        <div
          class="bg-white w-full h-[12%] border-2 rounded-lg mb-4 border-gray-400 font-semibold px-2 py-2"
        >
          {{ zipcode }} {{ city }} {{ address }}
        </div>
        <div for="" class="w-full text-lg font-semibold text-primary">
          Type of Emergency :
        </div>

        <div
          class="flex gap-1 p-2 bg-white w-full h-[12%] border-2 rounded-lg mb-4 border-gray-400"
        >
          <Emergency :department="emergency_type" v-if="postDetails" />
          <!-- <Emergency department="Road Incident" />
          <Emergency department="Flood" /> -->
        </div>

        <div for="" class="w-full text-lg font-semibold text-primary">
          Emergency Response Team :
        </div>
        <div
          class="flex bg-white w-full h-[12%] border-2 rounded-lg mb-4 border-gray-400 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] outline-none focus:ring-2 focus:ring-primary"
        >
          <Emergency :department="emergency_team" v-if="postDetails" />

          <div class="h-full w-[100%] p-2 flex justify-end items-end gap-1">
            <div class="h-full w-[25%] flex p-2">
              <!-- <mdicon class="" name="plus" :width="20" :height="20" /> -->
              <div>
                <AddResponseTeam
                  v-model:snr="snr"
                  v-model:fire_department="fire_department"
                  v-model:ngo="ngo"
                  v-model:private_sector="private_sector"
                  v-model:baranggay_tanod="baranggay_tanod"
                />
              </div>
            </div>
          </div>
        </div>

        <div for="" class="w-full text-lg font-semibold text-primary">
          Additional Description :
        </div>
        <input
          v-model="additionalDescription"
          type="text"
          class="bg-white w-full h-[19.5%] border-2 rounded-lg mb-4 border-gray-400 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Emergency from "../../composables/Emergency.vue";
import AddResponseTeam from "../../composables/AddResponseTeam.vue";
import { ref, onMounted } from "vue";
const dog = ref();
defineProps({
  postDetails: String,
  zipcode: String,
  address: String,
  city: String,
  emergency_type: String,
  emergency_team: String,
});
const additionalDescription = defineModel("additionalDescription");

const snr = defineModel("snr");
const fire_department = defineModel("fire_department");
const ngo = defineModel("ngo");
const private_sector = defineModel("private_sector");
const baranggay_tanod = defineModel("baranggay_tanod");
</script>
