<template>
  <div class="flex flex-col gap-3 items-center justify-center h-[60%] mt-[8%]">
    <div class="flex w-[70%] h-[100%] justify-center items-center">
      <div class="relative shadow-md sm:rounded-lg w-[100%] h-full">
        <table
          class="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-sm text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-3 py-3"></th>
              <th scope="col" class="px-3 py-3">location</th>
              <th scope="col" class="px-3 py-3">Type of Emergency</th>
              <th scope="col" class="px-3 py-3">Description</th>
              <th scope="col" class="px-3 py-3">Action</th>
              <th scope="col" class="px-3 py-3">Timestamp</th>
            </tr>
          </thead>

          <TableRecords
          v-for="(post,index) in displayedPost"
          :key="index"
          viewDetails="Details"
          :description="post.description"
          :action="post.action"
          :timeStamp="post.date"
          
          :location="post.location"
          :typeOfEmergency="post.emergency_type"
          :subjectDescription="post.description"
          :reportDate="post.date"
          :reportTime="post.time"
          :operatorName="post.operator"
      />
        </table>
      </div>
    </div>
    <div class="flex justify-center items-center mt-[2%]">
      <Pagination
      :postCount="postCount"
      :currentPage="currentPage" 
      :totalPage="totalPage"
      :pages="pages"
      :next="next"
      :previous="previous"
      :changePage="changePage"
      />
    </div>
  </div>
</template>

<script setup>
import Pagination from "../../composables/Pagination.vue";
import TableRecords from "../../composables/TableRecords.vue";
import { onMounted,ref } from "vue";

onMounted(async ()=>{
  getPostCount();
  getPost();
  landingPage();

});

//REFERENCERS

// for table records

//------------------------ Start Table Records ------------------------
const allPost = ref([]);
const operator = ref('-----');
const tableCounter=ref(0);
const tablePostCount = ref(0);
const displayedPost = ref([]);
tablePostCount.value = 1;

displayedPost.value = allPost.value;


const getPost = async() => {
  const response = await fetch(`http://localhost:8080/getPost`);
  const data = await response.json();
  const lth = data.length;
  for(var i = 0 ; i <lth ; i++){

    var id = data[i].post_id;
    var location = `${data[i].address}, ${data[i].city}, ${data[i].zipcode}`;
    var emergency_type = data[i].emergency_type.toUpperCase();
    var description = data[i].description;
    var action = data[i].status.toUpperCase();
    //-------------------- TIME STAMP START --------------------
    const timestamp = data[i].timestamp;
    const date = new Date(timestamp);
    const fullDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
    let hour = date.getHours();
    const minute = date.getMinutes();
    const amPM = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    const time = `${hour}:${minute} ${amPM}`
    //-------------------- TIME STAMP END --------------------
    // const pReportResponse = await fetch(`http://localhost:8080/getSinglePostReport/${id}`);
    // const pReportData = await pReportResponse.json();
    // const operator_id = pReportData[0].operator_id;

    // const operatorResponse = await fetch(`http://localhost:8080/getSingleOperator/${operator_id}`);
    // const operatorData = await operatorResponse.json();
    // const operatorName = `${operatorData[0].first_name} ${operatorData[0].last_name}`;
    const operatorName='dummy';
    //-------------------- START PAGE COUNTER --------------------

    //-------------------- END PAGE COUNTER --------------------

    if(data[i].status=='pending'){
      allPost.value.push({
        id:id,
        location:location,
        emergency_type:emergency_type,
        description:description,
        action:action,
        date:fullDate,
        time: time,
        operator:"TBD"
      })
      tablePostCount.value++;
    }
    else {
      operator.value = operatorName
      allPost.value.push({
        id:id,
        location:location,
        emergency_type:emergency_type,
        description:description,
        action:action,
        date:fullDate,
        time: time,
        operator:'--'
      })
      tablePostCount.value++;
    }
    if(i<7){
      if(data[i].status=='pending'){
        displayedPost.value.push({
        id:id,
        location:location,
        emergency_type:emergency_type,
        description:description,
        action:action,
        date:fullDate,
        time: time,
        operator:"TBD"
      })
      tablePostCount.value++;
    }
    else {
      operator.value = operatorName
      displayedPost.value.push({
        id:id,
        location:location,
        emergency_type:emergency_type,
        description:description,
        action:action,
        date:fullDate,
        time: time,
        operator:'--'
      })
      tablePostCount.value++;
    }

    }
      




  
  }
}
//------------------------ End Table Records ------------------------

//------------------------ Start Pagination ------------------------

const postCount = ref(0);
const currentPage = ref(1);
const totalPage= ref(0);

const pages = ref([]);




const getPostCount = async () => {
  const response = await fetch(`http://localhost:8080/getPost`);
  const data = await response.json();
  for(var i = 0; i < data.length;i++){
    postCount.value++;
  }

  totalPage.value = Math.ceil(postCount.value / 7);
  for(var i = 1; i<=totalPage.value;i++){
    pages.value.push({
      i:i
    })
  }
}

const changePage = (i) => {
  currentPage.value = i;
  tableCounter.value = 0;
  displayedPost.value = [];

  var displayedPostIndex = 0;

  for (var i = 0; i < postCount.value; i++) {
    if (i % 7 === 0) {
      tableCounter.value++;
    }
    if (tableCounter.value === currentPage.value) {
      displayedPost.value[displayedPostIndex++] = allPost.value[i];
    }
  }
};






const next = () =>{
  if(currentPage.value != totalPage.value){
    currentPage.value++
  }
  var i = currentPage.value;
  changePage(i);
}
const previous = () =>{
  if(currentPage.value != 1){
    currentPage.value--;
  }
  var i = currentPage.value;
  changePage(i);
}

const landingPage = () => {
  currentPage.value=1;
  var i = currentPage.value;
  changePage(i);
}

//------------------------ End Pagination ------------------------


</script>
