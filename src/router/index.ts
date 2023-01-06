import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import DashboardDashboard from "@/views/Dashboard.vue";
import RegistrosPage from "@/views/pages/RegistrosPage.vue";
import RegistroCadastroPage from "@/views/pages/RegistroCadastroPage.vue";
import LoginPage from "@/views/pages/LoginPage.vue";

import auth from '../middleware/auth';
import log from '../middleware/log';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: DashboardDashboard,
    meta: {
      middleware: [auth]
    }
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: {
      middleware: [log]
    }
  },
  {
    path: "/pages/registros",
    name: "registros",
    component: RegistrosPage,
    meta: {
      middleware: [auth]
    }
  },
  {
    path: "/pages/registros/cadastro",
    name: "registros_cadastro",
    component: RegistroCadastroPage,
    meta: {
      middleware: [auth]
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
