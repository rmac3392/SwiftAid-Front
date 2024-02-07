<template>
  <div
    class="h-[95%] w-full rounded-md border-2 border-stroke rounded-tl-none p-6 space-y-3"
  >
    <div>
      <label for="">First Name</label>
      <input type="text" class="border border-stroke rounded-md h-8 w-full" />
    </div>
    <div>
      <label for="">last Name</label>
      <input type="text" class="border border-stroke rounded-md h-8 w-full" />
    </div>
    <div>
      <label for="">Gender</label>
      <div class="flex gap-2">
        <input type="radio" name="" id="male" />
        <label for="">Male</label>
        <input type="radio" name="" id="female" />
        <label for="">Female</label>
      </div>
    </div>
    <div>
      <label for="">Email</label>
      <input type="email" class="border border-stroke rounded-md h-8 w-full" />
    </div>
    <div>
      <label for="">Password</label>
      <input
        type="password"
        class="border border-stroke rounded-md h-8 w-full"
      />
    </div>
    <button
      class="w-full h-12 bg-primary text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
      type="submit"
    >
      Cancel
    </button>
    <button
      class="w-full h-12 bg-primary text-white rounded-lg font-semibold mb-2 hover:bg-white hover:text-primary hover:border-primary border-primary border-2 transition duration-300"
      type="submit"
    >
      Submit
    </button>
  </div>
</template>
<script setup></script>
