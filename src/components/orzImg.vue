<template>
  <div class="relative h-full w-full">
    <img :src="src" alt="" class="object-cover h-full w-full" />
    <div class="absolute top-0 left-0 w-full h-full">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps(["src"]);
</script>
