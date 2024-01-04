<template>
  <div class="h-[85%] pt-3 w-full pb-3">
    <div class="flex w-full h-full bg-white rounded-lg shadow-xl p-5">
      <div class="w-[50%] space-y-2 pr-3">
        <div for="" class="w-full text-lg font-bold text-primary">
          Location :
        </div>
        <input
          type="text"
          class="bg-white w-full h-[12%] shadow-xl border-2 rounded-lg mb-4 border-gray-200 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] outline-none focus:ring-2 focus:ring-primary"
        />
        <div for="" class="w-full text-lg font-bold text-primary">
          Type of Emergency :
        </div>
        <input
          type="text"
          class="bg-white w-full h-[12%] shadow-xl border-2 rounded-lg mb-4 border-gray-200 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] outline-none focus:ring-2 focus:ring-primary"
        />
        <div for="" class="w-full text-lg font-bold text-primary">
          Additional Description :
        </div>
        <input
          type="text"
          class="bg-white w-full h-[12%] shadow-xl border-2 rounded-lg mb-4 border-gray-200 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] outline-none focus:ring-2 focus:ring-primary"
        />
        <div for="" class="w-full text-lg font-bold text-primary">
          Emergency Response Team :
        </div>
        <input
          type="text"
          class="bg-white w-full h-[12%] shadow-xl border-2 rounded-lg mb-4 border-gray-200 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] outline-none focus:ring-2 focus:ring-primary"
        />
        <div for="" class="w-full text-lg font-bold text-primary">
          Post Details :
        </div>
        <input
          type="text"
          class="bg-white w-full h-[19.5%] shadow-xl border-2 rounded-lg mb-4 border-gray-200 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      
      <div class="w-[50%] space-y-2 pl-3">
        <div for="" class="w-full text-lg font-bold text-primary">
          Scenario Report
        </div>
        <div
          class="flex items-center justify-center bg-white w-full h-[72%] shadow-xl border-2 rounded-lg mb-4 border-gray-200 p-5"
        >
        <div class="border-gray-200 border-2 h-full w-[75%] shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)]"></div>
      </div>

        <div class="w-full space-y-3 pt-3">
          <button
          class="w-full h-[3.5rem] bg-primary text-white rounded-lg font-semibold hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
          type="submit"
        >
          Send
        </button>
        <button
          class="w-full h-[3.5rem] bg-primary text-white rounded-lg font-semibold hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
          type="submit"
        >
          Cancel
        </button>
      </div>
        
      </div>
    </div>
  </div>
</template>
<script setup></script>
