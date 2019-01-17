<template>
  <div class="home">
    <Authen v-if="isAuthenBeTrigger"/>
    <Home_header />
    <Home_banner />
    <Home_category_list />
  </div>
</template>

<script>
// @ is an alias to /src
import Home_header from "@/components/Home_header.vue";
import Home_banner from "@/components/Home_banner.vue";
import Home_category_list from "@/components/Home_category_list.vue";
import Authen from "@/components/Authen.vue";

export default {
  name: "home",
  components: {
    Home_header,
    Home_banner,
    Home_category_list,
    Authen
  },
  computed: {
    isAuthenBeTrigger() {
      return this.$store.getters.isAuthenBeTrigger;
    }
  }
};
</script>
