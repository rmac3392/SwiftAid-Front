<template>
  <div
    class="bg-active h-[95%] rounded-r-md rounded-b-md border-2 border-stroke"
  >
    <table :border="tableBorder.value">
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in tableData" :key="index">
          <td>{{ row.column1 }}</td>
          <td>{{ row.column2 }}</td>
          <td>{{ row.column3 }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref } from "vue";

const tableData = [
  {
    column1: "Row 1, Column 1",
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
];

const tableBorder = ref("1");
</script>
