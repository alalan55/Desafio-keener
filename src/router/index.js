import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue"
import Registrar from "../views/Registrar.vue"

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta:{
      requiresVisitor: true
    }
  },
  {
    path: "/register",
    name: "Registrar",
    component: Registrar,
    meta:{
      requiresVisitor: true
    }
  },
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
      meta:{
        requiresAuth: true
      }
  },
  {
    path: "/movimentacoes",
    name: "Movimentacao",
    component: () =>
      import(/* webpackChunkName: "movimentacao" */ "../views/Movimentacao.vue"),
      meta:{
        requiresAuth: true
      }
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
