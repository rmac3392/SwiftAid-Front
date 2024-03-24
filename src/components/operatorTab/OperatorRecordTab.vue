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
          v-for="(post,index) in allPost"
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
    <div class="flex justify-center items-center mt-[2%]"><Pagination /></div>
  </div>
</template>

<script setup>
import Pagination from "../../composables/Pagination.vue";
import TableRecords from "../../composables/TableRecords.vue";
import { onMounted,ref } from "vue";

onMounted(()=>{
  getPost();
});

//REFERENCERS

// for table records

//for post itself
const allPost = ref([]);


const operator = ref('-----');

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
    //time stamp
    const timestamp = data[i].timestamp;
    const date = new Date(timestamp);
    const fullDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
    let hour = date.getHours();
    const minute = date.getMinutes();
    const amPM = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    const time = `${hour}:${minute} ${amPM}`
    //--------------------------------------
    const pReportResponse = await fetch(`http://localhost:8080/getSinglePostReport/${id}`);
    const pReportData = await pReportResponse.json();
    const operator_id = pReportData[0].operator_id;

    const operatorResponse = await fetch(`http://localhost:8080/getSingleOperator/${operator_id}`);
    const operatorData = await operatorResponse.json();
    const operatorName = `${operatorData[0].first_name} ${operatorData[0].last_name}`;
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
    }
    else{
      operator.value = operatorName
      allPost.value.push({
        id:id,
        location:location,
        emergency_type:emergency_type,
        description:description,
        action:action,
        date:fullDate,
        time: time,
        operator:operator.value
      })

    }

  
  }
}

</script>
