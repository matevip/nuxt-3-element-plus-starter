export default defineNuxtConfig({
  modules: ["nuxt-windicss", '@pinia/nuxt'],

  // 引入elemnet plus样式
  css: ['element-plus/dist/index.css', 'element-plus/theme-chalk/display.css'],

  // 插件方式引入element plus组件
  plugins: ["@/plugins/element-plus"],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});