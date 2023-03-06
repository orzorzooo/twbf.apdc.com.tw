import { createApp } from "vue";
import { createPinia } from "pinia";

import { Quasar } from "quasar";
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import { useRouter, useRoute } from "vue-router";

const app = createApp(App);

app.config.globalProperties.$route = useRoute();
app.config.globalProperties.$router = useRouter();

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

app.mount("#app");
