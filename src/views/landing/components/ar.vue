<template>
  <div
    class="bg-amber-500 p-5 h-screen md:h-screen flex flex-col justify-items-center content-center relative overflow-hidden md:pb-0 landscape:p-16"
  >
    <div
      class="text-8xl font-medium text-stroke text-white mb-10"
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
        transition: {},
      }"
    >
      XR互動尋寶體驗
    </div>
    <div
      class="rpg-btn cursor-pointer bg-amber-800 text-white font-bold text-5xl relative"
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
      :hovered="{
        scale: 1.1,
      }"
      @click="$router.push({ name: 'ar' })"
    >
      <img :src="phone" alt="" class="absolute right-0 bottom-0 w-24" />
      點我測試!
    </div>
  </div>
</template>
<script setup>
import phone from "/src/assets/images/phone.svg";
</script>
<style scoped>
.text-stroke {
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: rgb(255, 255, 255);
  text-shadow: 10px 10px 1px rgb(78, 48, 0);
}

.rpg-btn {
  border-radius: 1rem;
  border: 10px solid rgb(255, 255, 255);
  padding: 1rem 3rem;
  text-align: center;
  line-height: 4rem;
  box-shadow: 8px 8px 1px rgb(80, 50, 0);
  text-shadow: 5px 5px 1px rgb(78, 48, 0);
}
</style>
