<template>
    <div class="h-full w-full bg-[#000000]">
      <div class="flex h-full w-full">
        <div class="h-full w-[35%] flex">
          <div class="h-full w-[50%]"></div>
          <div class="h-full w-[50%] pl-8 pr-8">
            <div class="h-full pl-5 space-y-5">
              <div class="h-9 w-9 text-white mt-2">
                <img src="../assets/x1.svg" alt="" />
              </div>
              <Home />
              <Tab name="Explore" icon="magnify" />
              <Tab name="Notifications" icon="bell-outline" />
              <Tab name="Messages" icon="email-outline" />
              <Tab name="Grok" icon="slash-forward-box" />
              <Tab name="Lists" icon="list-box-outline" />
              <Tab name="Bookmarks" icon="bookmark-outline" />
              <Tab name="Communities" icon="account-multiple-outline" />
              <div class="flex w-full h-10">
                <div class="w-[20%] h-full">
                  <!-- <HomeIcon class="h-12 w-12 text-white"/> -->
                  <div class="h-8 w-8 text-white mt-2">
                    <img src="../assets/x1.svg" alt="" />
                  </div>
                </div>
                <div class="w-[80%] text-white text-2xl font-base p-2 pl-3">
                  Premium
                </div>
              </div>
              <Tab name="Profile" icon="account-outline" />
              <Tab name="More" icon="dots-horizontal-circle-outline" />
              <div
                class="rounded-full bg-[#0089f4] w-full h-12 font-bold text-lg p-2 text-center text-white cursor-pointer mt-2"
              >
                Post
              </div>
  
              <div class="h-20"></div>
              <div class="flex h-12">
                <div
                  class="w-[18%] rounded-full flex justify-center items-center"
                >
                  <img src="../assets/pp.jpg" class="rounded-full" alt="" />
                </div>
                <div class="flex flex-col w-[90%] justify-center pl-3">
                  <div class="text-base font-semibold text-white leading-tight">
                    Brian Fabular
                  </div>
                  <div class="text-sm text-[#6a6f74] leading-tight">
                    @BrianJoseX
                  </div>
                </div>
                <div class="w-[10%]">
                  <div class="w-full flex items-end">
                    <EllipsisHorizontalIcon class="h-7 w-7 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[30%] border-x-2 border-[#0e1110]">
          <div
            class="w-full h-14 font-medium border-b-2 border-[#0e1110] pb-[0.10rem]"
          >
            <div class="flex h-[95%]">
              <div
                class="w-[45%] flex flex-col items-center justify-center text-white"
              >
                For you
              </div>
              <div
                class="w-[45%] flex items-center justify-center text-[#6b6e75]"
              >
                Following
              </div>
              <div class="flex justify-center items-center w-[10%]">
                <mdicon
                  name="cog-outline"
                  width="25"
                  height="25"
                  class="text-white"
                />
              </div>
            </div>
            <div class="w-full h-[5%] pl-[6.2rem]">
              <div
                class="border-b-[5px] border-[#0188f4] w-14 rounded-full"
              ></div>
            </div>
          </div>
          <div class="h-28 w-full border-b-2 border-[#0e1110]">
            <div class="flex h-[50%] pt-2">
              <div class="w-[13%] p-4">
                <div class="h-full rounded-full flex justify-center items-center">
                  <img src="../assets/pp.jpg" class="rounded-full" alt="" />
                </div>
              </div>
              <div
                class="w-[87%] text-xl font-medium text-[#54595d] flex items-center"
              >
                <textarea
                  v-model="text"
                  class="bg-[#000000] outline-none text-white w-full overflow-hidden text-lg leading-5 whitespace-normal overflow-wrap-normal"
                  rows="2"
                  type="text"
                  placeholder="What is happening?!"
                ></textarea>
              </div>
            </div>
            <div class="flex h-[50%]">
              <div class="w-[13%]"></div>
              <div class="flex gap-3 w-[87%] items-center">
                <div>
                  <mdicon
                    name="image-outline"
                    width="20"
                    height="20"
                    class="text-[#0188f4]"
                  />
                </div>
                <div>
                  <!-- <mdicon name="file-gif-box" width="20" height="20" class="text-[#0188f4]" /> -->
                  <GifIcon class="w-[20px] h-[20px] text-[#0188f4]" />
                </div>
                <div>
                  <mdicon
                    name="format-list-checks-"
                    width="20"
                    height="20"
                    class="text-[#0188f4]"
                  />
                </div>
                <div>
                  <mdicon
                    name="emoticon-outline"
                    width="20"
                    height="20"
                    class="text-[#0188f4]"
                  />
                </div>
                <div>
                  <mdicon
                    name="invoice-clock-outline"
                    width="20"
                    height="20"
                    class="text-[#0188f4]"
                  />
                </div>
                <div>
                  <mdicon
                    name="map-marker-outline"
                    width="20"
                    height="20"
                    class="text-[#01447a]"
                  />
                </div>
                <div class="w-[44%]"></div>
                <button
                  class="rounded-full bg-[#0188f4] text-white w-16 h-8 p-1 font-medium text-base text-center cursor-pointer"
                  @click="postText"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          <!-- This code below are for identifying if the tweet is emergency or not -->
          <div class="pl-3 pt-2">
            <div class="text-white" v-if="result">
              isEmergency: {{ result.emergency }} <br />
              Probability:
              {{ result.emergency_probability.toFixed(2) }}%
            </div>
            <div class="text-white" v-if="result">
              Emergency Type: {{ result.type }} <br />
              Probabilities:
              <ul>
                <li v-for="(value, key) in result.type_probabilities" :key="key">
                  {{ key }}: {{ value.toFixed(2) }}%
                </li>
              </ul>
            </div>
          </div>
  
          <div v-for="(post, index) in posts.slice().reverse()" :key="index">
            <Post :post="post.content" />
          </div>
        </div>
  
        <!-- DepEd defined administrative tasks as work “related to the effective and
          efficient operations of schools or programs, projects, and services
          which are not directly related to teaching and academic
          learning.”#CDNDigital Read: https://inqnews.net/KJ1Zj6 -->
  
        <div class="w-[35%] flex">
          <div class="w-[65%] pl-8 pr-8">
            <div class="w-full space-y-4">
              <Search />
              <Subscribe />
              <Trend />
              <Who />
            </div>
          </div>
          <div class="w-[35%]"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Search from "../twitter/Search.vue";
  import Subscribe from "../twitter/Subscribe.vue";
  import Trend from "../twitter/Trend.vue";
  import Who from "../twitter/Who.vue";
  import Home from "../twitter/Home.vue";
  import Tab from "../twitter/Tab.vue";
  import Post from "../twitter/Post.vue";
  import stringSimilarity from "string-similarity";
  import { EllipsisHorizontalIcon } from "@heroicons/vue/24/solid";
  import { GifIcon } from "@heroicons/vue/24/outline";
  
  import axios from "axios";
  import { ref } from "vue";
  
  const text = ref("");
  const result = ref(null);
  const posts = ref([]);
  const currentDateTime = ref(new Date());
  const locations = ref([]);
  
  const postText = async () => {
  try {
    updateDateTime();
    let modifiedText = text.value.replace(/sunog/gi, "wildfire").replace(/bombero/gi, "firefighters");
    const serverResponse = await axios.post("http://localhost:5000/predict", {
      text: modifiedText,
    });
    result.value = serverResponse.data;

    if (result.value.emergency) {
      let finalType = result.value.type
      if(result.value.type=='Other'){
        finalType = 'Others'
      }
      post(modifiedText, finalType);
      console.log(
        "Data sent to flask backend",
        modifiedText,
        result.value.emergency,
        result.value.type,
        currentDateTime.value.toLocaleString()
      );
    }

    const newPost = {
      content: text.value,
    };
    posts.value.push(newPost);
    text.value = "";
  } catch (error) {
    console.error("Error: ", error);
  }
};

  
  // const post = async (description, type) => {
  //   const formData = new FormData();
  //   formData.append("description", description);
  //   formData.append("emergency_type", type);
  //   formData.append("city", "Lapu-Lapu");
  //   formData.append("zipcode", "6015");
  //   formData.append("address", "Masiwa");
  //   await axios.post("http://localhost:8080/addPost", formData, {
  //     headers: {
  //       "Content-type": "multipart/form-data",
  //     },
  //   });
  // };
  const updateDateTime = () => {
    currentDateTime.value = new Date();
  };
  
  const post = async (description, type) => {
    try {
      const formData = new FormData();
      formData.append("description", description);
      formData.append("emergency_type", type);
      formData.append("city", await location_city(detectLocation(description)));
      formData.append(
        "zipcode",
        await location_zipcode(detectLocation(description))
      );
      formData.append("address", detectLocation(description));
  
      const response = await axios.post(
        "http://localhost:8080/addPost",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.error("Error uploading image:", error.message || "Unknown error");
    }
  };
  
  const getLocations = async () => {
    const response = await fetch("http://localhost:8080/getLocation");
    const data = await response.json();
    for (var i = 0; i < data.length; i++) {
      locations.value.push(data[i].name);
    }
  };
  getLocations();
  
  const detectLocation = (text) => {
    const sentence = text.toLowerCase().replace(/\s+/g, "");
    const matchedLocation = locations.value.find((location) =>
      sentence.includes(location)
    );
  
    if (matchedLocation) {
      return matchedLocation;
    } else {
      const similarities = locations.value.map((location) =>
        stringSimilarity.compareTwoStrings(sentence, location)
      );
      const maxSimilarityIndex = similarities.indexOf(Math.max(...similarities));
      return maxSimilarityIndex !== -1 ? locations.value[maxSimilarityIndex] : "";
    }
  };
  
  const location_city = async (detectedLocation) => {
    const response = await fetch("http://localhost:8080/getLocation");
    const data = await response.json();
    for (var i = 0; i < data.length; i++) {
      if (detectedLocation == data[i].name) {
        return data[i].location;
      }
    }
  };
  
  const location_zipcode = async (detectedLocation) => {
    const response = await fetch("http://localhost:8080/getLocation");
    const data = await response.json();
    for (var i = 0; i < data.length; i++) {
      if (detectedLocation == data[i].name) {
        return data[i].zipcode;
      }
    }
  };
  </script>
  