import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
//import Login from "@/views/Login.vue"
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
      meta:{
        requiresAuth: true
      }
  },
  {
    path: "/movimentacoes",
    name: "Movimentacao",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "movimentacao" */ "../views/Movimentacao.vue"),
      meta:{
        requiresAuth: true
      }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // {
  //   path: "/logout",
  //   name: "Logout",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Logout.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
