<template>
  <q-layout view="Hhh lpR fff">
    <orznav></orznav>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-teal-800 text-white p-16">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="mb-6">
            <div>主辦單位</div>
            <li>臺南市政府</li>
          </div>

          <div class="mb-6">
            <div class="">承辦單位</div>
            <li>臺南市政府文化局</li>
            <li>臺南市管樂團</li>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="mb-6">
            <div class="">協辦單位:</div>
            <li>臺南市立圖書館哇劇場</li>
            <li>總爺藝文中心</li>
            <li>臺南紡織股份有限公司</li>
            <li>山海屯股份有限公司</li>
          </div>

          <div class="mb-6">
            <div class="">贊助單位</div>
            <li>財團法人台南市文化基金會</li>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <a
            class="mx-auto text-center"
            href="https://www.facebook.com/tsbandsh"
          >
            <div>
              <q-icon
                name="font_facebook"
                color="white"
                size="3rem"
                class="cursor-pointer mx-auto"
              />
            </div>
          </a>
        </div>
      </div>
      <div></div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import orznav from "@/components/nav.vue";
</script>
