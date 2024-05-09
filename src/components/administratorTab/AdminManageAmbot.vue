<template>
  <div class="w-[97%] h-[810px] mx-auto rounded-lg">
    <!-- User Management Header -->
    <div
      class="text-primary font-bold text-2xl ml-[5%] pt-[2%] pb-[6%] flex flex-row"
    >
      <div
        class="text-3xl font-black w-[50%] py-5 mx-auto text-center tracking-wider bg-white text-primary absolute left-[35%] top-[16%]"
      >
        PROFILE CONTROL MANAGEMENT
      </div>
      <!-- <div class="ml-[58%]">
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
      </div> -->
    </div>
    <!-- User Data -->
    <div class="h-[20%]">
      <div class="flex flex-wrap w-[95%] h-[90%] mx-auto gap-10 ml-[1%] mt-3">
        <div
          class="rounded-lg w-[20%] mx-auto"
          v-for="(user, index) in userData"
          :key="index"
          :name="user.name"
          :number="user.number"
          :role="user.role"
          :image="user.image"
          :role_selection="user.role_selection"
        >
          <div
            v-if="selectedView == 'all'"
            class="w-[112%] my-5 h-[85%] px-2 py-3 hover:shadow-[0_2px_2px_0px_rgba(0,0,0,0.70)] border-2 border-white bg-gray-100 drop-shadow-lg rounded-lg flex flex-row"
          >
            <!-- User Details -->
            <div class="flex flex-row justify-center items-center w-[35%]">
              <img
                :src="user.image"
                class="rounded-full w-[90%] drop-shadow-2xl"
              />
            </div>
            <div class="w-[55%] font-500 ml-2 flex flex-col my-auto gap-y-1">
              <p class="text-sm my-2">{{ user.name }}</p>
              <p class="text-sm">{{ user.number }}</p>
              <p class="drop-shadow-lg my-2 font-bold text-sm text-primary">
                {{ user.role }}
              </p>
            </div>
            <!-- Dropdown Button -->
            <div class="flex row-span-3 justify-center items-start w-[10%]">
              <!-- Dropdown menu -->

              <div
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDots"
              >
                <button
                  @click="showEditModal(index++); getDetails(user.id,user.role)"
                  data-modal-target="popup-modal1"
                  data-modal-toggle="popup-modal1"
                  class="block px-2 py-2 ml-[-20%] hover:bg-primary rounded-md hover:text-white text-xs font-500 text-primary cursor-pointer"
                >
                  <!-- <button
                      
                      class="block text-primary text-xs font-500"
                      type="button"
                    > -->
                  Edit Account
                  <!-- </button> -->
                </button>
                <!-- <div
                  @click="showDeleteModal()"
                  class="block px-1 py-2 hover:bg-gray-100 text-xs font-500 text-red-700 cursor-pointer text-center"
                >
                  Deactivate Account
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <edit-account v-if="editAccountVisible"
     :first_name="first_name"
     :last_name="last_name"
    ></edit-account>
  </div>
</template>
<script setup>
import DeleteRecord from "../../composables/DeleteRecord.vue";
import EditAccount from "../../composables/EditAccount.vue";

const editAccountVisible = ref(false);

const selectedUserIndex = ref(null); 

const showEditModal = (index) => {
  selectedUserIndex.value = index;
  editAccountVisible.value = true;
};

const showDeleteModal = () => {
  // Logic to show the delete modal
};
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";
import { all } from "axios";

onMounted(() => {
  getOperator();
  getResponder();
  initFlowbite();
});
const selectedView = ref("all");
const userData = ref([]);

const getOperator = async () => {
  try {
    const response = await fetch(`http://localhost:8080/getOperator`);
    const data = await response.json();
    const lth = data.length;
    for (var i = 0; i < lth; i++) {
      const name = `${data[i].first_name} ${data[i].last_name} `;
      const number = `${data[i].mobile_number}`;  
      const id = data[i].user_id;
      
      const response = await fetch(`http://localhost:8080/getUserImage/${id}`);
      const imageData = await response.json();
      const image = await convertBlob(imageData[0].image?.data) ;
      console.log(data[i].user_id,image)
          userData.value.push({
            id: data[i].user_id,
            name: name,
            number: number,
            role: `System Operator`,
            image: image,
            role_selection: "operator",
          });
        
      
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};

const getResponder = async () => {
  try {
    const response = await fetch(`http://localhost:8080/getResponder`);
    const data = await response.json();
    const lth = data.length;
    for (var i = 0; i < lth-1; i++) {
      const name = `${data[i].institution} `;
      const number = `${data[i].mobile_number}`;
      const id = data[i].user_id;

      const response = await fetch(`http://localhost:8080/getUserImage/${id}`);
      const imageData = await response.json();
      const image = imageData[0].image?.data;
      if (image) {
        const blob = new Blob([new Uint8Array(image)], { type: "image/jpeg" });
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const dataURL = reader.result;
          console.log("Data i " , data[i].responder_id)
          userData.value.push({
            id: data[i].responder_id,
            name: name,
            number: number,
            role: `Responder`,
            image: dataURL,
            role_selection: "responder",
          });
        };
      }
    }
  } catch (error) {
    console.log("Error: ", error);
  }
};

const convertBlob = (image) => {
      return new Promise((resolve, reject) => {
        if (image) {
          const blob = new Blob([new Uint8Array(image)], { type: "image/jpeg" });
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            const dataURL = reader.result;
            resolve(dataURL);
          };
        }
      });
    };

const getSingleResponder = async (id)  =>{
  const response = await fetch(`http://localhost:8080/getSingleResponder/${id}`);
  const data = await response.json();
  return data[0];
}

const getSingleOperator = async (id)  =>{
  const response = await fetch(`http://localhost:8080/getSingleOperator/${id}`);
  const data = await response.json();
  return data[0];
}

const first_name = ref();
const last_name = ref();
const contact_number = ref();
const email = ref();
const password = ref();

const getDetails = async (id,role) => {

  if(role=='System Operator'){
    const data = await getSingleOperator(id);
    localStorage.setItem('current_role','System Operator');
    console.log(    localStorage.getItem('current_role'))
    localStorage.setItem('op_id',data.operator_id);
    localStorage.setItem('op_firstname',data.first_name);
    localStorage.setItem('op_lastname',data.last_name);
    localStorage.setItem('op_number',data.mobile_number);

  }
  else if(role=='Responder'){
    localStorage.setItem('current_role','Responder');
    console.log(    localStorage.getItem('current_role'))

    const data = await getSingleResponder(id);

  } 
}

function change() {
  console.log(selectedView.value);
}
</script>
