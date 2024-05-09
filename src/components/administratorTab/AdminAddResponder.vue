<template>
  <div
    class="flex w-[75%] rounded-lg items-center justify-center mx-auto my-auto text-primary font-500 drop-shadow-lg"
  >
    <div class="text-center w-full my-auto h-[800px]">
      <div
        class="text-3xl font-black bg-white w-[78%] py-5 mx-auto tracking-wider absolute left-[9%] top-[5%]"
      >
        RESPONDER UNIT ACCOUNT CREATION
      </div>
      <div
        class="flex flex-row row-span-2 w-[90%] h-[80%] mx-auto rounded-lg mt-[13%]"
      >
        <div class="w-[50%] h-[100%] my-[2%] mx-[5%]">
          <div class="flex justify-start items-start my-5">
            <div class="flex flex-row gap-5">
              <div class="flex flex-row items-center justify-center">
                <div class="mx-auto flex flex-col w-full">
                  <label
                    v-if="selected_userToAdd === 'Responder'"
                    for="department"
                    class="mb-2 text-sm font-medium flex items-start"
                    >Please Select Department</label
                  >

                  <select
                    v-if="selected_userToAdd === 'Responder'"
                    v-model="department"
                    id="department"
                    class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-[250px] p-2.5"
                    required
                  >
                    <option disabled selected>Click to Select</option>
                    <option value="fire_station">Fire Department</option>
                    <option value="police">Police Department</option>
                    <option value="hospital">Hospital Department</option>
                  </select>
                </div>
              </div>
              <div class="flex-col flex absolute w-[250px] left-[33%] gap-1.5">
                <div class="flex justify-start items-start">
                  <label for="company" class="block text-sm font-medium">
                    Institution</label
                  >
                </div>

                <input
                  v-model="institution"
                  type="text"
                  id="institution"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Private Sector"
                  required
                />
              </div>
            </div>
          </div>

          <!-- START OF RESPONDER -->
          <div v-if="selected_userToAdd == `Responder`">
            <div class="mb-6 flex flex-row gap-5 w-[100%]">
              <div class="w-full">
                <label
                  for="company"
                  class="text-sm font-medium justify-start items-start flex"
                  >Address</label
                >
                <input
                  v-model="address"
                  type="text"
                  id="address"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Sanciangko Street Cebu City"
                  required
                />
              </div>
              <div class="grid gap-5 w-full">
                <div class="w-full">
                  <label
                    for="company"
                    class="mb-1 text-sm font-medium justify-start items-start flex"
                    >City</label
                  >
                  <select
                    v-if="selected_userToAdd === 'Responder'"
                    v-model="city"
                    id="department"
                    class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-[250px] p-2.5"
                    required
                  >
                    <option disabled selected>Click to Select</option>
                    <option value="Cebu">Cebu</option>
                    <option value="Talisay">Talisay</option>
                    <option value="Pardo">Pardo</option>
                    <option value="Mandaue">Mandaue</option>
                    <option value="Lapu-Lapu">Lapu-Lapu</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="flex flex-row w-[100%] gap-5">
              <div class="flex flex-col w-[50%]">
                <div class="flex justify-start items-start">
                  <label for="company" class="block mb-2 text-sm font-medium"
                    >Username</label
                  >
                </div>
                <input
                  v-model="username"
                  type="text"
                  id="username"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>
              <div class="w-[50%]">
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
                  placeholder="09*********"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
            </div>

            <div
              class="flex items-start justify-start gap-5 flex-row row-span-2 mt-[4%]"
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

            <div class="flex items-start mb-6"></div>

            <!-- <button
              @click="submitResponder"
              type="submit"
              class="text-white flex justify-start items-start my-5 px-8 bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto s py-2.5 text-center"
            >
              Submit
            </button> -->

            <Buttons
              class="w-[25%]"
              @click="submitResponder()"
              buttonName="Submit"
            />
            {{ errorMessage }}
          </div>
          <!-- END OF RESPONDER -->
        </div>

        <div
          v-if="selected_userToAdd"
          class="flex w-[23%] mx-auto mt-[-20%] flex-col justify-center"
        >
          <div class="text-md mb-5 text-bold">Click below to upload photo.</div>
          <label
            for="image"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-primary border-dashed cursor-pointer bg-gray-100"
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
            <input
              id="image"
              type="file"
              class="hidden"
              @change="handleFileImage($event)"
            />
          </label>
        </div>
      </div>
    </div>
    <dialog
      v-if="isClicked == true"
      id="my_modal_3"
      class="modal"
      ref="myModal"
    >
      <div class="modal-box">
        <form method="dialog">
          <button
            class="btn btn-md btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div class="p-4 md:p-5 text-center">
          <!-- Updated SVG Icon -->
          <svg
            class="mx-auto mb-4 text-primary w-16 h-16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>

          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Submit application for
            <span class="text-primary font-bold">Responder Unit</span>
            account?
          </h3>
          <div class="flex flex-row items-center justify-center">
            <button
              type="button"
              class="text-white bg-primary hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-dark font-medium rounded-lg text-sm inline-flex items-center px-6 py-3"
            >
              Yes, I'm sure
            </button>
            <form method="dialog">
              <button
                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                No, Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  </div>




