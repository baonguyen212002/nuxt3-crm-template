// https://nuxt.com/docs/api/configuration/nuxt-config
import customRoutes from "./routes";
import type { NuxtPage } from "@nuxt/schema";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-headlessui", "@ant-design-vue/nuxt"],
  hooks: {
    "pages:extend"(pages) {
      customRoutes.forEach((route) => {
        pages.push({
          ...route,
          component: () => import(`../${route.file}`),
        } as NuxtPage);
      });
    },
  },
  build: {
    transpile: [
      "@heroicons/vue",
       "@ant-design-vue"],
  },
  plugins: ["~/plugins/ant-design-vue"],
  css: [
    'ant-design-vue/dist/reset.css',
  ],
});
