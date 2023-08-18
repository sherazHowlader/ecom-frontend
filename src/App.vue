<template>
  <the-header></the-header>
  <!-- <the-slider></the-slider>
  <featured></featured> -->
  <router-view :key="$route.path"></router-view>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TheSlider from "./components/TheSlider.vue";
import Featured from "./components/home/featured-categories.vue";

import {mapActions, mapGetters} from "vuex";

export default {
  name: "App",
  components: {
    TheHeader, TheFooter, TheSlider, Featured,
  },
}
</script>
