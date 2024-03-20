<template>
  <div
    class="flex w-[75%] bg-gray-100 rounded-lg items-center justify-center mx-auto my-auto border-2 border-primary text-primary font-500 drop-shadow-lg"
  >
    <div class="text-center w-full my-auto">
      <div class="text-2xl my-5">
        Please fill out the form below to create user*
      </div>

      <div
        class="flex flex-row row-span-2 bg-secondary w-[90%] h-[] mx-auto rounded-lg mb-8"
      >
        <div class="w-[50%] h-[80%] my-[5%] mx-[5%]">
          <div class="flex justify-start items-start my-5">
            <div class="flex flex-row">
              <div class="max-w-sm mx-auto flex flex-col">
                <label
                  for="users"
                  class="mb-2 text-sm font-medium flex items-start"
                  >Select User to Add</label
                >
                <select
                  v-model="selected_userToAdd"
                  id="users"
                  class="bg-gray-50 border px-9 justify-start items-start border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  required
                  @change="selectedUser"
                >
                  <option disabled selected>Click to Select</option>
                  <option value="Operator">System Operator</option>
                  <option value="Responder">Emergency Responder</option>
                </select>
              </div>
              <div class="flex flex-row">
                <div class="max-w-sm mx-auto flex flex-col">
                  <label v-if="selected_userToAdd===`Responder`"
                    for="department"
                    class="mb-2 text-sm font-medium flex items-start ml-6"
                    >if user is ERU, select department
                  </label>
                  
                  <select v-if="selected_userToAdd===`Responder`"
                  v-model="department"
                    id="department"
                    class="bg-gray-50 border ml-4 border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    required
                  >
                    <option disabled selected>Click to Select</option>
                    <option value="fire">Fire Department</option>
                    <option value="search_rescue">Search and Rescue Group</option>
                    <option value="ngo">NGO</option>
                    <option value="privatre">Private Sector</option>
                  </select>
                </div>
              </div>

              <div></div>
            </div>
          </div>

          <!-- START OF OPERATOR -->

          <div v-if="selected_userToAdd==`Operator`">
            <div class="flex justify-start items-start">
              <label for="company" class="block mb-2 text-sm font-medium"
                >First Name</label
              >
            </div>

            <div class="grid gap-6 mb-6 md:grid-cols-2">
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

              <div class="mt-[-13%]">
                <label
                  for="company"
                  class="mb-2 text-sm font-medium justify-start items-start flex"
                  >Last Name</label
                >
                <input
                  v-model="last_name"
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Doe"
                  required
                />
              </div>
              <!-- GENDER -->
              <select
              v-model="gender"
              id="gender"
              class="bg-gray-50 border ml-4 border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              required
            >
              <option disabled selected>Click to Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>

            </select>

            <div class="mt-[-13%]">
              <label
                for="company"
                class="mb-2 text-sm font-medium justify-start items-start flex"
                >Address</label
              >
              <input
                v-model="address"
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="Doe"
                required
              />
            </div>
              <div>
                <div class="flex justify-start items-start">
                  <label for="phone" class="block mb-2 text-sm font-medium"
                    >Phone number</label
                  >
                </div>

                <input
                v-model="mobile_number"

                  type="tel"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="09*********"

                  required
                />
              </div>

              <div>
                <div class="flex justify-start items-start">
                  <label for="visitors" class="block mb-2 text-sm font-medium"
                    >Birth Date</label
                  >
                </div>

                <div class="relative max-w-sm">
                  <div
                    class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                  >
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                      />
                    </svg>
                  </div>
                  <input
                  v-model="birthdate"
                    type="date"
                    class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>
              </div>
            </div>
            <div class="mb-6">
              <div class="flex justify-start items-start">
                <label for="email" class="block mb-2 text-sm font-medium"
                  >Email Address</label
                >
              </div>

              <input
              v-model="email"
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="john.doe@company.com"
                required
              />
            </div>

            <div class="flex justify-start items-start">
              <label for="company" class="block mb-2 text-sm font-medium"
                >Username</label
              >
            </div>

              <div>
                <input
                  v-model="username"
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>

            <div
              class="flex items-start justify-start gap-5 flex-row row-span-2"
            >
              <div class="flex flex-col col-span-2 justify-start items-start">
                <label for="Password" class="block mb-2 text-sm font-medium"
                  >Password</label
                >
                <div class="mb-6">
                  <input
                  v-model="password"
                    type="password"
                    id="password"
                    class="bg-gray-50 pr-20 border justify-start items-start border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="•••••••••"
                    required
                  />
                </div>
              </div>

              <div class="flex flex-col col-span-2 justify-start items-start">
                <label for="Password" class="block mb-2 text-sm font-medium"
                  >Confirm password</label
                >
                <div class="mb-6">
                  <input
                  v-model="confirm_password"
                    type="password"
                    id="confirm_password"
                    class="bg-gray-50 border pr-20 border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="•••••••••"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary"
                  required
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium dark:text-gray-300"
                >I agree with the
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-primary"
                  >terms and conditions</a
                >.</label
              >
            </div>

            <button
              type="submit"
              class="text-white flex justify-start items-start my-5 px-8 bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto s py-2.5 text-center"
              @click="submitOperator()"
              >
              Submit
            </button>
            {{ errorMessage }}
          </div>
          <!-- END OF OPERATOR -->

          <!-- START OF RESPONDER -->
          <div v-if="selected_userToAdd==`Responder`">
            <div class="flex justify-start items-start">
              <label for="company" class="block mb-2 text-sm font-medium"
                > Institution</label
              >
            </div>

            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <input
                v-model="institution"
                  type="text"
                  id="institution"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>



              <div class="mt-[-13%]">
                <label
                  for="company"
                  class="mb-2 text-sm font-medium justify-start items-start flex"
                  >City</label
                >
                <input
                v-model="city"
                  type="text"
                  id="city"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Doe"
                  required
                />
              </div>

              <div class="mt-[-13%]">
                <label
                  for="company"
                  class="mb-2 text-sm font-medium justify-start items-start flex"
                  >Address</label
                >
                <input
                v-model="address"
                  type="text"
                  id="address"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Doe"
                  required
                />
              </div>

              <div>
                <div class="flex justify-start items-start">
                  <label for="phone" class="block mb-2 text-sm font-medium"
                    >Phone number</label
                  >
                </div>

                <input
                v-model="mobile_number"
                  type="tel"
                  id="mobile_number"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>

              <div>
                <div class="flex justify-start items-start">
                  <label for="phone" class="block mb-2 text-sm font-medium"
                    >Zip Code</label
                  >
                </div>

                <input
                v-modle="zipcode"
                  type="tel"
                  id="zipcode"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="flex justify-start items-start">
                <label for="email" class="block mb-2 text-sm font-medium"
                  >Email address</label
                >
              </div>

              <input
              v-model="email"
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div class="flex justify-start items-start">
              <label for="company" class="block mb-2 text-sm font-medium"
                >Username</label
              >
            </div>

              <div>
                <input
                  v-model="username"
                  type="text"
                  id="username"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>

            <div
              class="flex items-start justify-start gap-5 flex-row row-span-2"
            >
              <div class="flex flex-col col-span-2 justify-start items-start">
                <label for="Password" class="block mb-2 text-sm font-medium"
                  >Password</label
                >
                <div class="mb-6">
                  <input
                  v-model="password"
                    type="password"
                    id="password"
                    class="bg-gray-50 pr-20 border justify-start items-start border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="•••••••••"
                    required
                  />
                </div>
              </div>

              <div class="flex flex-col col-span-2 justify-start items-start">
                <label for="Password" class="block mb-2 text-sm font-medium"
                  >Confirm password</label
                >
                <div class="mb-6">
                  <input
                  v-model="confirm_password"

                    type="password"
                    id="confirm_password"
                    class="bg-gray-50 border pr-20 border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="•••••••••"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary"
                  required
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium dark:text-gray-300"
                >I agree with the
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-primary"
                  >terms and conditions</a
                >.</label
              >
            </div>

            <button
            @click="submitResponder"
              type="submit"
              class="text-white flex justify-start items-start my-5 px-8 bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto s py-2.5 text-center"
            >
              Submit
            </button>
            {{ errorMessage }}

          </div>
                    <!-- END OF RESPONDER -->

        </div>

        <div v-if="selected_userToAdd" class="flex w-[25%] mx-auto my-[10%] flex-col justify-center">
          <div class="text-md mb-5 text-bold">Click below to upload photo.</div>
          <label
            for="image"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-primary border-dashed rounded-lg cursor-pointer bg-gray-100"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="image" type="file" class="hidden" @change="handleFileImage($event)"/>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import  axios  from "axios";  

