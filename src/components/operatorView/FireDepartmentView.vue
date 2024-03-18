<template>
  <div
    class="bg-active h-[95%] rounded-r-md rounded-b-md border-2 border-stroke overflow-auto"
  >
    <table class="w-full ">
      <thead>
        <tr>
          <th class="border-r-2 border-b-2 border-stroke">Name</th>
          <th class="border-r-2 border-b-2 border-stroke">Location</th>
          <th class="border-r-2 border-b-2 border-stroke">Report</th>
          <th class=" border-b-2 border-stroke">Status</th>
        </tr>
      </thead>
      <tbody class="">
        <tr v-for="(row, index) in tableData" :key="index" :class="{ 'bg-gray-200 border-b border-stroke': index % 2 === 1, 'bg-white border-b border-stroke': index % 2 !== 1 }">
        <td class="border-r-2 border-stroke">{{ row.column1 }}</td>
        <td class="border-r-2 border-stroke">{{ row.column2 }}</td>
        <td class="border-r-2 border-stroke">{{ row.column3 }}</td>
        <td class="border-stroke flex items-center justify-center">
          <button class="bg-red-400 w-[70%] h-full rounded-xl font">Pending</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref } from "vue";

const tableData = [
  {
    column1: "dafgaga",
    column2: "Row 1, Column 2",
    column3: "Row 1, Column 3",
  },
  {
    column1: "Row 2, Column 1",
    column2: "Row 2, Column 2",
    column3: "Row 2, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  {
    column1: "Row 3, Column 1",
    column2: "Row 3, Column 2",
    column3: "Row 3, Column 3",
  },
  
];

</script>
