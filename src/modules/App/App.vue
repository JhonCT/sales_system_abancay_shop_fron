<template>
  <div id="app-container" :class="getMenuType">
    <top-nav />
    <sidebar />
    <main>
      <div class="container-fluid">
        <router-view />
      </div>
    </main>
    <footer-component />
  </div>
</template>

<script>
import Sidebar from "../../layouts/Sidebar";
import TopNav from "../../layouts/TopNav";
import Footer from "../../layouts/Footer";
import { mapGetters } from "vuex";

export default {
  components: {
    "top-nav": TopNav,
    sidebar: Sidebar,
    "footer-component": Footer
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getMenuType"])
  }
};
</script>
