<template>
  <div class="flex bg-secondary h-screen w-screen" v-if="auth">
    <div class="w-[20%] bg-primary h-screen">
      <div class="h-[25%] w-full flex items-center justify-center">
        <img class="w-80" src="../assets/SWIFTAID_+.png" alt="" />
      </div>
      <div
        class="h-[75%] w-full flex flex-col items-end text-3xl space-y-2 text-white font-medium"
      >
        <div :class="tab === 0 ? 'active-tab' : 'general-tab'" @click="tab = 0">
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="view-dashboard" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Dashboard</div>
          </div>
        </div>

        <div :class="tab === 1 ? 'active-tab' : 'general-tab'" @click="tab = 1">
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon
                class=""
                name="account-multiple"
                :width="65"
                :height="65"
              />
            </div>
            <div class="flex items-center">Records</div>
          </div>
        </div>

        <div :class="tab === 2 ? 'active-tab' : 'general-tab'" @click="tab = 2">
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="help-box" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Help</div>
          </div>
        </div>

        <div :class="tab === 3 ? 'active-tab' : 'general-tab'" @click="tab = 3">
          <div class="flex gap-2 cursor-pointer">
            <div>
              <mdicon class="" name="logout" :width="65" :height="65" />
            </div>
            <div class="flex items-center">Sign Out</div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-[80%] p-5">
      <!-- User Information -->
      <div class="h-[11.5%] w-full pb-5">
        <div class="flex w-full h-full bg-white rounded-lg shadow-xl">
          <div class="w-[75%] p-3">
            <div
              class="w-[100%] h-full rounded-xl text-primary font-semibold text-4xl flex items-center justify-start"
            >
              <!-- Welcome Back, {{ institution }} -->
            </div>
          </div>
          <div class="flex w-[25%]">
            <div class="w-[25%] flex items-center">
              <img
                class="ml-[20%]"
                src="../../src/assets/logo.png"
                alt="logo"
              />
            </div>
            <div class="w-[75%]">
              <div
                class="pt-5 h-[50%] text-xl font-bold flex items-center justify-center text-primary"
              >
                <div>{{institution}}</div>
              </div>
              <div
                class="pb-5 h-[50%] text-l flex font-500 items-center justify-center text-primary [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
              >
                Responder Unit
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- This is the admin dashbard page -->
      <ResponderDashboardTab v-if="tab === 0" />
      <ResponderRecordTab v-else-if="tab === 1" />
      <ResponderHelpTab v-else-if="tab === 2" />
      <ResponderSignOutTab v-else-if="tab === 3" />
    </div>
  </div>
  <div v-else class="flex justify-center items-center h-48">
    <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
    <div class="ml-4 text-purple-500">Loading...</div>
  </div>
</template>

<script setup>
import ResponderDashboardTab from "../components/responderTab/ResponderDasboardTab.vue";
import ResponderRecordTab from "../components/responderTab/ResponderRecordTab.vue";
import ResponderSignOutTab from "../components/responderTab/ResponderSignOutTab.vue";
import ResponderHelpTab from "../components/responderTab/ResponderHelpTab.vue";
import { ref , onMounted} from "vue";
import { useRouter} from "vue-router";

const auth = ref();
auth.value = localStorage.getItem("responderAuth");

const tab = ref(0);
const institution = ref();
const router = useRouter();


onMounted(() => {
  responderAuth();
});


const responderAuth  = async () => {
  const responder = localStorage.getItem("responderAuth");
  if(!responder){
    router.push("/");
  }

  const response = await fetch (`http://localhost:8080/getResponder`);
  const data = await response.json();

  for(var i = 0; i < data.length; i++){
    if(localStorage.getItem("responder_userId") == data[i].user_id){
      institution.value = data[i].institution;
      break;    
    }
  }
}













</script>
