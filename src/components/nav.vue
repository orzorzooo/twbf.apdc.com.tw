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
    <div class="q-pa-sm md:p-3 font-bold drop-shadow-md text-xl">
      臺南市管樂藝術季
    </div>
  </q-header>
</template>
<script setup>
import { ref } from "vue";
import { useWindowScroll, useElementSize } from "@vueuse/core";
const { x, y } = useWindowScroll();
const height = window.screen.height;
</script>
