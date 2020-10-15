<template>
  <div id="app">
    <BaseLayout>
      <template slot="header">
        <Header></Header>
      </template>
      <template slot="body">
        <router-view></router-view>
        <!-- <AddItem></AddItem>
        <DoDone></DoDone> -->
      </template>
    </BaseLayout>
  </div>
</template>
<script>
import BaseLayout from "./pages/base-layout/baseLayout";
import Header from "./pages/header/header";
import store from "./vuex/store";
import router from "./router/routes";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    BaseLayout,
    Header,
  },
  store,
  router,
};
</script>

<style>
</style>

