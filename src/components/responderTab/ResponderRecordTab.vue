  <template>
  <div class="flex flex-col gap-3 items-center justify-center h-[60%] mt-[8%]">
    <div class="bg-white rounded-lg mt-2 shadow-lg h-1/2 p-5">
      <div class="overflow-auto h-full">
        <table
          class="table border border-gray-300 table-pin-rows table-pin-cols"
        >
          <!-- head -->
          <thead class="text-primary">
            <tr>
              <th></th>
              <th class="border border-gray-300">Location</th>
              <th class="border border-gray-300">Type of Emergency</th>
              <th class="border border-gray-300">Description</th>
              <th class="border border-gray-300">Status</th>
              <th class="border border-gray-300">Timestamp</th>
              <th class="border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody class="">
            <!-- row 1 -->
            <tr class="hover" v-for="(post,index) in posts">
              <th class="border border-gray-300">{{index+1}}</th>
              <td class="border border-gray-300">{{post.location}}</td>
              <td class="border border-gray-300">
                {{ post.emergency }}
              </td>
              <td class="border border-gray-300">{{post.description}}</td>
              <td class="border border-gray-300">{{post.status}}</td>
              <td class="border border-gray-300">{{post.timestamp}}</td>
              <td class="border border-gray-300">
                <dialogAction 
                  :emergency="post.emergency"
                  :date="post.timestamp"
                  :time="post.time"
                  :description="post.description"
                />
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import dialogAction from "../../composables/dialogAction.vue";

import {ref,onMounted} from "vue";

onMounted(()=>{
  getPost();
});

const posts = ref([]);

const fireCount = ref(0);
const floodCount = ref(0);
const assaultCount = ref(0);
const injuriesCount = ref(0);
const biohazardCount = ref(0);
const othersCount = ref(0);

//month referencers
const jan = ref(0);
const feb = ref(0);
const mar = ref(0);
const apr = ref(0);
const may = ref(0);
const jun = ref(0);
const jul = ref(0);
const aug = ref(0);

const getPost = async () => {
  const response = await fetch('http://localhost:8080/getPost');
  const data = await response.json();

  for(var i = 0 ; i < data.length ; i ++){
    const timestamp = new Date(data[i].timestamp);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthIndex = timestamp.getMonth();
    const monthName = months[monthIndex];
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
      location: data[i].address,
      emergency: data[i].emergency_type,
      description: data[i].description,
      status: data[i].status,
      timestamp: `${monthName} ${day}, ${year}`,
      time: time
    });

    if(data[i].emergency_type=='Fire'){fireCount.value++;}
    if(data[i].emergency_type=='Flood'){floodCount.value++;}
    if(data[i].emergency_type=='Assault'){assaultCount.value++;}
    if(data[i].emergency_type=='Injuries'){injuriesCount.value++;}
    if(data[i].emergency_type=='Biohazard'){biohazardCount.value++;}
    if(data[i].emergency_type=='Others'){othersCount.value++;}
    if(monthName=='January'){jan.value++;}
    if(monthName=='February'){feb.value++;}
    if(monthName=='March'){mar.value++;}
    if(monthName=='April'){apr.value++;}
    if(monthName=='May'){may.value++;}
    if(monthName=='June'){jun.value++;}
    if(monthName=='July'){jul.value++;}
    if(monthName=='August'){aug.value++;}

  }

}
</script>
