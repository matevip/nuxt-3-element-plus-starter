import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus)
})