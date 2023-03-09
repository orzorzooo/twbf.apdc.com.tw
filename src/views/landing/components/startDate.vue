<template>
  <div
    class="bg-amber-500 p-5 h-screen md:h-screen flex justify-items-center content-center relative overflow-hidden md:pb-0 landscape:p-16"
  >
    <div class="w-full md:w-1/2 mx-auto relative">
      <div
        class="text-8xl font-black text-stroke text-white"
        v-motion
        :initial="{
          opacity: 0,
          scale: 1,
          y: -100,
        }"
        :visible="{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            delay: 300,
          },
        }"
      >
        5/6
      </div>
      <div
        class="text-8xl font-black text-stroke text-white"
        v-motion
        :initial="{
          opacity: 0,
          scale: 1,
          y: -100,
        }"
        :visible="{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            delay: 400,
          },
        }"
      >
        8/13
      </div>
      <div
        class=""
        v-motion
        :initial="{
          opacity: 0,
          scale: 1,
          x: -100,
        }"
        :visible="{
          opacity: 1,
          scale: 1,
          x: 0,
          transition: {
            delay: 500,
          },
        }"
      >
        <img :src="startTitle" alt="" />
      </div>
      <div>
        <img
          :src="bubbleTea"
          alt=""
          class="absolute w-32"
          v-motion
          id="bubbleTea"
          :initial="{
            opacity: 0,
            scale: 2,
            y: 50,
          }"
          :visible="{
            opacity: 1,
            rotate: 0,
            scale: 1,
            y: 0,
            transition: {
              delay: 600,
            },
          }"
          :enter="{
            opacity: 1,
            rotate: 0,
            scale: 1,
            y: 0,
            transition: {
              delay: 600,
            },
          }"
          :tapped="{
            scale: 1.2,
            rotate: 30,
            y: -25,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import date5 from "/src/assets/images/date_5_6.svg";
import date8 from "/src/assets/images/date_8_13.svg";
import startTitle from "/src/assets/images/start_title.svg";
import bubbleTea from "/src/assets/images/bubbleTea.svg";
</script>

<style scope>
.text-stroke {
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: rgb(255, 255, 255);
  text-shadow: 10px 10px 1px rgb(78, 48, 0);
}
#bubbleTea {
  top: 0;
  right: 0;
}
</style>
