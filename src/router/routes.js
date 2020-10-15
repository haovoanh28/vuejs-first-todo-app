import Vue from "vue";
import VueRouter from "vue-router";

import AddItem from "../components/add_item/AddItem.component.vue";
import DoDone from "../pages/dodone/dodone.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/dodone",
  },
  {
    path: "/add",
    component: AddItem,
  },
  {
    path: "/dodone",
    component: DoDone,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
