<template>
    <button class="btn btn-primary btn-sm w-full" @click="dialog.showModal()" v-if="role=='System Operator'">
      Edit Account
    </button>
    <dialog 
    v-if="role=='System Operator'"
    ref="dialog" :id="id" class="modal">
      <div class="modal-box h-[650px] bg-white flex flex-col rounded-lg">
        <div>
          <div class="relative p-4 w-[100%] max-h-full">
            <div class="relative bg-white rounded-lg s">
              <div class="md:p-5 text-center">
                <img
                  :src="image"
                  class="rounded-full w-[30%] h-[30%] mx-auto mt-3"
                />
                <div class="w-[90%]">
                  <div class="w-[100%] h-[80%] my-[5%] mx-[5%]">
                    <div class="flex justify-start items-start my-5">
                      <div class="flex flex-row"></div>
                    </div>
                    <div>
                      <div class="grid gap-5 md:grid-cols-2">
                        <div class="flex flex-col">
                          <div class="flex justify-start items-start">
                            <label
                              for="company"
                              class="block mb-2 text-sm font-medium"
                              >First Name</label
                            >
                          </div>
                          <div>
                            <input
                            v-model="first_name"
                              type="text"
                              id="first_name"
                              class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                              placeholder="John"
                              required
                            />
                          </div>
                        </div>
  
                        <div>
                          <div class="flex justify-start items-start">
                            <label
                              for="phone"
                              class="block mb-2 text-sm font-medium"
                              >Last Name</label
                            >
                          </div>
  
                          <input
                          v-model="last_name"
                            type="text"
                            id="last_name"
                            class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                            placeholder="Doe"
                            required
                          />
                        </div>
                        <div>
                          <div class="flex justify-start items-start">
                            <label
                              for="phone_number"
                              class="block mb-2 text-sm font-medium"
                              >Contact No</label
                            >
                          </div>
  
                          <input
                          v-model="number"
                            type="tel"
                            id="phone"
                            class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                            placeholder="0977*******"
                            pattern=""
                            required
                          />
                        </div>
                        <div>
                          <div class="mb-6">
                            <div class="flex justify-start items-start">
                              <label
                                for="email"
                                class="block mb-2 text-sm font-medium"
                                >Email</label
                              >
                            </div>
  
                            <input
                            v-model="email"
                              type="email"
                              id="email"
                              class="bg-gray-50 border pr-8 border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                              placeholder="john.doe@company.com"
                              required
                            />
                          </div>
                        </div>
                      </div>
  
                      <div
                        class="flex items-start justify-start gap-6 flex-row row-span-2"
                      >
                        <div
                          class="flex flex-col col-span-2 justify-start items-start w-full"
                        >
                          <label
                            for="Password"
                            class="block mb-2 text-sm font-medium"
                            >New Password</label
                          >
                          <div class="mb-6">
                            <input
                              type="password"
                              id="password"
                              class="bg-gray-50 border justify-start items-start border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-[100%] p-2.5"
                              placeholder="•••••••••"
                              required
                            />
                          </div>
                        </div>
  
                        <input
                          class="text-center justify-center my-auto flex w-full text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          aria-describedby="file_input_help"
                          id="file_input"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-[10%] flex">
          <div class="w-1/2 flex justify-center items-center p-3">
            <button class="btn btn-primary rounded-xl w-full btn-md">
              Update 
            </button>
          </div>
          <div class="w-1/2 flex justify-center items-center p-3">
            <button class="btn btn-primary rounded-xl w-full btn-md" @click="disable"> 
              <div v-if="status=='Enabled'" @click="disableEnable">Deactivate</div>
              <div v-if="status=='Disabled'" @click="disableEnable">Activate</div>  
            </button>
          </div>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>awdawdawd</button>
      </form>
    </dialog>


    <!-- START HERE MIKAELA -->
