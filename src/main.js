import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueCodeHighlight from "vue-code-highlight";
import "../node_modules/vue-code-highlight/themes/window.css";
import "vue-code-highlight/themes/duotone-sea.css";

createApp(App)
  .use(VueCodeHighlight)
  .use(router)
  .mount("#app");
