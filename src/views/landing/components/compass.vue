<template>
  <div
    alt=""
    class="absolute w-full md:w-1/2 right-0 bottom-0 landscape:w-1/2"
    v-motion
    :initial="{
      opacity: 0,
      y: 300,
    }"
    :enter="{
      opacity: 0.7,
      y: 0,
      transition: {
        delay: 750,
      },
    }"
  >
    <img :src="compass_body" class="absolute" />
    <img
      v-motion
      :initial="{
        rotate: -150,
      }"
      :enter="{
        rotate: 30,
        transition: {
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 3000,
        },
      }"
      :src="compass_hand"
      class="relative"
      id="chand"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, onUpdated, watch } from "vue";
import {
  useElementSize,
  useDeviceMotion,
  useTimeout,
  promiseTimeout,
  useDeviceOrientation,
} from "@vueuse/core";
import compass_body from "/src/assets/images/compass.svg";
import compass_hand from "/src/assets/images/compass_hand.svg";

const { acceleration, accelerationIncludingGravity, rotationRate, interval } =
  useDeviceMotion();
const { isAbsolute, alpha, beta, gamma } = useDeviceOrientation();
</script>
<style scoped>
#chand {
  width: 22.5%;
  margin: 0 auto;
}
</style>
