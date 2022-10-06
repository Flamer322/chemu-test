<template>
  <v-app id="inspire">
    <AppBar />
    <v-main class="grey lighten-3">
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar";
export default {
  name: "App",
  components: { AppBar },
};
</script>
