<template>
  <div class="bg-teal-800 py-16 px-5">
    <div v-for="(item, index) in lists">
      <div class="border-b border-gray-600 mb-5 py-5">
        <div class="row text-amber-100">
          <div class="col text-right px-2">
            <div class="text-3xl font-bold">04 / 12</div>
            <div class="text-xl font-bold">15:30</div>
          </div>
          <div class="col px-2">
            <div class="text-2xl font-bold">{{ item.name }}</div>
            <div class="text-md">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const columns = [
  { name: "團隊名稱", label: "團隊名稱", field: "name" },
  { name: "團隊簡介", label: "團隊簡介", field: "description" },
  { name: "演出時間", label: "演出時間", field: "date" },
];

const lists = [
  {
    name: "演出團隊1",
    description: "演出內容簡介",
    date: "2023/03/03",
    time: "15:00",
  },
  {
    name: "演出團隊1",
    description: "演出內容簡介",
    date: "2023/03/03",
    time: "15:00",
  },
  {
    name: "演出團隊1",
    description: "演出內容簡介",
    date: "2023/03/03",
    time: "15:00",
  },
];
</script>
