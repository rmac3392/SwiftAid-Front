<template>
  <button
    class="btn btn-primary rounded-full btn-sm w-full"
    @click="dialog.showModal()"
  >
    View
  </button>
  <dialog ref="dialog" :id="id" class="modal">
    <div class="modal-box h-[650px] bg-secondary flex flex-col rounded-lg">
      <div class="w-full h-[90%] p-8 px-10 font-serif">
        <div class="bg-white h-full drop-shadow-lg shadow-lg py-8 px-10">
          <div class="h-[20%] flex">
            <div class="h-full w-[22%] flex items-center justify-center">
              <img src="../assets/ndrmc.png" alt="" />
            </div>
            <div
              class="h-full w-[56%] text-[0.55rem] flex flex-col items-center font-medium justify-center "
            >
              <div class="leading-[0.58rem]">Republic of the Philippines</div>
              <div class="leading-[0.58rem]">N.D.R.R.M.C</div>
              <div class="leading-[0.58rem]">SWIFTAID</div>
              <div class="leading-[0.58rem] font-bold">
                EMERGENCY DISPATCH CENTER
              </div>
              <div class="leading-[0.58rem]">Cebu City</div>
            </div>
            <div class="h-full w-[22%] flex justify-center items-center">
              <img src="../assets/SWIFTAID_logo.png" alt="" width="48" />
            </div>
          </div>
          <div class="h-[30%] text-[0.55rem]">
            <div class="font-bold">INCIDENT REPORT</div>
            <div class="pl-8 font-medium">
              <div class="flex">
                <div class="w-[30%]">EMERGENCY TYPE</div>
                <div class="w-[20%] text-center">:</div>
                <div class="w-[50%]">{{emergency}}</div>
              </div>
              <div class="flex">
                <div class="w-[30%]">RESPONDER</div>
                <div class="w-[20%] text-center">:</div>
                <div class="w-[50%]">
                  {{ responder && responder.length > 27 ? `${responder.substring(0, 24)}...` : responder }}
                </div>
                              </div>
              <div class="flex">
                <div class="w-[30%]">OPERATOR</div>
                <div class="w-[20%] text-center">:</div>
                <div class="w-[50%]"> {{operator}} </div>
              </div>
              <div class="flex">
                <div class="w-[30%]">DATE</div>
                <div class="w-[20%] text-center">:</div>
                <div class="w-[50%]">{{date}}</div>
              </div>
              <div class="flex">
                <div class="w-[30%]">TIME</div>
                <div class="w-[20%] text-center">:</div>
                <div class="w-[50%]">{{time}}</div>
              </div>
            </div>
            <hr class="border border-gray-800">
          </div>
          <div class="h-[40%]  pt-2 pl-8 font-medium text-[0.55rem]">
            <div class="leading-3"><Strong>User Description:</Strong> <p>{{description}}</p></div>
            <br>
            <div class="leading-3"><Strong>Additional Description:</Strong><p>{{additionalDescription}}</p></div>
            <br>
          </div>
          <div class="h-[10%] font-medium text-[0.55rem]">
            <div class="leading-[0.55rem] text-end font-bold">{{operator}}</div>
            <div class="leading-[0.55rem] text-end">Dispatch Operator</div>
          </div>
        </div>
      </div>

      <div class="h-[10%] flex">
        <div class="w-1/2 flex justify-center items-center p-3">
          <button class="btn btn-primary rounded-xl w-full btn-md">Send</button>
        </div>
        <div class="w-1/2 flex justify-center items-center p-3">
          <button class="btn btn-primary rounded-xl w-full btn-md">
            Print
          </button>
        </div>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
<script setup>
import { ref } from "vue";
const dialog = ref();
const props = defineProps({
  emergency : String,
  responder: String,
  description:String,
  additionalDescription:String,
  operator: String,
  date: String,
  time: String,
});
</script>
