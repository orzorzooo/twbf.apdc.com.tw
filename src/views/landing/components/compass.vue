<template>
  <!-- {{ bodyW }} -->
  <!-- <div
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
  ></div> -->
  <div
    alt=""
    class="absolute right-0"
    id="compass"
    v-motion
    :initial="{
      opacity: 0,
      y: 600,
    }"
    :enter="{
      opacity: 0.7,
      transition: {
        delay: 750,
      },
      y: 300,
      x: 100,
    }"
  >
    <img :src="compass_body" class="absolute inset-0" ref="cbody" id="cbody" />
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
      ref="chand"
      id="chand"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, onUpdated, watch } from "vue";
import { useElementSize, useDeviceMotion } from "@vueuse/core";
import compass_body from "/src/assets/images/compass.svg";
import compass_hand from "/src/assets/images/compass_hand.svg";
const cbody = ref(null);
// const hand = ref(null);
// const { width: bodyW, height: bodyH } = useElementSize(cbody);
const { width: bodyW, height: bodyH } = useElementSize(cbody);
const { acceleration, accelerationIncludingGravity, rotationRate, interval } = useDeviceMotion();

watch(bodyW, (v, oldv) => {
  const cbody = document.querySelector("#cbody");
  const chand = document.querySelector("#chand");

  chand.style.height = `${v}px`;
  const chand_offset = chand.offsetWidth / 2;
  console.log(chand_offset);
  chand.style.left = `${v * 0.5 - chand_offset}px`;
});

onMounted(() => {
  // console.log("1", cbody.value);
  // console.log("2", bodyW.value);
});
</script>
<style scoped>
#compass {
  width: 50%;
}

/* #hand {
  position: relative;
} */
</style>
