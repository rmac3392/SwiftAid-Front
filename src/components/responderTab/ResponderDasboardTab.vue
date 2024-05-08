<template>
  <div class="flex h-[87%] w-full">
    <div class="w-[100%] h-full pb-4 flex space-x-5 mt-5">
      <div
        class="w-[33%] h-full pl-3 pr-3 pb-3 bg-gray-100 border-2 border-white rounded-lg"
      >
        <div
          class="text-primary font-bold text-2xl flex text-center justify-center items-center mt-7 mb-8"
        >
          EMERGENCY REPORTS
        </div>

        <div class="space-y-5 w-[95%] mx-auto">
          <testAlert v-for="(post,index) in posts"
          @click="getDetails(post.id)"
          :location="`${post.address}, ${post.city}`"
          :type="post.type"
          :time="post.time"
          />

        </div>
      </div>

      <div class="w-[33%] h-[93.5%]">
        <div class="w-[100%] h-[107%] rounded-lg flex bg-gray-100 flex-col">
          <div 
            class="text-primary font-bold text-2xl flex text-center justify-center mx-auto mt-8 mb-6"
          >
            EMERGENCY DETAILS
          </div>
          <div v-if="postID" class="">
            <div class="h-[100%] w-[92%] mx-auto">
              <div class="w-full h-[560px] p-2 font-serif">
                <div
                  class="bg-white h-[100%] drop-shadow-lg shadow-lg py-8 px-10"
                >
                  <div class="h-[20%] flex">
                    <div
                      class="h-full w-[22%] flex items-center justify-center"
                    >
                      <img src="../../assets/ndrmc.png" alt="" />
                    </div>
                    <div
                      class="h-full w-[56%] text-[0.55rem] flex flex-col items-center font-medium justify-center gap-1"
                    >
                      <div class="leading-[0.58rem]">
                        Republic of the Philippines
                      </div>
                      <div class="leading-[0.58rem]">N.D.R.R.M.C</div>
                      <div class="leading-[0.58rem]">SWIFTAID</div>
                      <div class="leading-[0.58rem] font-bold">
                        EMERGENCY DISPATCH CENTER
                      </div>
                      <div class="leading-[0.58rem]">Cebu City</div>
                    </div>
                    <div
                      class="h-full w-[22%] flex justify-center items-center"
                    >
                      <img
                        src="../../assets/SWIFTAID_logo.png"
                        alt=""
                        width="48"
                      />
                    </div>
                  </div>
                  <div class="h-[30%] text-[0.60rem] mt-3">
                    <div class="font-bold ml-2">INCIDENT REPORT</div>
                    <div class="pl-8 font-medium space-y-1">
                      <div class="flex">
                        <div class="w-[30%]">EMERGENCY TYPE</div>
                        <div class="w-[20%] text-center">:</div>
                        <div class="w-[50%]"> {{emergency}}</div>
                      </div>
                      <div class="flex">
                        <div class="w-[30%]">RESPONDER</div>
                        <div class="w-[20%] text-center">:</div>
                        <div class="w-[50%]">
                          {{ responder }} Bureau of Fire Protection
                        </div>
                      </div>
                      <div class="flex">
                        <div class="w-[30%]">OPERATOR</div>
                        <div class="w-[20%] text-center">:</div>
                        <div class="w-[50%]">{{ operator }}</div>
                      </div>
                      <div class="flex">
                        <div class="w-[30%]">DATE</div>
                        <div class="w-[20%] text-center">:</div>
                        <div class="w-[50%]">{{ date }}</div>
                      </div>
                      <div class="flex">
                        <div class="w-[30%]">TIME</div>
                        <div class="w-[20%] text-center">:</div>
                        <div class="w-[50%]">{{ time_ref }}</div>
                      </div>
                    </div>
                    <hr class="border border-gray-800 mt-3" />
                  </div>
                  <div
                    class="h-[40%] pt-5 pl-3 font-medium text-xs text-justify"
                  >
                    <div v-if="postDetails" class="leading-3 text-[0.68rem]">
                      <strong>Post:</strong> <br>{{ postDetails }} 
                    </div>
                    <br />
                    <div v-if="additionalDescription" class="leading-3 text-[0.68rem]">
                      <strong>Additional Description:</strong> <br>{{ additionalDescription }} 

                    </div>
                    <br />
                    <div v-if="eru.length!=0" class="leading-3 text-[0.68rem]">
                      <strong>Deployable Units:</strong>
                      <p v-for="(unit,index) in eru">
                        {{ unit }}
                      </p>
                    </div>
                  </div>
                  <div class="h-[10%] font-medium text-[0.60rem]">
                    <div class="leading-[0.60rem] text-end font-bold">
                      {{ operator }}
                    </div>
                    <div class="leading-[0.60rem] text-end">
                      Dispatch Operator
                    </div>
                  </div>
                </div>
                <div class="flex-row flex justify-center gap-10 mt-[10%]">
                  <div class="flex items-center justify-center">
                    <button
                      class="btn bg-white text-primary hover:bg-primary hover:text-white border-primary px-10"
                    >
                      Dismiss
                    </button>
                  </div>
                  <div class="flex items-center justify-center">
                    <button
                      class="btn bg-primary text-white hover:bg-white hover:text-primary hover:border-primary px-6"
                    >
                      Acknowledge
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[33%] h-[93.5%]">
        <div class="w-[100%] h-[107%] rounded-lg flex bg-gray-100 flex-col">
          <div
            class="text-primary font-bold text-2xl flex text-center justify-center my-8 mx-auto"
          >
            EMERGENCY LOCATION
          </div>
          <div>
            <div class="h-[545px]">
              <div class="flex items-center justify-center h-full">
                <!-- MAP -->
                <Map
                  :inputText="postDetails"             
                  :type="mapType"
                  :isVisible="true"
                />
                <!-- END MAP -->
              </div>
              <div class="flex flex-col mt-7 items-center justify-center">
                <div class="flex items-center justify-center mt-3">
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import TestAlert from "../../testComposables/testAlert.vue";
import Map from "../../composables/Map.vue";

