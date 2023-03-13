<template>
  <div>
    <div
      class="absolute inset-0 h-screen w-full flex justify-center items-center bg-gray-800 flex-col"
    >
      project{{ mindar_project }}
      <div>
        <h1 class="text-2xl font-bold text-white mb-12">AR擴增實境導覽系統</h1>
      </div>
      <v-btn x-large @click="start = true">啟動相機</v-btn>
    </div>
    <div
      class="absolute inset-0 z-0 w-full h-screen flex justify-center items-center"
      v-if="start"
      id="ar-container"
    >
      <div class="text-xl bg-white">{{ mindar_mind_file }}</div>
      <div v-for="(item, index) in mindar_project.mindar_targets">
        <div class="text-xl bg-white">{{ item.gltf_file_url }}</div>
      </div>

      <a-scene
        mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.1/examples/image-tracking/assets/card-example/card.mind;"
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
        crossorigin
      >
        <a-assets>
          <img
            id="card"
            src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.1/examples/image-tracking/assets/card-example/card.png"
          />
          <a-asset-item
            id="avatarModel"
            src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.1/examples/image-tracking/assets/card-example/softmind/scene.gltf"
          ></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
        <a-entity mindar-image-target="targetIndex: 0">
          <a-plane
            src="#card"
            position="0 0 0"
            height="0.552"
            width="1"
            rotation="0 0 0"
          ></a-plane>
          <a-gltf-model
            rotation="0 0 0 "
            position="0 0 0.1"
            scale="0.005 0.005 0.005"
            src="#avatarModel"
            animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
          />
        </a-entity>
      </a-scene>

      <!-- <a-scene
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
      </a-scene> -->
    </div>
  </div>
</template>

<script setup>
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import { get, BASEURL } from "@/api/request";
import { ref, nextTick, computed } from "vue";
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
  // const setting = "uiScanning:no;filterMinCF:0.1; filterBeta: 10";
  const setting = "";
  return `${setting_start}${BASEURL}/assets/${mindar_project.value.mindar_mind_file};${setting}`;
});

async function init() {
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
    this.fixStraightScreen(arCameraPlane);
    window.onresize = () => {
      this.fixStraightScreen(arCameraPlane);
    };

    console.log("ar camera plane ", arCameraPlane);
  });
  entity = document.querySelector("a-entity");
  renderer = sceneEl.renderer;
  arSystem = sceneEl.systems["mindar-image-system"];
  console.log(arSystem);
}

function stop() {
  window.location.reload();
}
init();
</script>
