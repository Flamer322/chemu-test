<template>
  <v-app-bar app color="white" flat fixed height="50px">
    <v-col cols="6" v-if="this.$store.getters.isAuthenticated">
      <strong> {{ this.name }} </strong>
    </v-col>
    <v-col
      cols="6"
      style="text-align: right"
      v-if="this.$store.getters.isAuthenticated"
    >
      <v-btn @click="logout"> Logout</v-btn>
    </v-col>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppBar",
  computed: {
    ...mapGetters({
      name: "getUserName",
    }),
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped></style>
