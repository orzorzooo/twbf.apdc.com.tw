<template>
  <div class="">
    <div
      id="hero"
      class="bg-amber-500 p-5 h-screen md:h-screen flex justify-items-center content-center relative overflow-hidden md:pb-0 landscape:p-16"
    >
      <compass></compass>

      <div class="w-full md:w-3/5 mx-auto pb-5 landscape:w-1/2">
        <div class="text-center mx-auto w-full hero-bg py-5">
          <img
            :src="title01"
            alt=""
            class="mx-auto"
            v-motion
            :initial="{
              opacity: 0,
              scale: 2,
              y: 100,
            }"
            :enter="{
              opacity: 1,
              scale: 1,
              y: 0,
            }"
          />
          <img
            :src="title02"
            alt=""
            class="mx-auto"
            v-motion
            :initial="{
              opacity: 0,
              scale: 2,
              y: 100,
            }"
            :enter="{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 300,
              },
              y: 0,
            }"
          />
          <img
            :src="title03"
            alt=""
            class="mx-auto"
            v-motion
            :initial="{
              opacity: 0,
              scale: 2,
              y: 100,
            }"
            :enter="{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 450,
              },
              y: 0,
            }"
          />
          <img
            :src="title04"
            alt=""
            class="mx-auto"
            v-motion
            :initial="{
              opacity: 0,
              scale: 2,
              y: 100,
            }"
            :enter="{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 550,
              },
              y: 0,
            }"
          />
          <img
            :src="title05"
            alt=""
            class="mx-auto"
            v-motion
            :initial="{
              opacity: 0,
              scale: 2,
              y: 100,
            }"
            :enter="{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 650,
              },
              y: 0,
            }"
          />
        </div>
        <!-- <img :src="logo_rounded" alt="" class="w-full" /> -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import "vueperslides/dist/vueperslides.css";
import logo_o from "/src/assets/images/logo_anim/logo_o.svg";
import logo_w_01 from "/src/assets/images/logo_anim/logo_w_01.svg";
import logo_rounded from "/src/assets/images/logo_rounded.png";
import title01 from "/src/assets/images/logo_anim/title01.svg";
import title02 from "/src/assets/images/logo_anim/title02.svg";
import title03 from "/src/assets/images/logo_anim/title03.svg";
import title04 from "/src/assets/images/logo_anim/title04.svg";
import title05 from "/src/assets/images/logo_anim/title05.svg";
import compass from "./compass.vue";
</script>
<style>
.bg {
  z-index: 0;
}
</style>
