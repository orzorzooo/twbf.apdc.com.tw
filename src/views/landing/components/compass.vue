<template>
  {{ bodyW }}
  <div
    alt=""
    class="absolute bg w-1/2 right-0"
    v-motion
    :initial="{
      opacity: 0,
      y: 600,
    }"
    :enter="{
      opacity: 0.3,
      transition: {
        delay: 750,
      },
      y: 300,
      x: 100,
    }"
  >
    <img :src="compass_body" class="absolute inset-0" ref="body" id="body" />
    <img :src="compass_hand" ref="hand" id="hand" />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { useElementSize, useDeviceMotion } from "@vueuse/core";
import compass_body from "/src/assets/images/compass.svg";
import compass_hand from "/src/assets/images/compass_hand.svg";
const body = ref(null);
const hand = ref(null);
const { width: bodyW, height: bodyH } = useElementSize(body);
const { acceleration, accelerationIncludingGravity, rotationRate, interval } =
  useDeviceMotion();
console.log("fuc22", acceleration);
function setHand() {
  const hand = document.querySelector("#hand");
  const body = document.querySelector("#body");
  console.log(body.offsetHeight);
  hand.style.height = `300px`;
}
onMounted(() => {
  nextTick();
  setHand();
});
</script>
