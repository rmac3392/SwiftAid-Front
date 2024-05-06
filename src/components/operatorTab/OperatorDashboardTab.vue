<template>
  <div class="flex h-[87%] w-full">
    <div class="w-[100%] h-full pl-3 pr-5 pb-2 flex gap-2">
      <div
        class="w-[30%] h-full pl-3 pr-3 pb-3 bg-gray-100 border-2 border-white rounded-lg drop-shadow-lg ml-2"
      >
        <div
          class="text-primary font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-xl flex text-center justify-center items-center my-7"
        >
          Emergency Departments
        </div>
        <Alert
          v-for="(post, index) in newPost"
          :key="index"
          :id="post.id"
          :city="post.city"
          :location="post.city"
          button-alert="Details"
          @click="getPostDetails(post.id)"
        />
      </div>

      <div class="w-[70%] h-[80%] pl-3">
        <div
          class="flex h-[15%] w-[100%] items-end rounded-lg mb-4 drop-shadow-lg gap-6 ml-[-1%]"
        >
          <div
            class="flex h-full w-[25%] text-primary flex-col justify-center items-center"
          >
            <div
              class="bg-gray-100 py-5 rounded-lg border-2 border-white drop-shadow-lg px-6 justify-center items-center flex"
            >
              <div
                class="flex items-end justify-end w-[60%] mr-[-55%] mt-[-36%] absolute z-20"
              >
                <Notifications :notif="sentCount" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
                <mdicon
                  class="origin-center"
                  name="ProgressUpload"
                  :width="40"
                  :height="40"
                />
                <div
                  class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                >
                  Sent Reports
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex h-full w-[26%] text-primary flex-col gap-2 justify-center items-center"
          >
            <div
              class="bg-gray-100 py-5 rounded-lg border-2 border-white drop-shadow-lg px-4 ml-[-9%] justify-center items-center flex"
            >
              <div
                class="flex items-end justify-end w-[50%] mr-[-63%] mt-[-30%] absolute z-20"
              >
                <Notifications :notif="cancelledCount" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
                <mdicon
                  class="origin-center"
                  name="ProgressClose"
                  :width="40"
                  :height="40"
                />
                <div
                  class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                >
                  Cancelled Reports
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex h-full w-[23%] text-primary flex-col gap-2 justify-center items-center"
          >
            <div
              class="bg-gray-100 py-5 rounded-lg border-2 border-white drop-shadow-lg px-5 ml-[-9%] justify-center items-center flex"
            >
              <div
                class="flex items-end justify-end w-[60%] mr-[-55%] mt-[-36%] absolute z-20"
              >
                <Notifications :notif="acknowledgedCount" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
                <mdicon
                  class="origin-center"
                  name="ProgressCheck"
                  :width="40"
                  :height="40"
                />
                <div
                  class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                >
                  Acknowledge
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex h-full w-[19%] text-primary flex-col gap-2 justify-center items-center"
          >
            <div
              class="bg-gray-100 py-5 rounded-lg border-2 border-white drop-shadow-lg px-8 ml-[-9%] justify-center items-center flex"
            >
              <div
                class="flex items-end justify-end w-[68%] mr-[-50%] mt-[-42%] absolute z-20"
              >
                <Notifications :notif="pendingCount" />
              </div>
              <div class="flex flex-row gap-2 justify-center items-center">
                <mdicon
                  class="origin-center"
                  name="ProgressQuestion"
                  :width="40"
                  :height="40"
                />
                <div
                  class="text-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                >
                  Pending
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[100%] h-[107%] rounded-lg flex bg-gray-100">
          <EditReportPane
            v-model:additionalDescription="additionalDescription"
            v-model:snr="snr"
            v-model:fire_department="fire_department"
            v-model:ngo="ngo"
            v-model:private_sector="private_sector"
            v-model:baranggay_tanod="baranggay_tanod"
            :postDetails="postDetails"
            :zipcode="postZipcode"
            :address="postAddress"
            :city="postCity"
            :emergency_type="postTypeOfEmergency"
            :emergency_team="postEmergencyTeam"
          />
          <div
            class="w-[100%] border-2 border-white bg-gray-100 rounded-r-lg drop-shadow-lg"
          >
            <span
              class="text-primary font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-lg flex text-center my-5 ml-5"
              >Scenario Report
            </span>

            <div class="my-8 rounded-lg w-[70%] mx-auto">
              <ScenarioReport
                :location="postLocation"
                :typeOfEmergency="postTypeOfEmergency"
                :subjectDescription="subjectDescription"
                :emergencyResponseTeam="postEmergencyTeam"
                :reportDate="reportDate"
                :reportTime="reportTime"
                :operatorName="operatorName"
                assignRole="Emergency Operator Office Department"
                responderDepartment="Pasil Fire Department"
              />
            </div>
            <div
              class="flex flex-row justify-center items-center w-[50%] gap-10 mx-auto"
            >
              <div class="w-[50%]">
                <Buttons buttonName="Send" @click="sendPost()" />
              </div>
              <div class="w-[50%]">
                <Buttons buttonName="Discard" @click="denyPost(postID)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</template>

<script setup>
import Alert from "../../composables/Alert.vue";
import Notifications from "../../composables/Notifications.vue";
import ScenarioReport from "../../composables/ScenarioReport.vue";
import EditReportPane from "../operatorPane/EditReportPane.vue";
import Buttons from "../../composables/Buttons.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

