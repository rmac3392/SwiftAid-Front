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

        <textarea
          class="bg-white w-full h-[12%] border-2 rounded-lg mb-4 border-gray-400 font-semibold px-2 py-2"
        >
          {{ zipcode }} {{ city }} {{ address }}
        </textarea>
        <div for="" class="w-full text-lg font-semibold text-primary">
          Type of Emergency :
        </div>

        <div
          class="bg-white w-full h-[12%] border-2 rounded-lg mb-4 border-gray-400 p-[7px]"
        >
          <!-- <Emergency :department="emergency_type" v-if="postDetails" /> -->
          <!-- <Emergency department="Road Incident" />
          <Emergency department="Flood" /> -->

          <div class="h-1/2 flex gap-2">
            <Emergency emergency="Biohazard" />
            <Emergency emergency="Fire" />
            <Emergency emergency="Flood" />
          </div>
          <div class="h-1/2 flex justify-end">
            <div class="dropdown dropdown-right">
              <div
                tabIndex="{0}"
                role="button"
                class="bg-primary rounded-md p-1 text-white font-semibold flex justify-center items-center w-[80px]"
              >
                Add +
              </div>
              <ul
                tabIndex="{0}"
                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border border-black"
              >
                <li class="border-b border-black">
                  <a> <input type="checkbox" name="" id="" /> Fire</a>
                </li>
                <li class="border-b border-black">
                  <a> <input type="checkbox" name="" id="" /> Flood</a>
                </li>
                <li class="border-b border-black">
                  <a> <input type="checkbox" name="" id="" />Assault</a>
                </li>
                <li class="border-b border-black">
                  <a> <input type="checkbox" name="" id="" />Injuries</a>
                </li>
                <li class="border-b border-black">
                  <a> <input type="checkbox" name="" id="" />Biohazard</a>
                </li>
                <li class="border-b border-black">
                  <a> <input type="checkbox" name="" id="" />Others</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div for="" class="w-full text-lg font-semibold text-primary">
          Emergency Response Team :
        </div>
        <div
          class="flex bg-white w-full h-[12%] border-2 rounded-lg mb-4 border-gray-400 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] outline-none focus:ring-2 focus:ring-primary"
        >
          <Emergency :department="emergency_team" v-if="postDetails" />

          <div class="h-full w-[100%] p-2 flex justify-end items-end gap-1">
            <div class="h-full w-[25%] flex justify-end items-end">
              <!-- <mdicon class="" name="plus" :width="20" :height="20" /> -->

              <!-- <AddResponseTeam
                  v-model:snr="snr"
                  v-model:fire_department="fire_department"
                  v-model:ngo="ngo"
                  v-model:private_sector="private_sector"
                  v-model:baranggay_tanod="baranggay_tanod"
                /> -->
              <div class="dropdown dropdown-right">
                <div
                  tabIndex="{0}"
                  role="button"
                  class="bg-primary rounded-md p-1 text-white font-semibold flex flex-col justify-center items-center w-[80px] "
                >
                  Add +
                </div>
                <ul
                  tabIndex="{0}"
                  class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border border-black h-60 "
                >
                  <li class="border-b border-black">
                    <a> <input type="checkbox" name="" id="" /> Fire</a>
                  </li>
                  <li class="border-b border-black">
                    <a> <input type="checkbox" name="" id="" /> Flood</a>
                  </li>
                  <li class="border-b border-black">
                    <a> <input type="checkbox" name="" id="" />Assault</a>
                  </li>
                  <li class="border-b border-black">
                    <a> <input type="checkbox" name="" id="" />Injuries</a>
                  </li>
                  <li class="border-b border-black">
                    <a> <input type="checkbox" name="" id="" />Biohazard</a>
                  </li>
                  <li class="border-b border-black">
                    <a> <input type="checkbox" name="" id="" />Others</a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div for="" class="w-full text-lg font-semibold text-primary">
          Additional Description :
        </div>
        <textarea
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
