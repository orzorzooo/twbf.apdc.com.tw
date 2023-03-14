<template>
  <div>
    <div
      class="h-screen z-5 w-full flex justify-center items-center bg-amber-500 flex-col ar-wrap"
    >
      <div class="note bg-amber-600 text-white text-xl font-bold">
        <div class="p-5 text-center leading-loose">
          點選開始後裝置會要求使用者同意使用相機功能
          <br />提示出現後點選同意即可
        </div>
        <div
          class="rpg-btn cursor-pointer bg-amber-800 text-white font-bold text-5xl relative"
          v-motion
          :initial="{
            opacity: 0,
            scale: 1,
            y: -100,
          }"
          :enter="{
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
          @click="
            start = true;
            render();
          "
        >
          開始
        </div>
      </div>
    </div>
    <div
      class="absolute inset-0 z-0 w-full h-screen flex justify-center items-center"
      v-if="start"
      id="ar-container"
    >
      <!-- <div class="text-xl bg-white">{{ mindar_mind_file }}</div>
      <div v-for="(item, index) in mindar_project.mindar_targets">
        <div class="text-xl bg-white">{{ item.gltf_file_url }}</div>
      </div> -->

      <a-scene
        :mindar-image="mindar_mind_file"
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
        crossorigin
      >
        <a-assets>
          <a-asset-item
            v-for="(item, index) in mindar_project.mindar_targets"
            :id="asset_item_id(index)"
            :src="item.gltf_file_url"
            crossorigin
          ></a-asset-item>
          <video id="ar_video" crossorigin></video>
        </a-assets>

        <a-camera
          position="0 0 0"
          look-controls="enabled: false"
          cursor="fuse: false; rayOrigin: mouse;"
          raycaster="far: ${customFields.libVersion}; objects: .clickable"
        ></a-camera>

        <a-entity
          v-for="(item, index) in mindar_project.mindar_targets"
          :mindar-image-target="`targetIndex: ` + index"
          @targetFound="onTargetFound(item, index)"
          @targetLost="onTargetLost(item, index)"
        >
          <a-video
            v-if="item.video_url"
            src="#ar_video"
            width="1.6"
            height="0.9"
          ></a-video>

          <a-text v-if="item.post" :value="item.post"></a-text>

          <a-gltf-model
            v-if="item.gltf_file_url"
            rotation="0 0 0 "
            position="0 0 0.1"
            scale="1 1 1"
            :src="'#asset_item_id_' + index"
          ></a-gltf-model>
        </a-entity>
      </a-scene>
    </div>
  </div>
</template>

<script setup>
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import { get, BASEURL } from "@/api/request";
import { ref, nextTick, computed, onBeforeUnmount, onUnmounted } from "vue";
import cameraIcon from "/src/assets/images/camera_icon.svg";
let renderer = null;
let arSystem = null;
let entity = null;
const PROJECT_ID = `${import.meta.env.VITE_mindAR_project_id}`; //directus的mindar project ID
// const PROJECT_ID = `test`; //directus的mindar project ID
const start = ref(false);
const mindar_project = ref({ name: "" });
const ar_video = ref(false);

// function mindar_mind_file() {
//   const setting_start = "imageTargetSrc:";
//   // const setting = "uiScanning:no;filterMinCF:0.1; filterBeta: 10";
//   const setting = "";
//   return `${setting_start}${BASEURL}/assets/${mindar_project.mindar_mind_file};${setting}`;
// }

const mindar_mind_file = computed(() => {
  console.log("ar", mindar_project.value.mindar_mind_file);
  const setting_start = "imageTargetSrc:";
  const setting = "uiScanning:no;filterMinCF:0.1; filterBeta: 10";
  // const setting = "";
  return `${setting_start}${BASEURL}/assets/${mindar_project.value.mindar_mind_file};${setting}`;
});

async function init() {
  console.log("fuckkkb");
  const { data } = await get({
    collection: `mindar_projects/${PROJECT_ID}`,
    params: { fields: "*,files.*,mindar_targets.*" },
  });
  console.log(data);
  mindar_project.value = data;
}

function asset_item_id(index) {
  return `asset_item_id_${index}`;
}

function onTargetFound(item, index) {
  console.log(item, index);
  if (item.video_url) {
    playVideo(item);
  }
}

async function onTargetLost(item, index) {
  if (item.video_url) {
    console.log(`video: ${item.video_url}`, "Lost");
    document.querySelector(`#ar_video`).pause();
  }
  await init();
}

function playVideo(item) {
  console.log("video", item);
  const video = document.querySelector("#ar_video");
  video.setAttribute("src", item.video_url);

  console.log(video);
  video.play();
}

function fixStraightScreen(arCameraPlane) {
  arCameraPlane.style.left = `0`;
  if (screen.height > screen.width) {
    arCameraPlane.style.maxWidth = `999999px`;
    arCameraPlane.style.left = `${-(
      arCameraPlane.offsetWidth / 2 -
      screen.width / 2
    )}px`;
  }
}

async function render() {
  await nextTick();
  console.log("start ar");
  const sceneEl = document.querySelector("a-scene");
  sceneEl.addEventListener("arReady", (event) => {
    console.log("AR is ready");
    const arContainer = document.getElementById("ar-container");
    const [video, arCameraPlane] = arContainer.querySelectorAll("video");
    fixStraightScreen(arCameraPlane);
    window.onresize = () => {
      fixStraightScreen(arCameraPlane);
    };

    console.log("ar camera plane ", arCameraPlane);
  });
  entity = document.querySelector("a-entity");
  renderer = sceneEl.renderer;
  arSystem = sceneEl.systems["mindar-image-system"];
  console.log(arSystem);
}

function stop() {
  console.log("stop");
  window.location.reload();
}
init();

onBeforeUnmount(() => {
  if (renderer) {
    stop();
  }
});

// onUnmounted(() => {
//   if (renderer) {
//     stop();
//   }
// });

console.log("fuck");
</script>

<style scoped>
#ar-container {
  z-index: 99999;
}

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

.note {
  border-radius: 1rem;
  border: 10px solid rgb(255, 255, 255);
  padding: 1rem 3rem;
}
</style>
