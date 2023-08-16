<template>
  <the-header></the-header>
  <!-- <the-slider></the-slider>
  <featured></featured> -->
  <h3 class="text-center" v-if="isAuthenticated">
    Your Are Logged In
    {{ isAuthenticated }}
  </h3>
  <h3 class="text-center" v-else> Please Login for full access </h3>
  <h1 v-if="userInfo" class="text-center"> {{ userInfo.email }} </h1>

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
  methods: {
    ...mapActions({
      loadToken: 'token/authToken',
      loadUserInfo: 'auth/userInfo',
    })
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'token/isAuthenticated',
      userInfo: 'auth/user_info',
    })
  },

  mounted() {
    this.loadToken();
    this.loadUserInfo();
  },
}
</script>
