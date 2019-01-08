<template>
  <div class="home">
    <Authen v-if="authenTrigger"/>
    <Home_header />
    <Home_banner />
  </div>
</template>

<script>
// @ is an alias to /src
import Home_header from "@/components/Home_header.vue";
import Home_banner from "@/components/Home_banner.vue";
import Authen from "@/components/Authen.vue";

export default {
  name: "home",
  components: {
    Home_header,
    Home_banner,
    Authen
  },
  computed: {
    authenTrigger() {
      return this.$store.getters.authenTrigger;
    }
  }
};
</script>
