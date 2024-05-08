<template>
  <div class="h-full w-[100%]">
    <div class="flex w-full h-full">
      <div class="w-full space-y-2 p-5">
        <div for="" class="w-full text-lg font-semibold text-primary">
          Post Details :
        </div>
        <div
          class="bg-white w-full h-[12%] border-2 rounded-lg mb-4 border-gray-400 px-2 py-2 font-semibold overflow-auto"
        >
          {{ postDetails }}
        </div>

        <div for="" class="w-full text-lg font-semibold text-primary">
          Location: <strong>{{ city }}, {{ zipcode }}</strong>       

        </div>

        <textarea
          class="bg-white w-full h-[12%] border-2 rounded-lg mb-4 border-gray-400 font-semibold px-2 py-2"
        >{{ location }}
        </textarea>
        <div for="" class="w-full text-lg font-semibold text-primary">
          Type of Emergency :
        </div>

        <div
          class="bg-white w-full h-[12%] border-2 rounded-lg mb-4 border-gray-400 p-[7px]"
        >
          <!-- <Emergency :department="emergency_ty12pe" v-if="postDetails" /> -->
          <!-- <Emergency department="Road Incident" />
          <Emergency department="Flood" /> -->

          <div class="h-1/2 flex gap-2">
            <Emergency v-for="(type,index) in emergencies" 
            :emergency="type.emergency" />
              
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
                  <a><input type="checkbox" v-model="fire" @change="checked(fire,'Fire')" />Fire</a>
                </li>
                <li class="border-b border-black">
                  <a><input type="checkbox" v-model="flood" @change="checked(flood,'Flood')" /> Flood</a>
                </li>
                <li class="border-b border-black">
                  <a><input type="checkbox" v-model="assault" @change="checked(assault,'Assault')" />Assault</a>
                </li>
                <li class="border-b border-black">
                  <a><input type="checkbox" v-model="injuries" @change="checked(injuries,'Injuries')" />Injuries</a>
                </li>
                <li class="border-b border-black">
                  <a><input type="checkbox" v-model="biohazard" @change="checked(biohazard,'Biohazard')" />Biohazard</a>
                </li>
                <li class="border-b border-black">
                  <a><input type="checkbox" v-model="others" @change="checked(others,'Others')" />Others</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div for="" class="w-full text-lg font-semibold text-primary">
          Emergency Response Team :
        </div>
        <div
          class="flex bg-white w-full h-[12%] border-2 p-2 rounded-lg mb-4 border-gray-400 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] outline-none focus:ring-2 focus:ring-primary"
        >
          <!-- <Emergency :department="emergency_team" v-if="postDetails" /> -->
          <div class="h-full w-[70%] ">
            <Emergency v-for="(eru,index) in deployed_team" 
          :emergency="eru.eru" />
          </div>
          <div class="h-full w-[30%] gap-2 ">
            <div class="h-full w-full  flex justify-end items-end">
              <!-- <mdicon class="" name="plus" :width="20" :height="20" /> -->

              <!-- <AddResponseTeam
                  v-model:snr="snr"
                  v-model:fire_department="fire_department"
                  v-model:ngo="ngo"
                  v-model:private_sector="private_sector"
                  v-model:baranggay_tanod="baranggay_tanod"
                /> -->
                <div class=" dropdown dropdown-right ">
                  <div
                    tabIndex="{0}"
                    role="button"
                    class="bg-primary rounded-md p-1 text-white font-semibold flex flex-col justify-center items-center w-[80px] "
                  >
                    Add +
                  </div>
                  <ul
                    tabIndex="{0}"
                    class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border border-black max-h-[200px] overflow-y-auto"
                  >
                    <!-- emergency teams available -->
                    <li v-for="(team,index) in emergency_team"class="border-b border-black" >
                      <a>         <input :v-model="team.eru" @change="team_checked($event.target.checked, team.eru)" type="checkbox"/>


                        {{team.eru}}</a>
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
import { ref, onMounted ,defineModel} from "vue";

const props = defineProps({
  postDetails: String,
  location:String,
  emergencies: Array,
  emergency_team: Array,
  checked: Function,
  team_checked: Function,
  deployed_team:Array,
  city: String,
  zipcode: String,
});
const additionalDescription = defineModel("additionalDescription");

const fire = defineModel("fire");
const flood = defineModel("flood");
const assault = defineModel("assault");
const injuries = defineModel("injuries");
const biohazard = defineModel("biohazard");
const others = defineModel("others");


</script>