import {ref,onMounted} from "vue";

onMounted(()=>{
  getPost();
});

const posts = ref([]);
const postID = ref();
const additionalDescription = ref("");




const city = ref();
const zipcode = ref();

const mapText = ref();

const eru = ref([]);
const date = ref();
const time_ref = ref();

const getPost = async () =>{
  try{
    posts.value = [];

    const response = await fetch(`http://localhost:8080/getPost`);
    const data = await response.json();

  for(var i = 0; i < data.length ; i++){
    if (data[i].status == 'Sent') {
      const timestamp = new Date(data[i].timestamp);
      const months = ['January','February','March','April','May','June',];

      const month = timestamp.getMonth() + 1; 
      const day = timestamp.getDate();
      const year = timestamp.getFullYear();

      let hours = timestamp.getHours();
      const minutes = timestamp.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; 
      const time = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + ampm;
      date.value = `${months[month-1]} ${day}, ${year}`
      time_ref.value = time;
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
    }
 

  }

  }
  catch(error){
    console.log(error);
  }


}


const postDetails = ref();
const location = ref();

const operator = ref();

const emergency = ref();
const mapType = ref();
const getDetails = async (id) =>{

  postID.value = id;

  const response = await fetch(`http://localhost:8080/getSinglePost/${id}`);
  const data = await response.json();
  emergency.value = data[0].emergency_type;
  postDetails.value = data[0].description;
  location.value = `${data[0].address}`;

  if(emergency.value == 'Fire'){
    mapType.value='fire_station';
  }

  city.value = data[0].city;
  zipcode.value = data[0].zipcode;
  mapText.value=data[0].description;

  const post_report = await getSinglePostReport(id);
  additionalDescription.value = post_report.additional_description;

  eru.value = await getSinglePostTeam(id);
  operator.value = await getSingleOperator(post_report.operator_id);
  searchLocation();
}

const getSinglePostReport = async (id) => {
  const response = await fetch(`http://localhost:8080/getSinglePostReport/${id}`);
  const data = await response.json();
  return data[0];
}

const getSinglePostTeam = async (id) => {
  const response = await fetch(`http://localhost:8080/getSinglePostTeam/${id}`);
  const data = await response.json();
  let array  = ([]);
  for(var i = 0 ; i < data.length ;i ++){
    array.push(data[i].name)
  }
  return array;
}

const getSingleOperator = async (id) =>{
  const response = await fetch(`http://localhost:8080/getSingleOperator/${id}`);
  const data = await response.json();

  return `${data[0].first_name} ${data[0].last_name}`;
}



</script>