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
              <form class="max-w-sm mx-auto flex flex-col">
                <label
                  for="users"
                  class="mb-2 text-sm font-medium flex items-start"
                  >Select User to Add</label
                >
                <select
                  id="users"
                  class="bg-gray-50 border px-9 justify-start items-start border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  required
                >
                  <option disabled selected>Click to Select</option>
                  <option value="operator">System Operator</option>
                  <option value="responder">Emergency Responder</option>
                </select>
              </form>
              <div class="flex flex-row">
                <form class="max-w-sm mx-auto flex flex-col">
                  <label
                    for="department"
                    class="mb-2 text-sm font-medium flex items-start ml-6"
                    >if user is ERU, select department
                  </label>
                  <select
                    id="department"
                    class="bg-gray-50 border ml-4 border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    required
                  >
                    <option disabled selected>Click to Select</option>
                    <option value="operator">Fire Department</option>
                    <option value="responder">Search and Rescue Group</option>
                    <option value="responder">NGO</option>
                    <option value="responder">Private Sector</option>
                  </select>
                </form>
              </div>

              <div></div>
            </div>
          </div>
          <form>
            <div class="flex justify-start items-start">
              <label for="company" class="block mb-2 text-sm font-medium"
                >First Name</label
              >
            </div>

            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <input
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
                  type="tel"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
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
                    datepicker
                    datepicker-autohide
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>
              </div>
            </div>
            <div class="mb-6">
              <div class="flex justify-start items-start">
                <label for="email" class="block mb-2 text-sm font-medium"
                  >Email address</label
                >
              </div>

              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="john.doe@company.com"
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
            >
              Submit
            </button>
          </form>
        </div>

        <div class="flex w-[25%] mx-auto my-[10%] flex-col justify-center">
          <div class="text-md mb-5 text-bold">Click below to upload photo.</div>
          <label
            for="dropzone-file"
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
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Datepicker from "flowbite-datepicker/Datepicker";
import DateRangePicker from "flowbite-datepicker/DateRangePicker";
const datepicker = document.getElementById("datepickerId");
// new Datepicker(datepicker, {
//   // options
// });
</script>
