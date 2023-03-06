<template>
  <div class="w-3/4 mx-auto">
    <q-toolbar class="q-gutter-x-md">
      <div class="font-bold text-xl">輕鋼構系列</div>
      <q-space></q-space>
      <div class="text-md text-gray-500" @click="$router.push({ name: 'lgs' })">
        關於輕鋼構
      </div>
    </q-toolbar>
    <q-separator />
  </div>
  <div class="w-3/4 mx-auto py-12">
    <h1 class="text-3xl font-bold text-center mb-12">選擇您的生活坪數方案</h1>

    <div class="text-center mb-12">
      <q-btn-group flat>
        <q-btn
          v-for="item in datas"
          rounded
          outline
          :label="item.name"
          :color="currentSize == item.size ? 'primary' : 'grey-5'"
          size="xl"
          class="px-12 font-normal"
          @click="currentSize = item.size"
        />
      </q-btn-group>
    </div>
    <q-tab-panels
      v-model="currentSize"
      animated
      transition-prev="fade"
      transition-next="fade"
    >
      <q-tab-panel v-for="item in datas" :key="item.name" :name="item.size">
        <div class="row">
          <div class="col" v-for="(model, i) in item.models">
            <div class="h-16 mb-6">
              <img :src="img(item.size)" alt="" class="h-full" />
            </div>
            <div class="text-xl font-bold">{{ item.name }}空間</div>
            <div class="text-xl font-bold">{{ model }}配置</div>
            <div v-for="spec in item.specs" class="mb-3 leading-loose">
              <div
                v-for="content in spec.contents[i]"
                v-if="spec.contents.length > 1"
              >
                {{ content }}
              </div>
            </div>
            <div class="font-medium text-2xl mb-12">NT${{ item.price[i] }}</div>
            <q-btn
              class="w-2/3"
              color="primary"
              :to="{
                name: 'lgsOrderModel',
                params: { size: item.size, model: model },
              }"
              >選取</q-btn
            >
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
    <div></div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import listItem from "./components/listItem.vue";
import datas from "./components/datas";
const currentSize = ref("6");
const img = (size) =>
  new URL(`/src/assets/images/lgs/size${size}.png`, import.meta.url);
</script>
