import { boot } from 'quasar/wrappers'
import Vue3Tour from 'vue3-tour'
import Lib from '../lib.js'
import 'vue3-tour/dist/vue3-tour.css'
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ( { app }) => {
  app.use(Vue3Tour)
  app.use(Lib)
})
