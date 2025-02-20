import { createApp } from 'vue'
import './style.css'
import Main from './Main.vue';
import router from "./router/router.js";

createApp(Main).use(router).mount("#app");
// createApp(Main).mount('#app')