<dialog 
    v-if="role=='System Operator'"
    ref="dialog" :id="id" class="modal">
      <div class="modal-box h-[650px] bg-white flex flex-col rounded-lg">
        <div>
          <div class="relative p-4 w-[100%] max-h-full">
            <div class="relative bg-white rounded-lg s">
              <div class="md:p-5 text-center">
                <img
                  :src="image"
                  class="rounded-full w-[30%] h-[30%] mx-auto mt-3"
                />
                <div class="w-[90%]">
                  <div class="w-[100%] h-[80%] my-[5%] mx-[5%]">
                    <div class="flex justify-start items-start my-5">
                      <div class="flex flex-row"></div>
                    </div>
                    <div>
                      <div class="grid gap-5 md:grid-cols-2">
                        <div class="flex flex-col">
                          <div class="flex justify-start items-start">
                            <label
                              for="company"
                              class="block mb-2 text-sm font-medium"
                              >First Name</label
                            >
                          </div>
                          <div>
                            <input
                            v-model="first_name"
                              type="text"
                              id="first_name"
                              class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                              placeholder="John"
                              required
                            />
                          </div>
                        </div>
  
                        <div>
                          <div class="flex justify-start items-start">
                            <label
                              for="phone"
                              class="block mb-2 text-sm font-medium"
                              >Last Name</label
                            >
                          </div>
  
                          <input
                          v-model="last_name"
                            type="text"
                            id="last_name"
                            class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                            placeholder="Doe"
                            required
                          />
                        </div>
                        <div>
                          <div class="flex justify-start items-start">
                            <label
                              for="phone_number"
                              class="block mb-2 text-sm font-medium"
                              >Contact No</label
                            >
                          </div>
  
                          <input
                          v-model="number"
                            type="tel"
                            id="phone"
                            class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                            placeholder="0977*******"
                            pattern=""
                            required
                          />
                        </div>
                        <div>
                          <div class="mb-6">
                            <div class="flex justify-start items-start">
                              <label
                                for="email"
                                class="block mb-2 text-sm font-medium"
                                >Email</label
                              >
                            </div>
  
                            <input
                            v-model="email"
                              type="email"
                              id="email"
                              class="bg-gray-50 border pr-8 border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                              placeholder="john.doe@company.com"
                              required
                            />
                          </div>
                        </div>
                      </div>
  
                      <div
                        class="flex items-start justify-start gap-6 flex-row row-span-2"
                      >
                        <div
                          class="flex flex-col col-span-2 justify-start items-start w-full"
                        >
                          <label
                            for="Password"
                            class="block mb-2 text-sm font-medium"
                            >New Password</label
                          >
                          <div class="mb-6">
                            <input
                            v-model="password"
                              type="password"
                              id="password"
                              class="bg-gray-50 border justify-start items-start border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-[100%] p-2.5"
                              placeholder="•••••••••"
                              required
                            />
                          </div>
                        </div>
  
                        <input
                          class="text-center justify-center my-auto flex w-full text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          aria-describedby="file_input_help"
                          id="file_input"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-[10%] flex">
          <div class="w-1/2 flex justify-center items-center p-3">
            <button class="btn btn-primary rounded-xl w-full btn-md" @click="updateOp">
              Update 
            </button>
          </div>
          <div class="w-1/2 flex justify-center items-center p-3">
            <button class="btn btn-primary rounded-xl w-full btn-md" @click="disable">
              <div v-if="status=='Enabled'" @click="disableEnable">Deactivate</div>
              <div v-if="status=='Disabled'" @click="disableEnable">Activate</div>
            </button>
          </div>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>awdawdawd</button>
      </form>
    </dialog>    

    <!-- SECOND BULLSHIT -->


    <button v-if="role=='Responder'" class="btn btn-primary btn-sm w-full" @click="dialog.showModal()">
      Edit Account
    </button>
    <dialog ref="dialog" :id="id" class="modal" v-if="role=='Responder'">
      <div class="modal-box h-[650px] bg-white flex flex-col rounded-lg">
        <div>
          <div class="relative p-4 w-[100%] max-h-full">
            <div class="relative bg-white rounded-lg s">
              <div class="md:p-5 text-center">
                <img
                  :src="image"
                  class="rounded-full w-[30%] h-[30%] mx-auto mt-3"
                />
                <div class="w-[90%]">
                  <div class="w-[100%] h-[80%] my-[5%] mx-[5%]">
                    <div class="flex justify-start items-start my-5">
                      <div class="flex flex-row"></div>
                    </div>
                    <div>
                      <div class="grid gap-5 md:grid-cols-2">
                        <div class="flex flex-col">
                          <div class="flex justify-start items-start">
                            <label
                              for="username"
                              class="block mb-2 text-sm font-medium"
                              >City</label
                            >
                          </div>
                          <div>
                            <input
                            v-model="city"
                              type="text"
                              id="username"
                              class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                              placeholder="City"
                              required
                            />
                          </div>
                        </div>
  
                        <div>
                          <div class="flex justify-start items-start">
                            <label
                              for="institution"
                              class="block mb-2 text-sm font-medium"
                              >Institution</label
                            >
                          </div>
  
                          <input
                          v-model="institution"
                            type="text"
                            id="institution"
                            class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                            placeholder="Institution"
                            required
                          />
                        </div>
                        <div>
                          <div class="flex justify-start items-start">
                            <label
                              for="phone_number"
                              class="block mb-2 text-sm font-medium"
                              >Contact No</label
                            >
                          </div>
  
                          <input
                          v-model="mobile_number"
                            type="tel"
                            id="phone"
                            class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                            placeholder="0977*******"
                            pattern=""
                            required
                          />
                        </div>
                        <div>
                          <div class="mb-6">
                            <div class="flex justify-start items-start">
                              <label
                                for="email"
                                class="block mb-2 text-sm font-medium"
                                >Address</label
                              >
                            </div>
  
                            <input
                            v-model="address"
                              type="address"
                              id="address"
  
                              class="bg-gray-50 border pr-8 border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                              placeholder="masiwa city"
                              required
                            />
                          </div>
                        </div>
                      </div>
  
                      <div
                        class="flex items-start justify-start gap-6 flex-row row-span-2"
                      >
                        <div
                          class="flex flex-col col-span-2 justify-start items-start w-full"
                        >
                          <label
                            for="Password"
                            class="block mb-2 text-sm font-medium"
                            >New Password</label
                          >
                          <div class="mb-6">
                            <input
                              type="password"
                              id="password"
                              class="bg-gray-50 border justify-start items-start border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-[100%] p-2.5"
                              placeholder="•••••••••"
                              v-model="password"
                              required
                            />
                          </div>
                        </div>
  
                        <input
                          class="text-center justify-center my-auto flex w-full text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          aria-describedby="file_input_help"
                          id="file_input"
                          type="file"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-[10%] flex">
          <div class="w-1/2 flex justify-center items-center p-3">
            <button class="btn btn-primary rounded-xl w-full btn-md" @click="updateRes">
              Update
            </button>
          </div>
          <div class="w-1/2 flex justify-center items-center p-3">
            <button class="btn btn-primary rounded-xl w-full btn-md" @click="disable">
              <div v-if="status=='Enabled'" @click="disableEnable">Deactivate</div>
              <div v-if="status=='Disabled'" @click="disableEnable">Activate</div>

            </button>
          </div>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>awdawdawd</button>
      </form>
    </dialog>
 
  </template>
  <script setup>
  import { ref } from "vue";
  import axios from "axios";
  const dialog = ref();
  const props = defineProps({
    role: String,
    op_id: String,
    user_id: String,
    institution:String,
    first_name: String,
    last_name: String,
    number: String,
    email: String,
    city: String,
    address: String,
    res_id: String,
    image:String,
    status:String

  });

  const role = ref(props.role) ;
  const first_name = ref(props.first_name);
  const last_name = ref(props.last_name);
  const number = ref(props.number);
  const email = ref(props.email);
  const password = ref();

  const updateOp = () =>{
    updatePasswordOp();
    updateOperator();
    window.location.reload();

  }
  const updateOperator = async () =>{
    
    try {
      const updatedUserData = {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        mobile_number: number.value,
      };
      await axios.put(`http://localhost:8080/updateOperator/${props.op_id}`, updatedUserData);
      window.location.reload();

    } catch (error) {
      console.error('Error updating user:', error);
    }
  }

  const updatePasswordOp = async () => {
    try {
      const updatedUserData = {
        password: password.value,
      };
      await axios.put(`http://localhost:8080/updateUser/${props.user_id}`, updatedUserData);
      window.location.reload();

    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  
  const institution = ref(`${props.institution}`);
  const mobile_number = ref(`${props.number}`);
  const city = ref(`${props.city}`);
  const address = ref(`${props.address}`);

  const updateResponder = async () =>{
  
    try {
      const updatedUserData = {
        institution: institution.value,
        mobile_number: mobile_number.value,
        city: city.value,
        address: address.value,

      };
      await axios.put(`http://localhost:8080/updateResponder/${props.res_id}`, updatedUserData);
      window.location.reload();

    } catch (error) {
      console.error('Error updating user:', error);
    }
  }
  
  const updateRes = () => {
    updateResponder();
    updatePasswordOp();
    window.location.reload();

  }


  const disableEnable = async () => {
    if(props.status=='Enabled'){
      try {
      const updatedUserData = {
        status: 'Disabled'
      };
      await axios.put(`http://localhost:8080/disableUser/${props.user_id}`, updatedUserData);
      window.location.reload();

      } catch (error) {
        console.error('Error updating user:', error);
      }
    }
    else{
      try {
      const updatedUserData = {
        status: 'Enabled'
      };
      await axios.put(`http://localhost:8080/disableUser/${props.user_id}`, updatedUserData);
      window.location.reload();

      } catch (error) {
        console.error('Error updating user:', error);
      }
    }

  };


  </script>