<template>
  <div>
    <div
      class="flex items-center drop-shadow-lg justify-center mx-auto w-[90%] h-[65px] border-2 my-5 bg-gray rounded-xl border-white shadow-xl hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.70)] hover:scale-[1.02] p-2"
    >
      <div class="w-[18%]">
        <div
          class="flex items-center justify-center bg-red-400 rounded-full h-10 w-10"
        >
          <mdicon class="text-white" name="fire" :width="30" :height="30" />
        </div>
      </div>
      <div
        class="w-[53%] mr-[4%] text-center font-semibold text-lg cursor-pointer flex"
      >
        <div class="text-black flex">{{ location }}</div>
      </div>
      <div class="w-[29%]">
        <button
          class="flex justify-center items-center h-11 w-full p-1 bg-primary text-white rounded-full font-semibold hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
        >
          <div class="mr-[1px]">
            <mdicon class="" name="pencil" :width="15" :height="15" />
          </div>
          Manage
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  location: String,
});
</script>
