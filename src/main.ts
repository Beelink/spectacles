import { createApp } from "vue";
import App from "./App.vue";
import { VueQueryPlugin, VueQueryPluginOptions } from "@tanstack/vue-query";
import routes from "@/routes";
import "@/assets/styles/global.scss";
import { createRouter, createWebHashHistory } from "vue-router";

const app = createApp(App);

// vue-router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
app.use(router);

// @tanstack/vue-query
const vueQueryOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  },
};
app.use(VueQueryPlugin, vueQueryOptions);

// mount
app.mount("#app");