onMounted(() => {
  initializeDataFetching();
});
//Post Details references
const postID = ref();
const newPost = ref([]);
const postDetails = ref();
const postZipcode = ref();
const postAddress = ref();
const postCity = ref();
const postLocation = ref();
const postTypeOfEmergency = ref();
const postEmergencyTeam = ref();
const additionalDescription = ref();
//additional
const snr = ref();
const fire_department = ref();
const ngo = ref();
const private_sector = ref();
const baranggay_tanod = ref();

//Scenario report references
const subjectDescription = ref();
const reportDate = ref();
const reportTime = ref();
const operatorName = ref();
//Post count references
const sentCount = ref();
const pendingCount = ref();
const cancelledCount = ref();
const acknowledgedCount = ref();
sentCount.value = 0;
pendingCount.value = 0;
cancelledCount.value = 0;
acknowledgedCount.value = 0;

const getNewPosts = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/getPost`);
    const data = response.data;
    const lth = data.length;

    newPost.value = [];
    pendingCount.value = 0;
    sentCount.value = 0;
    acknowledgedCount.value = 0;
    cancelledCount.value = 0;

    for (var i = 0; i < lth; i++) {
      var id = data[i].post_id;
      var status = data[i].status;
      var details = data[i].description;
      var zipcode = data[i].zipcode;
      var address = data[i].address;
      var city = data[i].city;
      var emergency_type = data[i].emergency_type;
      var timestamp = data[i].timestamp;
      if (status == "pending") {
        newPost.value.push({
          id: id,
          details: details,
          zipcode: zipcode,
          address: address,
          city: city,
          emergency_type: emergency_type,
          timestamp: timestamp,
        });
        pendingCount.value++;
      } else if (status == "sent") {
        sentCount.value++;
      } else if (status == "acknowledged") {
        acknowledgedCount.value++;
      } else if (status == "cancelled") {
        cancelledCount.value++;
      }
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

const getPostDetails = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/getSinglePost/${id}`);
    const data = await response.json();
    const emergency_type = data[0].emergency_type;
    // date getter
    const timestamp = data[0].timestamp;
    const date = new Date(timestamp);
    let hour = date.getHours();
    const minute = date.getMinutes();
    const amPM = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;

    // Edit Post Details
    postID.value = id;
    postDetails.value = data[0].description;
    postZipcode.value = data[0].zipcode;
    postAddress.value = data[0].address;
    postCity.value = data[0].city;

    if (emergency_type == "fire") {
      postTypeOfEmergency.value = `Fire Incident`;
      postEmergencyTeam.value = `Fire Department`;
    }
    // Scenario Report

    postLocation.value = `${postAddress.value}, ${postCity.value}`;
    subjectDescription.value = `${postTypeOfEmergency.value} near ${postLocation.value}`;
    reportDate.value = `${date.toLocaleString("default", {
      month: "long",
    })} ${date.getDate()}, ${date.getFullYear()}`;
    reportTime.value = `${hour}:${minute} ${amPM}`;
    operatorName.value = localStorage.getItem("currentOperator");
  } catch (error) {
    console.log("Error:", error);
  }
};

const additionalResponseTeam = async () => {
  try {
    const formData = new FormData();
    if (postID.value) {
      formData.append("post_id", 1);
    } else {
      formData.append("post_id", 0);
    }
    if (snr.value) {
      formData.append("search_and_rescue", 1);
    } else {
      formData.append("search_and_rescue", 0);
    }
    if (fire_department.value) {
      formData.append("fire_department", 1);
    } else {
      formData.append("fire_department", 0);
    }
    if (ngo.value) {
      formData.append("ngo", 1);
    } else {
      formData.append("ngo", 0);
    }
    if (private_sector.value) {
      formData.append("private_sector", 1);
    } else {
      formData.append("private_sector", 0);
    }
    if (baranggay_tanod.value) {
      formData.append("baranggay_tanod", 1);
    } else {
      formData.append("baranggay_tanod", 0);
    }
    const response = await axios.post(
      "http://localhost:8080/addPostTeam",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    console.log("Error: ", error);
  }
};

const sendPost = async () => {
  try {
    const operatorUserID = localStorage.getItem("operator_userId");
    const response = await fetch("http://localhost:8080/getOperator");
    const data = await response.json();
    for (var i = 0; i < data.length; i++) {
      if (operatorUserID == data[i].user_id) {
        const operatorID = data[i].operator_id;
        await axios.put(`http://localhost:8080/updatePost/${postID.value}`, {
          responder_id: null,
          operator_id: operatorID,
          additional_description: additionalDescription.value,
          post_id: postID.value,
        });

        sentPost(postID.value);

        break;
      }
    }
  } catch (error) {
    console.error("Error acknowledging post:", error);
  }
};
const editPostLocation = async (id) => {
  try {
    const response = await axios.put(`http://localhost:8080/sendPost/${id}`);
    // window.location.reload();
  } catch (error) {
    console.error(
      "Error acknowledging post:",
      error.message || "Unknown error"
    );
  }
}
const sentPost = async (id) => {
  try {
    const response = await axios.put(`http://localhost:8080/sendPost/${id}`);
    // window.location.reload();
  } catch (error) {
    console.error(
      "Error acknowledging post:",
      error.message || "Unknown error"
    );
  }
};

const denyPost = async (id) => {
  try {
    const response = await axios.put(`http://localhost:8080/denyPost/${id}`);
    window.location.reload();
  } catch (error) {
    console.error(
      "Error acknowledging post:",
      error.message || "Unknown error"
    );
  }
};

//real time maker

const initializeDataFetching = async () => {
  await getNewPosts();
  setInterval(getNewPosts, 1000);
};
</script>
