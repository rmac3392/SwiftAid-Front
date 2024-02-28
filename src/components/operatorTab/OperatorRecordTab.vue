<template>
  <div class="flex flex-col gap-3 items-center justify-center h-[60%] mt-[8%]">
    <div class="flex w-[70%] h-[100%] justify-center items-center">
      <div class="relative shadow-md sm:rounded-lg w-[100%] h-full">
        <table
          class="w-full h-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-sm text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-3 py-3"></th>
              <th scope="col" class="px-3 py-3">location</th>
              <th scope="col" class="px-3 py-3">Type of Emergency</th>
              <th scope="col" class="px-3 py-3">Description</th>
              <th scope="col" class="px-3 py-3">Action</th>
              <th scope="col" class="px-3 py-3">Timestamp</th>
            </tr>
          </thead>

          <TableRecords
            viewDetails="Details"
            location="Natalio B. Bacalso Ave, Cebu City, 6000 Cebu"
            typeOfEmergency="Fire Incident"
            description="
Fire incident near Cebu City Medical Center"
            action="ACKNOWLEDGE"
            timeStamp="12/01/2000"
          />
          <TableRecords
            viewDetails="Details"
            location="Natalio B. Bacalso Ave, Cebu City, 6000 Cebu"
            typeOfEmergency="Fire Incident"
            description="
Fire incident near Cebu City Medical Center"
            action="ACKNOWLEDGE"
            timeStamp="12/01/2000"
          />
          <TableRecords
            viewDetails="Details"
            location="Natalio B. Bacalso Ave, Cebu City, 6000 Cebu"
            typeOfEmergency="Fire Incident"
            description="
Fire incident near Cebu City Medical Center"
            action="ACKNOWLEDGE"
            timeStamp="12/01/2000"
          />
          <TableRecords
            viewDetails="Details"
            location="Natalio B. Bacalso Ave, Cebu City, 6000 Cebu"
            typeOfEmergency="Fire Incident"
            description="
Fire incident near Cebu City Medical Center"
            action="PENDING"
            timeStamp="12/01/2000"
          />
          <TableRecords
            viewDetails="Details"
            location="Natalio B. Bacalso Ave, Cebu City, 6000 Cebu"
            typeOfEmergency="Fire Incident"
            description="
Fire incident near Cebu City Medical Center"
            action="PENDING"
            timeStamp="12/01/2000"
          />
          <TableRecords
            viewDetails="Details"
            location="Natalio B. Bacalso Ave, Cebu City, 6000 Cebu"
            typeOfEmergency="Fire Incident"
            description="
Fire incident near Cebu City Medical Center"
            action="PENDING"
            timeStamp="12/01/2000"
          />
          <TableRecords
            viewDetails="Details"
            location="Natalio B. Bacalso Ave, Cebu City, 6000 Cebu"
            typeOfEmergency="Fire Incident"
            description="
Fire incident near Cebu City Medical Center"
            action="PENDING"
            timeStamp="12/01/2000"
          />
        </table>
      </div>
    </div>
    <div class="flex justify-center items-center mt-[2%]"><Pagination /></div>
  </div>
</template>

<script setup>
import Pagination from "../../composables/Pagination.vue";
import TableRecords from "../../composables/TableRecords.vue";
</script>
