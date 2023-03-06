<template>
  <div>
    <div class="w-2/3 mx-auto">
      <q-tabs
        v-model="tab"
        class="text-grey tab-text"
        content-class="!text-8xl"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab
          v-for="item in datas"
          :name="item.size"
          :label="item.name"
        ></q-tab>
      </q-tabs>
    </div>
    <div class="w-2/3 mx-auto py-20">
      <q-tab-panels
        v-model="tab"
        animated
        transition-prev="fade"
        transition-next="fade"
      >
        <q-tab-panel v-for="item in datas" :key="item.name" :name="item.size">
          <listItem :data="item.specs"></listItem>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import listItem from "./listItem.vue";
import datas from "./datas";
const tab = ref("6");
</script>
<style scoped>
.orz-item {
  font-weight: 600;
}
</style>
