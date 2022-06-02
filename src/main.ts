import { createSSRApp } from "vue";
import { VueQueryPlugin, vueQueryPluginOptions } from 'plugins/queryPlugins'
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  app.use(VueQueryPlugin, vueQueryPluginOptions)
  return {
    app,
  };
}
