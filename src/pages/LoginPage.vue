<template>
  <div class="flex bg-primary h-screen w-screen">
    <div class="h-screen w-[50%]">
      <div class="flex items-center justify-center h-screen">
        <img
          src="../assets/SWIFTAID_logo.png"
          alt="SwiftAid Logo"
          class="w-[50%]"
        />
      </div>
    </div>
    <div class="h-screen w-[50%]">
      <div class="flex justify-center items-center h-screen">
        <div class="w-[617px] h-[561px] bg-white rounded-2xl p-7 shadow-lg">
          <div class="mb-10 font-semibold text-primary cursor-pointer text-lg">
            Login
          </div>

          <div class="pl-7 pr-7">
            <div class="relative mb-6">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
              >
                <UserIcon class="h-9 w-9 text-gray-500" />
              </div>
              <input
                type="text"
                id="floating_outlined"
                class="pl-16 border-b-2 rounded-md block px-2.5 pb-2.5 pt-4 w-full text-lg text-black bg-transparent border-1 border-primary appearance-none dark:text-black dark:primary dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
              />
              <label
                for="floating_outlined"
                class="ml-12 absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >Username</label
              >
            </div>
            <div class="relative mb-6">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
              >
                <LockClosedIcon class="h-9 w-9 text-gray-500" />
              </div>
              <input
                type="password"
                id="floating_outlined2"
                class="pl-16 text-lg border-b-2 rounded-md block px-2.5 pb-2.5 pt-4 w-full text-gray-900 bg-transparent border-1 border-primary appearance-none dark:text-black dark:primary dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder=" "
              />
              <label
                for="floating_outlined2"
                class="ml-12 absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >Password</label
              >
            </div>

            <div class="relative mb-20">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
              >
                <UserGroupIcon class="h-9 w-9 text-gray-500" />
              </div>
              <select
                class="border-b-2 rounded-md block text-center px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-900 bg-transparent border-1 border-primary appearance-none dark:text-black dark:primary dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                name=""
                id=""
              >
                <option value="">Administrator</option>
                <option value="">Emergency Operator</option>
                <option value="">Emergency Responder Unit</option>
              </select>
            </div>

            <router-link class="" to="/operatorDashboard">
              <button
                class="w-full h-12 bg-primary text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
                type="submit"
              >
                Submit
              </button>
            </router-link>

            <div class="text-center">
              Forgot Password?
              <span class="hover:underline text-blue-500 cursor-pointer">
                Click Here</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useRoute } from "vue-router";
const route = useRoute();

import {
  UserIcon,
  LockClosedIcon,
  UserGroupIcon,
} from "@heroicons/vue/24/outline";
</script>

<style>
select {
  display: block;
  width: 100%;
  font-size: 1em;
  padding: 0.8rem 0.5rem;
  font-family: inherit;
  /** for the dropdown indicator */
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
}
</style>
