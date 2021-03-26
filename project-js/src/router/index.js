import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Sign_in from "@/components/Login.vue";
import adduser from "@/components/AppList.vue";
import CraeteMember from "@/components/api_test/CreateMember.vue";
import ViewMember from "@/components/api_test/ViewMember.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign_in",
    name: "Login",
    component: Sign_in,
  },
  {
    path: "/add",
    name: "adduser",
    component: adduser,
  },
  {
    path:"/api/create",
    name:"createmember",
    component:CraeteMember,
  },
  {
    path:"/view",
    name:"viewmember",
    component:ViewMember,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;