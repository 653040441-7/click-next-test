import { createRouter, createWebHistory } from "vue-router";
import Main from "../Main.vue";
import PopAlert from "../components/Board.vue";
// import  from "../components/Board.vue";



const routes = [
  { path: "/", component: Main },
  { path: "/board", component: PopAlert },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;