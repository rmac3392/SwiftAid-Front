<template>
    <div class="h-screen hidden print:block text-gray-900 ">
        <div class="w-full h-full  bg-white z-10">
        <div class=" h-full p-8 ">
          <div class="h-[15%] flex font-serif">
            <div class="h-full w-[22%] flex items-center justify-center">
              <img src="../assets/ndrmc.png" alt="" width="200"/>
            </div>
            <div
              class="h-full w-[56%] text-sm flex flex-col items-center font-medium justify-center"
            >
              <div class="leading-4">Republic of the Philippines</div>
              <div class="leading-4">N.D.R.R.M.C</div>
              <div class="leading-4">SWIFTAID</div>
              <div class="leading-4 font-bold">
                EMERGENCY DISPATCH CENTER
              </div>
              <div class="leading-4">Cebu City</div>
            </div>
            <div class="h-full w-[22%] flex justify-center items-center">
              <img src="../assets/SWIFTAID_logo.png" alt="" width="100" />
            </div>
          </div>
          <div class="h-[30%] text-sm ">
            <div class="font-bold leading-10">INCIDENT REPORT</div>
            <div class="pl-8 font-medium">
              <div class="flex leading-10">
                <div class="w-[30%]">EMERGENCY TYPE</div>
                <div class="w-[20%] text-center">:</div>
                <div class="w-[50%]">{{ emergency }} Fire</div>
              </div>
              <div class="flex leading-10">
                <div class="w-[30%]">RESPONDER</div>
                <div class="w-[20%] text-center">:</div>
                <div class="w-[50%]">BFP region VII</div>
              </div>
              <div class="flex leading-10">
                <div class="w-[30%]">OPERATOR</div>
                <div class="w-[20%] text-center">:</div>
                <div class="w-[50%]">Ryan James Macawili</div>
              </div>
              <div class="flex leading-10">
                <div class="w-[30%]">DATE</div>
                <div class="w-[20%] text-center">:</div>
                <div class="w-[50%]">{{ date }}May 09 2024</div>
              </div>
              <div class="flex leading-10">
                <div class="w-[30%]">TIME</div>
                <div class="w-[20%] text-center">:</div>
                <div class="w-[50%]">{{ time }}9:00 am</div>
              </div>
            </div>
            <br>
            <hr class="border  border-gray-800" />
          </div>
          <div class="h-[40%]   font-medium text-sm">
            <div class="">
              <Strong class=" leading-8">POST DESCRIPTION :</Strong>
              
              <p>{{ description }}</p>
              <p class="pl-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum, a pariatur voluptatum adipisci excepturi voluptates! Vitae fuga minus sapiente odit aut velit dignissimos modi, blanditiis corrupti fugit neque exercitationem.</p>
            </div>
            <br />
            <div class="">
              <Strong class="leading-8">ADDITIONAL DESCRIPTION :</Strong>
              <p>{{ additionalDescription }}</p>

              <p class="pl-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ad praesentium a. Non, adipisci, doloremque eveniet impedit culpa voluptas, itaque facilis alias fugiat iure voluptatum deleniti praesentium eaque excepturi nihil.</p>
            </div>
            <br />
            <div class="">
                <Strong class="leading-8">Additional Description:</Strong>
              <p class="pl-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut fugiat illum quae accusamus, eum dolor! Maiores atque magni fugiat hic esse animi tenetur asperiores, consequatur culpa ullam vel tempore!</p>
            </div>
          </div>
          <div class="h-[10%] font-medium text-sm">
            <div class=" text-end font-bold">
              RYAN JAMES MACAWILI
            </div>
            <div class="leading-4 text-end">Dispatch Operator</div>
          </div>
        </div>
        </div>
    </div>
</template>

<style>
@media print {
  .print\:block { display: block !important; }
  
}
</style>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  emergency: String,
  responder: String,
  description: String,
  additionalDescription: String,
  operator: String,
  date: String,
  time: String,
});

onMounted(() => {
  setTimeout(() => {
    window.print();
     window.close();
  }, 2000); // Delay for 500 milliseconds
});
</script>