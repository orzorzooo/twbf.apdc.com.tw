<template>
  <div class="">
    <div
      class="bg-amber-500 p-5 h-screen md:h-auto flex justify-items-center content-center"
    >
      <div>
        <img :src="logo_rounded" alt="" class="w-full" />
      </div>
    </div>
  </div>
  <!-- <div class="">
    <div class="text-center mx-auto w-full hero-bg bg-yellow-500 py-5">
      <img :src="title01" alt="" class="mx-auto" />
      <img :src="title02" alt="" class="mx-auto" />
    </div>
    <div class="text-center mx-auto w-full hero-bg bg-amber-900 py-5">
      <img :src="title03" alt="" class="mx-auto" />
      <img :src="title04" alt="" class="mx-auto" />
      <img :src="title05" alt="" class="mx-auto" />
    </div>
  </div> -->
</template>
<script setup>
import { ref } from "vue";
import "vueperslides/dist/vueperslides.css";
import title01 from "/src/assets/images/title01.png";
import title02 from "/src/assets/images/title02.png";
import title03 from "/src/assets/images/title03.png";
import title04 from "/src/assets/images/title04.png";
import title05 from "/src/assets/images/title05.png";
import logo_rounded from "/src/assets/images/logo_rounded.png";
// const slides = ref([
//   {
//     title: "",
//     content: "",
//     // You can also provide a URL for the image.
//     image: c1,
//   },
// ]);
</script>
<style></style>
