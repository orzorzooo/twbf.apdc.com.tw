<template>
  <div class="py-32 px-5 md:px-20 bg-amber-100">
    <div class="text-center text-3xl font-bold text-teal-700">
      <div class="mb-5">臺南市管樂藝術季</div>
    </div>
    <div class="text-teal-700 leading-loose text-md">{{ description }}</div>
    <img :src="bg" alt="" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import bg from "/src/assets/images/undraw_city_life_gnpr.svg";
const description =
  "歷經三年疫情，其影響終漸趨緩，2023臺南市管樂藝術季預計將於5月開始，本次活動將以「管樂探險」為主題，地點除了新化演藝廳、新總圖哇劇場等室內場地以外，更新增新化日式宿舍群、總爺藝文中心、南紡購物中心南紡廣場等戶外展演場地，以音樂藝術帶領民眾一起探索臺南！期待藉由管樂活動的舉辦，讓民眾就近欣賞國內管樂團隊的精采演出，另外本次活動也與新化在地商家合作，提供各項活動優惠，藉以吸引外地旅客回流造訪，共同促進在地商業及觀光發展。";
</script>
