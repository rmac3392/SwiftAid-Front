import { createApp } from "vue";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "flowbite";
import "flowbite-datepicker";
import "flowbite/dist/datepicker.turbo.js";
const app = createApp(App);

app.use(router);
app.mount("#app");
app.use(mdiVue, {
  icons: mdijs,
});
