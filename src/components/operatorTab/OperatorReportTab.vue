<template>
  <div class="flex h-[87%] w-full">
    <div class="w-[100%] h-full pl-3 pr-5 pb-2 flex">
      <div class="w-[100%] h-[80%] pl-3">
        <div class="flex h-[15%] w-[100%] items-end rounded-lg mb-4">
          <div
            class="flex h-full w-[25%] text-primary flex-col justify-center items-center"
          >
            <div
              class="bg-gray-100 py-5 rounded-lg border-2 border-white drop-shadow-lg px-12 justify-center items-center flex"
            >
              <div
                class="flex items-end justify-end w-[60%] mr-[-58%] mt-[-40%] absolute z-20"
              >
                <Notifications :notif="floodCnt" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
                <mdicon
                  class="origin-center"
                  name="ProgressUpload"
                  :width="40"
                  :height="40"
                />
                <div
                  class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                >
                  Flood
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex h-full w-[25%] text-primary flex-col justify-center items-center"
          >
            <div
              class="bg-gray-100 py-5 rounded-lg border-2 border-white drop-shadow-lg px-6 justify-center items-center flex"
            >
              <div
                class="flex items-end justify-end w-[57%] mr-[-58%] mt-[-35%] absolute z-20"
              >
                <Notifications :notif="fireCnt" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
                <mdicon
                  class="origin-center"
                  name="ProgressUpload"
                  :width="40"
                  :height="40"
                />
                <div
                  class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                >
                  Fire Incident
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex h-full w-[25%] text-primary flex-col justify-center items-center"
          >
            <div
              class="bg-gray-100 py-5 rounded-lg border-2 border-white drop-shadow-lg px-10 justify-center items-center flex"
            >
              <div
                class="flex items-end justify-end w-[60%] mr-[-55%] mt-[-37%] absolute z-20"
              >
                <Notifications :notif="typhoonCnt" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
                <mdicon
                  class="origin-center"
                  name="ProgressUpload"
                  :width="40"
                  :height="40"
                />
                <div
                  class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                >
                  Typhoon
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex h-full w-[25%] text-primary flex-col justify-center items-center"
          >
            <div
              class="bg-gray-100 py-5 rounded-lg border-2 border-white drop-shadow-lg px-6 justify-center items-center flex"
            >
              <div
                class="flex items-end justify-end w-[53%] mr-[-60%] mt-[-35%] absolute z-20"
              >
                <Notifications :notif="roadCnt" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
                <mdicon
                  class="origin-center"
                  name="ProgressUpload"
                  :width="40"
                  :height="40"
                />
                <div
                  class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                >
                  Road Incident
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex h-full w-[25%] text-primary flex-col justify-center items-center"
          >
            <div
              class="bg-gray-100 py-5 rounded-lg border-2 border-white drop-shadow-lg px-6 justify-center items-center flex"
            >
              <div
                class="flex items-end justify-end w-[50%] mr-[-62%] mt-[-33%] absolute z-20"
              >
                <Notifications :notif="marineCnt" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
                <mdicon
                  class="origin-center"
                  name="ProgressUpload"
                  :width="40"
                  :height="40"
                />
                <div
                  class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                >
                  Marine Incident
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[100%] h-[107%] bg-[#dcd3dd] rounded-lg flex">
          <div
            class="w-[30%] h-full px-3 pb-3 bg-white rounded-lg border-r-2 border-gray drop-shadow-lg"
          >
            <div
              class="text-primary font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-xl flex text-center justify-center items-center my-7"
            >
              Pending Reports
            </div>
            <Alert 
            v-for="(post,index) in newPost"
            :key="index"
            :id="post.id"
            :location="post.city"
            button-alert="Details" 
            />
          </div>

          <div class="flex flex-col col-span-1 w-[70%]">
            <div
              class="h-[55%] mx-5 bg-gray-100 border-2 border-white rounded-lg drop-shadow-lg"
            >
              <OperatorBarChart
              :key="chartKey"
              :jan=jan
              :feb=feb
              :mar=mar
              :apr=apr
              :may=may
              :jun=jun
              :jul=jul
              :aug=aug
              />
            </div>
            <div
              class="w-[96%] h-[50%] flex flex-row row-span-3 gap-5 my-5 mx-5"
            >
              <div
                class="w-[33.3%] h-[105%] bg-gray-100 border-2 border-white gap-3 rounded-lg"
              >
                <OperatorPieChart />
              </div>
              <div
                class="w-[33.3%] h-[105%] bg-gray-100 border-2 border-white rounded-lg"
              >
                <OperatorDoughnutChart />
              </div>
              <div
                class="w-[33.3%] h-[105%] bg-gray-100 border-2 border-white rounded-lg"
              >
                <OperatorPieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Notifications from "../../composables/Notifications.vue";
import Alert from "../../composables/Alert.vue";
import OperatorBarChart from "../../composables/Charts/OperatorBarChart.vue";
import OperatorPieChart from "../../composables/Charts/OperatorPieChart.vue";
import OperatorDoughnutChart from "../../composables/Charts/OperatorDoughnutChart.vue";
import { ref, onMounted} from "vue";
import axios from "axios";



const chartKey = ref(0); // Key variable


//referencers
const newPost = ref([]);

const floodCnt = ref(0);
const fireCnt = ref(0);
const typhoonCnt = ref(0);
const roadCnt = ref(0);
const marineCnt = ref(0);

//month referencers
const jan = ref(0);
const feb = ref(0);
const mar = ref(0);
const apr = ref(0);
const may = ref(0);
const jun = ref(0);
const jul = ref(0);
const aug = ref(0);


onMounted(()=>{
  update();
getPosts();
});

// functions
const getPosts = async () => {
  const response = await axios.get(`http://localhost:8080/getPost`);
  const data =  response.data;
  const lth = data.length;

  newPost.value = [];




  for(var i = 0; i < lth ; i ++){
    var emergency = data[i].emergency_type;
    var status = data[i].status;
    var id = data[i].post_id;
    var city = data[i].city;

    // date getter
    const timestamp = data[i].timestamp;
    const date = new Date(timestamp);
    const monthIndex = date.getMonth(); 
    const monthName = getMonthName(monthIndex); 
    if(status=='pending'){
      newPost.value.push({
        id: id,
        city: city,
      });
    }

    if(monthName=='jan'){
      jan.value++;
    }
    if(monthName=='feb'){
      feb.value++;
    }
    if(monthName=='mar'){
      mar.value++;
    }
    if(monthName=='apr'){
      apr.value++;
    }
    if(monthName=='may'){
      may.value++;
    }
    if(monthName=='jun'){
      jun.value++;
    }
    if(monthName=='jul'){
      jul.value++;
    }
    if(monthName=='aug'){
      aug.value++;
    }

    getCount(emergency,'flood');
    getCount(emergency,'fire');
    getCount(emergency,'typhoon');
    getCount(emergency,'road');
    getCount(emergency,'marine');
  }

}

const getCount = (data, emergency) => {
  if (data === emergency) {
    if (data === 'flood') {
      floodCnt.value++;
    } else if (data === 'fire') {
      fireCnt.value++;
    } else if (data === 'typhoon') {
      typhoonCnt.value++;
    } else if (data === 'road') {
      roadCnt.value++;
    } else if (data === 'marine') {
      marineCnt.value++;
    }
  }
}


const getMonthName = (index) => {

  const months = [
    'jan', 'feb', 'mar', 'apr', 'may', 'jun',
    'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
  ];
  return months[index];


}



const update = () => {
  chartKey.value++; 
};

</script>
