<template>
  <div class="flex h-full">
    <div
      class="bg-white h-full rounded-lg w-[28%] mr-3 p-5 overflow-auto space-y-5 shadow-lg"
    >
      <div class="font-semibold text-xl text-primary">Emergency Alert :</div>

      <!-- alert -->
      <testAlert v-for="(post,index) in posts"
      @click="getDetails(post.id)"
      :location="`${post.address}, ${post.city}`"
      :type="post.type"
      :time="post.time"
      />

    </div>
    <div class="h-full w-[72%] ml-2">
      <div class="flex h-[15%] pb-5 gap-5">
        <div class="bg-white w-1/4 h-full rounded-lg p-5 flex shadow-lg">
          <div class="h-full w-[40%]">
            <div
              class="bg-primary h-full rounded-lg flex items-center justify-center text-white"
            >
              <mdicon
                class="origin-center"
                name="ProgressUpload"
                :width="50"
                :height="50"
              />
            </div>
          </div>
          <div class="h-full pl-3 w-[60%]">
            <div class="h-full">
              <div
                class="h-[65%] flex justify-center font-semibold items-end text-4xl"
              >
                {{ sent }}
              </div>
              <div class="h-[35%] flex justify-center items-start text-sm">
                Sent Reports
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white w-1/4 h-full rounded-lg p-5 flex shadow-lg">
          <div class="h-full w-[40%]">
            <div
              class="bg-primary h-full rounded-lg flex items-center justify-center text-white"
            >
              <mdicon
                class="origin-center"
                name="ProgressClose"
                :width="50"
                :height="50"
              />
            </div>
          </div>
          <div class="h-full pl-3 w-[60%]">
            <div class="h-full">
              <div
                class="h-[65%] flex justify-center font-semibold items-end text-4xl"
              >
                {{ cancelled }}
              </div>
              <div class="h-[35%] flex justify-center items-start text-sm">
                Cancelled Reports
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white w-1/4 h-full rounded-lg p-5 flex shadow-lg">
          <div class="h-full w-[40%]">
            <div
              class="bg-primary h-full rounded-lg flex items-center justify-center text-white"
            >
              <mdicon
                class="origin-center"
                name="ProgressCheck"
                :width="50"
                :height="50"
              />
            </div>
          </div>
          <div class="h-full pl-3 w-[60%]">
            <div class="h-full">
              <div
                class="h-[65%] flex justify-center font-semibold items-end text-4xl"
              >
                {{ acknowledged }}
              </div>
              <div class="h-[35%] flex justify-center items-start text-sm">
                Acknowledged
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white w-1/4 h-full rounded-lg p-5 flex shadow-lg">
          <div class="h-full w-[40%]">
            <div
              class="bg-primary h-full rounded-lg flex items-center justify-center text-white"
            >
              <mdicon
                class="origin-center"
                name="ProgressQuestion"
                :width="50"
                :height="50"
              />
            </div>
          </div>
          <div class="h-full pl-3 w-[60%]">
            <div class="h-full">
              <div
                class="h-[65%] flex justify-center font-semibold items-end text-4xl"
              >
                {{ pending }}
              </div>
              <div class="h-[35%] flex justify-center items-start text-sm">
                Pending Reports
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[85%]">
        <div class="h-full flex">
          <div class="w-1/2 h-full bg-white rounded-lg shadow-lg mr-3">
            <EditReportPane
            @click="check"
              v-model:fire="fire"
              v-model:flood="flood"
              v-model:assault="assault"
              v-model:injuries="injuries"
              v-model:biohazard="biohazard"
              v-model:others="others"
              :checked="checked"
              :postDetails="postDetails"
              :location="location"
              :emergencies="typeOfEmergency"
              :emergency_team="postEmergencyTeam"
            />
          </div>
          <div class="w-1/2 h-full p-5 bg-white rounded-lg shadow-lg ml-2">
            <div for="" class="w-full text-lg font-semibold text-primary mb-2">
              Map :
            </div>
            <div class="h-[75%]">
              <div class="flex items-center justify-center h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.7727507333092!2d123.97775943645873!3d10.27627414471288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a990a651f06419%3A0x430493c25b84de00!2sStephen&#39;s%20Place!5e0!3m2!1sen!2sph!4v1712670503004!5m2!1sen!2sph"
                  class="w-[85%] h-full border-2 rounded-lg border-gray-400 shadow-[0_4px_4px_0px_rgba(0,0,0,0.20)]"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div class="flex flex-col mt-5 items-center justify-center">
                <button
                  class="w-[85%] h-12 bg-primary text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
                >
                  Send
                </button>
                <button
                  class="w-[85%] h-12 bg-primary text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
                >
                  Discard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import testAlert from "../testComposables/testAlert.vue";
import EditReportPane from "../components/operatorPane/EditReportPane.vue";
import {ref,onMounted,watch} from "vue";
import axios from "axios";

onMounted(()=>{
  getPost();
});

const posts = ref([]);

const pending = ref(0);
const cancelled = ref(0);
const acknowledged = ref(0);
const sent = ref(0);
const getPost = async () =>{
  const response = await fetch(`http://localhost:8080/getPost`);
  const data = await response.json();
  for(var i = 0; i < data.length ; i++){
    if (data[i].status == 'pending') {
      const timestamp = new Date(data[i].timestamp);

      const month = timestamp.getMonth() + 1; 
      const day = timestamp.getDate();
      const year = timestamp.getFullYear();

      let hours = timestamp.getHours();
      const minutes = timestamp.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; 
      const time = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;

      posts.value.push({
        id: data[i].post_id,
        description: data[i].description,
        type: data[i].emergency_type,
        address: data[i].address,
        month: month,
        day: day,
        year: year,
        time: time,
        city: data[i].city,
        zipcode: data[i].zipcode
      });
      pending.value++;
    }
    else if(data[i].status=='sent'){
      sent.value++;
    }
    else if(data[i].status=='acknowledged'){
      acknowledged.value++;
    }
    else if(data[i].status=='cancelled'){
      cancelled.value++;
    }
    

  }
}

const postDetails = ref();
const location = ref();
const typeOfEmergency = ref([]);
const emergencyTeam = ref();


const fire = ref(false);
const flood = ref(false);
const assault = ref(false);
const injuries = ref(false);
const biohazard = ref(false);
const others = ref(false);


const getDetails = async (id) =>{
  typeOfEmergency.value = ([]);
  fire.value = false
  flood.value = false;
  assault.value = false;
  injuries.value = false;
  biohazard.value = false;
  others.value = false;
  const response = await fetch(`http://localhost:8080/getSinglePost/${id}`);
  const data = await response.json();
  postDetails.value = data[0].description;
  location.value = `${data[0].address}, ${data[0].city}, ${data[0].zipcode}`;
  if(data[0].emergency_type=='Fire'){fire.value=true;}
  else if(data[0].emergency_type=='Flood'){flood.value=true;}
  else if(data[0].emergency_type=='Assault'){assault.value=true;}
  else if(data[0].emergency_type=='Injuries'){injuries.value=true;}
  else if(data[0].emergency_type=='Biohazard'){biohazard.value=true;}
  else if(data[0].emergency_type=='Others'){others.value=true;}

  typeOfEmergency.value.push({
    emergency: data[0].emergency_type
  });
}


function checked (isChecked,value){
  if (isChecked) {
    typeOfEmergency.value.push({ emergency: value });
  } else {
    const index = typeOfEmergency.value.findIndex((item) => item.emergency === value);
    if (index !== -1) {
      typeOfEmergency.value.splice(index, 1);
    }
  }
}


</script>
