<template>
  <div class="w-[90%] h-[85%] bg-[#fafafb] mx-auto rounded-lg">
    <div
      class="text-primary font-bold text-2xl ml-[5%] pt-[2%] pb-[6%] flex flex-row"
    >
      User Management
      <div class="ml-[58%]">
        <form class="max-w-sm mx-auto">
          <select
          v-model="selectedView"
            id="users"
            class="bg-gray-50 border px-9 justify-start items-start border-primary text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
            required
            @change="change()"
          >
            <option value="operator">System Operator</option>
            <option value="responder">Emergency Responder</option>
            <option value="all">View All</option>
          </select>
        </form>
      </div>
    </div>
    <div
      class="w-[100%] h-[85%] bg-[#fafafb] mx-auto rounded-lg flex flex-row row-span-4 gap-10 justify-center"
      v-for="(user,index) in userData"
      :key="index"      
      :name="user.name"
      :number="user.number"
      :role="user.role"
      :image="user.image"
      :role_selection="user.role_selection"
    >
    <!-- View All -->
      <div
      v-if="selectedView=='all'"
        class="w-[20%] h-[18%] px-2 py-3 hover:shadow-[0_2px_2px_0px_rgba(0,0,0,0.70)] border-2 border-white bg-gray-100 drop-shadow-lg rounded-lg flex flex-row row-span-3"
      >
        <div class="flex row-span-1 justify-center items-center w-[35%]">
          <img
            :src=user.image
            class="rounded-full w-[80%] drop-shadow-2xl"
          />
        </div>
        <div class="w-[55%] font-500 ml-2"


        >
          <p class="text-sm my-2">{{user.name}}     
          </p>
          <p class="text-sm">{{user.number}}</p>
          <p class="drop-shadow-lg my-2 font-bold text-sm text-primary">
            {{ user.role }}
          </p>
        </div>

        <div class="flex row-span-3 justify-center items-start w-[10%]">
          <button
            id="dropdownDots "
            data-dropdown-toggle="dropdownDots"
            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg"
            type="button"
            s
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 4 15"
            >
              <path
                d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
          </button>

          <!-- Dropdown menu -->
          <div
            id="dropdownDots"
            class="hidden z-10 bg-white divide-gray-100 rounded-lg shadow w-[37%]"
          >
            <div
              class="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDots"
            >
              <div
                class="block px-2 py-2 hover:bg-gray-100 text-xs font-500 text-primary"
              >
                <EditAccount />
              </div>

              <div
                class="block px-1 py-2 hover:bg-gray-100 text-xs font-500 text-red-700"
              >
                <DeleteRecord />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end of View All -->
    </div>

    <!-- dadadad -->
  </div>
</template>
<script setup>
import DeleteRecord from "../../composables/DeleteRecord.vue";
import EditAccount from "../../composables/EditAccount.vue";
import Modal from "../../composables/Modal.vue";
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  getOperator();
  getResponder();
  initFlowbite();
});
const selectedView = ref();
const userData = ref([]);

const getOperator = async() => {
  try {
    const response = await fetch(`http://localhost:8080/getOperator`);
    const data = await response.json();
    const lth = data.length;
    for (var i = 0; i < lth; i++) {
      const name = `${data[i].first_name} ${data[i].last_name} `;
      const number = `${data[i].mobile_number}`;
      const id= data[i].user_id;

      const response = await fetch(`http://localhost:8080/getUserImage/${id}`);
      const imageData = await response.json();
      const image= imageData[0].image?.data;
      if (image) {
        const blob = new Blob([new Uint8Array(image)], { type: 'image/jpeg' }); 
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const dataURL = reader.result;
          userData.value.push({ name: name, number: number, role: `System Operator`,image:dataURL,role_selection:'operator' });

        };
      }
    }
  }
  catch(error){
    console.log("Error: ",error);
  }

}

const getResponder = async() => {
  try {
    const response = await fetch(`http://localhost:8080/getResponder`);
    const data = await response.json();
    const lth = data.length;
    for (var i = 0; i < lth; i++) {
      const name = `${data[i].institution} `;
      const number = `${data[i].mobile_number}`;
      const id= data[i].user_id;

      const response = await fetch(`http://localhost:8080/getUserImage/${id}`);
      const imageData = await response.json();
      const image= imageData[0].image?.data;
      if (image) {
        const blob = new Blob([new Uint8Array(image)], { type: 'image/jpeg' }); 
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const dataURL = reader.result;
          userData.value.push({ name: name, number: number, role: `Responder`,image:dataURL, role_selection:'responder'});

        };
      }
    }
  }
  catch(error){
    console.log("Error: ",error);
  }

}


function change (){
console.log(selectedView.value)
}





</script>
