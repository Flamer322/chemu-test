import MessengerPage from "@/components/MessengerPage";
import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "../store/index";
import LoginPage from "@/components/LoginPage";

Vue.use(VueRouter);

const routes = [
  { path: "/login", component: LoginPage },
  { path: "/chats", component: MessengerPage },
  { path: "/chats/:chatId", component: MessengerPage },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" || store.getters.isAuthenticated) {
    next();
  } else {
    next("/login");
  }
});

export { router };