const selected_userToAdd= ref();

const image=ref(null);
const first_name = ref();
const last_name = ref();
const gender = ref();
const address = ref();
const mobile_number = ref();
const birthdate = ref();
const email = ref();
const username = ref();
const password = ref();
const confirm_password=ref();
const institution = ref();
const city=ref();
const zipcode = ref();
const department = ref();

const errorMessage = ref();


const handleFileImage = (event) => {
  const file = (event.target.files || [])[0];
  if (file) {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      console.log("Invalid file type. Please upload an image.");
      return;
    }

    image.value = file;
    console.log("File uploaded:", file.name);
  }
};


const submitOperator = async () => {
  try {
    const formData = new FormData();
    
    if(password.value!=confirm_password.value){
      errorMessage.value = "Passwords do not match";
    } 
    else{
      formData.append("first_name",first_name.value);
      formData.append("last_name",last_name.value);
      formData.append("gender",gender.value);
      formData.append("address",address.value);
      formData.append("mobile_number",mobile_number.value);
      formData.append("birthdate",birthdate.value);
      formData.append("email",email.value);
      formData.append("username",username.value);
      formData.append("password",password.value);
      formData.append("image",image.value);
      
      const response = await axios.post("http://localhost:8080/addOperator",formData,{
      headers: {
        "Content-Type" : "multipart/form-data",
        },
      });
    }



  }
  catch(error){
    if(!image.value){
      errorMessage.value = "Insert Image!"
    }
    console.log("Error:",error);
  }


}

const submitResponder = async() => {

  try {
    const formData = new FormData();

    if(password.value!=confirm_password.value){
      errorMessage.value = "Passwords do not match";
    }
    else{
      formData.append("department",department.value);
      formData.append("institution",institution.value);
      formData.append("city",city.value);
      formData.append("address",address.value);
      formData.append("mobile_number",mobile_number.value);
      formData.append("zipcode",zipcode.value);
      formData.append("email",email.value);
      formData.append("username",username.value);
      formData.append("password",password.value);
      formData.append("image",image.value);

      const response = await axios.post("http://localhost:8080/addResponder",formData,{
        headers: {
          "Content-Type" : "multipart/form-data",
        },
      });
      
    }




  }
  catch(error){
    if(!image.value){
      errorMessage.value = "Insert Image!"
    }
    console.log("Error:",error);
  }
}


</script>
