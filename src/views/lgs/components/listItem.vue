<template>
  <div v-for="item in data" :key="item.label">
    <div class="row font-bold text-gray-600">
      <div class="col-3 font-bold text-xl">
        {{ item.label }}
      </div>
      <div class="col" v-for="content in item.contents">
        <li class="col" v-for="text in content">
          {{ text }}
        </li>
      </div>
    </div>
    <q-separator class="my-12"></q-separator>
  </div>
</template>
<script setup>
const props = defineProps(["data"]);
</script>
<style scoped>
.col {
  padding: 0 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
}
</style>
