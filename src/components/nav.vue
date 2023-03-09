<template>
  <q-header
    ref="el"
    v-if="y > height"
    class="bg-amber-500 text-white"
    v-motion
    :initial="{
      opacity: 0,
      y: -100,
    }"
    :enter="{
      opacity: 1,
      transition: {},
      y: 0,
    }"
  >
    <div class="mx-auto">
      <div class="absolute left-10">
        <img
          v-motion
          :initial="{
            opacity: 0,
            y: -100,
          }"
          :enter="{
            opacity: 1,
            transition: { delay: 200, duration: 200 },
            y: 0,
          }"
          :src="logo"
          alt=""
          class="w-24 drop-shadow-lg"
        />
      </div>
      <div class="q-pa-sm md:p-3 font-bold drop-shadow-md text-xl ml-36">
        臺南市管樂藝術季
      </div>
    </div>
  </q-header>
</template>
<script setup>
import { ref } from "vue";
import { useWindowScroll, useElementSize } from "@vueuse/core";
import logo from "@/assets/images/logo_rounded.svg";
const { x, y } = useWindowScroll();
const height = window.screen.height;
</script>
