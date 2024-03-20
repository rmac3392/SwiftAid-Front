<template>
  <div class="flex bg-secondary h-screen w-screen">
    <div class="w-[20%] bg-primary h-screen">
      <div class="h-[25%] w-full flex items-center justify-center">
        <img class="w-80" src="../assets/SWIFTAID_+.png" alt="" />
      </div>
      <div
        class="h-[75%] w-full flex flex-col items-end text-3xl space-y-2 text-white font-medium"
      >
        <div
          :class="currentTab === 0 ? 'active-tab' : 'general-tab'"
          @click="currentTab = 0"
        >
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="view-dashboard" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Create User</div>
          </div>
        </div>

        <div
          :class="currentTab === 1 ? 'active-tab' : 'general-tab'"
          @click="currentTab = 1"
        >
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon
                class=""
                name="chart-bar-stacked"
                :width="65"
                :height="65"
              />
            </div>
            <div class="flex items-center">Manage User</div>
          </div>
        </div>

        <div
          :class="currentTab === 2 ? 'active-tab' : 'general-tab'"
          @click="currentTab = 2"
        >
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="logout" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Sign Out</div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[80%]">
      <div class="h-[13%] w-full p-5">
        <div class="flex w-full h-full bg-white rounded-lg shadow-xl">
          <div class="w-[77%] p-3">
            <div
              class="w-[100%] h-full rounded-xl text-primary font-semibold text-4xl flex items-center justify-start"
            >
              Welcome Back, {{ adminFirstName }}
            </div>
          </div>
          <div class="flex w-[23%]">
            <div class="w-[25%] flex items-center justify-end">
              <mdicon
                class="text-primary"
                name="account-circle"
                :width="70"
                :height="70"
              />
            </div>
            <div class="w-[75%]">
              <div
                class="pt-5 h-[50%] text-xl font-medium flex items-center justify-center text-primary"
              >
                <div>Administrator</div>
              </div>
              <div
                class="pb-5 h-[50%] text-l flex items-center justify-center text-primary"
              >
                Admin
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Current tab -->
      <Transition name="fade" mode="out-in">
        <AdminAddUser v-if="currentTab === 0" />
        <AdminManageUser v-else-if="currentTab === 1" />

        <AdminSignOutTab v-else-if="currentTab === 2" />
      </Transition>
    </div>
  </div>
</template>

<script setup>
import AdminAddUser from "../components/administratorTab/AdminAddUser.vue";
import AdminManageUser from "../components/administratorTab/AdminManageUser.vue";
import AdminSignOutTab from "../components/administratorTab/AdminSignOutTab.vue";

import { ref } from "vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useRouter } from "vue-router";

const currentTab = ref(0);
const router = useRouter();


onMounted(() => {
  adminAuth();
  initFlowbite();
});

const adminFirstName = ref();
const adminLastName = ref();


const adminAuth  = async () => {
  const admin = localStorage.getItem("adminAuth");
  if(!admin){
    router.push("/");
  }


  const response = await fetch (`http://localhost:8080/getAdmin`);
  const data = await response.json();

  for(var i = 0; i < data.length; i++){
    if(localStorage.getItem("admin_userId") == data[i].user_id){
      adminFirstName.value = data[i].first_name;
      adminLastName.value = data[i].last_name;

      break;
    }
  }
}

</script>
