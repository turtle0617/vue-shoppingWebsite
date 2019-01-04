<template>
  <div class="home">
    <Home_header />
    <Home_banner />
  </div>
</template>

<script>
// @ is an alias to /src
import Home_header from "@/components/Home_header.vue";
import Home_banner from "@/components/Home_banner.vue";

export default {
  name: "home",
  components: {
    Home_header,
    Home_banner
  }
};
</script>
