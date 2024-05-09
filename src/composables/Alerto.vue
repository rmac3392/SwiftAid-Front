<template>
  <button class="btn btn-primary btn-sm w-full" @click="dialog.showModal()">
    Edit Account
  </button>
  <dialog ref="dialog" :id="id" class="modal">
    <div class="modal-box h-[300px] bg-white flex flex-col rounded-lg">
      <form method="dialog">
        <button class="btn btn-md btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <div>
        <div class="relative p-4 w-[100%] mt-[3%]">
          <div class="items-center justify-center flex mb-2">
            <mdicon
              class="text-red-600"
              name="AlertOutline"
              :width="65"
              :height="65"
            />
          </div>
          <div
            class="relative bg-white rounded-lg text-3xl font-bold text-red-600"
          >
            Emergency Alert
          </div>
          <p class="text-xl tracking-wider mt-5 font-medium">
            Please see the emergency report immediately!
          </p>
        </div>
      </div>
    </div>
  </dialog>
</template>
<script setup>
import { ref } from "vue";
const dialog = ref();
</script>