</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Buttons from "../../composables/Buttons.vue";
import axios from "axios";




const selected_userToAdd = ref('Responder');

const image = ref(null);
const first_name = ref();
const last_name = ref();
const gender = ref();
const address = ref();
const mobile_number = ref();
const birthdate = ref();
const email = ref();
const username = ref();
const password = ref();
const confirm_password = ref();
const institution = ref();
const city = ref();
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

    if (password.value != confirm_password.value) {
      errorMessage.value = "Passwords do not match";
    } else {
      formData.append("first_name", first_name.value);
      formData.append("last_name", last_name.value);
      formData.append("gender", gender.value);
      formData.append("address", address.value);
      formData.append("mobile_number", mobile_number.value);
      formData.append("birthdate", birthdate.value);
      formData.append("email", email.value);
      formData.append("username", username.value);
      formData.append("password", password.value);
      formData.append("image", image.value);

      const response = await axios.post(
        "http://localhost:8080/addOperator",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    }
  } catch (error) {
    if (!image.value) {
      errorMessage.value = "Insert Image!";
    }
    console.log("Error:", error);
  }
};

const submitResponder = async () => {
  try {
    const formData = new FormData();
    submitResponderUnit();

    if (password.value != confirm_password.value) {
      errorMessage.value = "Passwords do not match";
    } else {
      formData.append("department", department.value);
      formData.append("institution", institution.value);
      formData.append("city", city.value);
      formData.append("address", address.value);
      formData.append("mobile_number", mobile_number.value);
      formData.append("zipcode", zipcode.value);
      formData.append("email", email.value);
      formData.append("username", username.value);
      formData.append("password", password.value);
      formData.append("image", image.value);

      const response = await axios.post(
        "http://localhost:8080/addResponder",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.location.reload();

    }
  } catch (error) {
    if (!image.value) {
      errorMessage.value = "Insert Image!";
    }
    console.log("Error:", error);
  }
};

const submitResponderUnit = async () => {
  try {
    const formData = new FormData();

    if (password.value != confirm_password.value) {
      errorMessage.value = "Passwords do not match";
    } else {
      formData.append("name", institution.value);
      formData.append("location", city.value);
      formData.append("phone_number", mobile_number.value);
      formData.append("type", department.value);

      const response = await axios.post(
        "http://localhost:8080/addResponderUnit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    }
  } catch (error) {
    if (!image.value) {
      errorMessage.value = "Insert Image!";
    }
    console.log("Error:", error);
  }
};


onMounted(() => {
});
</script>
