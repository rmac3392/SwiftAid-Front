<template>

    <div>
      <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
        >Description:</label
      >
      <input
        v-model="description"
        id="description"
        type="text"
        class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
      />
    </div>

      <div>
        <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
          >emergency type:</label
        >
        <select v-model="emergency" id="emergency" class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none">
            <option value="fire">fire</option>
            <option value="flood">flood</option>
            <option value="medical">medical</option>
            <option value="crime">crime</option>
          </select>
      </div>

        

      <div class="flex justify-end mt-6">
        <button
          @click="submitPost"
          class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 mr-4"
          id="saveAgent"
        >
          Save
        </button>
      </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import stringSimilarity from 'string-similarity'; 


const description = ref("grabihag kalayo ari sa parkmall oy!");
const emergency = ref();
const locations = ref([]);


const submitPost = async () => {
try {

const formData = new FormData();
formData.append("description",description.value);
formData.append("emergency_type",emergency.value);
formData.append("city",await location_city(detectLocation(description.value)));
formData.append("zipcode",await location_zipcode(detectLocation(description.value)));
formData.append("address",detectLocation(description.value));

const response = await axios.post("http://localhost:8080/addPost", formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
} catch (error) {
console.error("Error uploading image:", error.message || "Unknown error");
}
};


const getLocations = async () => {
  const response = await fetch('http://localhost:8080/getLocation');
  const data = await response.json();
  for(var i = 0 ; i < data.length ; i ++){
    locations.value.push(data[i].name);
  }
};
getLocations();


const detectLocation = (text) => {  
  const sentence = text.toLowerCase().replace(/\s+/g, '');
  const matchedLocation = locations.value.find(location => sentence.includes(location));
  
  if (matchedLocation) {
    return matchedLocation;
  } else {
    const similarities = locations.value.map(location => stringSimilarity.compareTwoStrings(sentence, location));
    const maxSimilarityIndex = similarities.indexOf(Math.max(...similarities));
    return maxSimilarityIndex !== -1 ? locations.value[maxSimilarityIndex] : '';
  }
};

const location_city = async (detectedLocation) =>{
  const response = await fetch('http://localhost:8080/getLocation');
  const data = await response.json();
  for(var i = 0 ; i < data.length; i ++){
    if(detectedLocation==data[i].name){

      return data[i].location;
    }
  }
}

const location_zipcode = async (detectedLocation) =>{
  const response = await fetch('http://localhost:8080/getLocation');
  const data = await response.json();
  for(var i = 0 ; i < data.length; i ++){
    if(detectedLocation==data[i].name){

      return data[i].zipcode;
    }
  }
}
</script>