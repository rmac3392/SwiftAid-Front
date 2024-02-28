<template>
  <div class="flex h-[87%] w-full p-24 pl-32 pr-32 rounded-lg">
    <div class="h-full flex bg-white w-full rounded-lg shadow-xl">
      <div class="w-[10%] flex h-full bg-primary rounded-lg">
        <div
          class="w-[90%] bg-primary h-full rounded-lg text-white flex flex-col justify-center gap-y-16 pb-5"
        >
          <div class="flex items-center justify-center col-span-5">
            <mdicon
              class=""
              name="arrow-right-drop-circle"
              :width="50"
              :height="50"
            />
          </div>
          <div class="flex items-center justify-center">
            <mdicon
              class=""
              name="clipboard-account"
              :width="50"
              :height="50"
            />
          </div>
          <div class="flex items-center justify-center my-">
            <mdicon class="" name="cog" :width="50" :height="50" />
          </div>
          <!-- <div class="flex items-center justify-center">
              <mdicon class="" name="update" :width="50" :height="50" />
            </div> -->
        </div>
        <div class="w-[3%] bg-white h-full"></div>
        <div class="w-[7%] bg-primary"></div>
      </div>
      <div
        class="w-[90%] h-full bg-white rounded-lg pt-7 pb-32 text-primary font-semibold text-4xl"
      >
        <div
          class="flex items-center justify-start h-1/5 mx-5 border-b-2 border-primary"
        >
          SwiftAid Help Center
        </div>
        <div
          class="flex items-center justify-start h-1/5 px-5 my-5 hover:bg-secondary cursor-pointer"
        >
          Getting Started
        </div>
        <div
          class="flex items-center justify-start h-1/5 px-5 my-5 hover:bg-secondary cursor-pointer"
        >
          Contact Us
        </div>
        <div
          class="flex items-center justify-start h-1/5 px-5 my-5 hover:bg-secondary cursor-pointer"
        >
          Options
        </div>

        <!-- Remove check for Updates -->

        <!-- <div
            class="h-1/5 flex items-center justify-start px-5 my-5 hover:bg-secondary cursor-pointer"
          >
            Check for updates
          </div> -->
      </div>
    </div>
  </div>
</template>
<script></script>
