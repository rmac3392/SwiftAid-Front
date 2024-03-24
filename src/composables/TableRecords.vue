<template>
  <tbody>
    <tr
      class="font-500 border-b-2 bg-gray-100 border-white rounded-lg text-primary"
    >
      <td class="px-3 py-3 flex-row gap-2 font-bold">
        <span class=""><Modal
          :location="location"
          :typeOfEmergency="typeOfEmergency"
          :subjectDescription="subjectDescription"
          :emergencyResponseTeam="emergencyResponseTeam"
          :reportDate="reportDate"
          :reportTime="reportTime"
          :operatorName="operatorName"
          assignRole="Emergency Operator Office Department"
          responderDepartment="Pasil Fire Department"
          /></span>
      </td>
      <td class="px-3 py-3 text-center">
        {{ location }}
      </td>
      <td class="px-3 py-3">{{ typeOfEmergency }}</td>
      <td class="px-3 py-3 text-center">{{ description }}</td>
      <td class="px-3 py-3 font-bold italic">
        {{ action }}
      </td>
      <td class="px-3 py-3 text-center">{{ timeStamp }}</td>
    </tr>
  </tbody>
</template>

<script setup>
import Modal from "./Modal.vue";
defineProps({
  location: String,
  typeOfEmergency: String,
  description: String,
  action: String,
  timeStamp: String,
  subjectDescription: String,
  emergencyResponseTeam: String,
  submit: String,
  discard: String,
  reportDate: String,
  reportTime: String,
  operatorName: String,
  assignRole: String,
  responderDepartment: String,
});
</script>
