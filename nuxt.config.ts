export default defineNuxtConfig({
  modules: ["nuxt-windicss", '@pinia/nuxt'],

  // 引入ant-design-vue样式
  css: ['element-plus/dist/index.css', 'element-plus/theme-chalk/display.css'],

  // 插件方式引入ant-design-vue组件
  plugins: ["@/plugins/element-plus"],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});