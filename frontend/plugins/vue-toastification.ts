import Toast, { POSITION, type PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';


export default defineNuxtPlugin( (nuxtApp) => {

    const toastOptions: PluginOptions = {
        // You can set your default options here
        position: POSITION.BOTTOM_RIGHT,
    };

    nuxtApp.vueApp.use(Toast, toastOptions)
  })