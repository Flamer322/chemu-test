<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-card width="400px" class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            prepend-icon="mdi-account"
            name="login"
            label="Login"
            type="text"
            v-model="login"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="getOrCreate">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

let login;

export default {
  name: "LoginPage",
  data() {
    return {
      login,
    };
  },
  methods: {
    async getOrCreate() {
      let user = await axios.post(`http://localhost:3000/user/name`, {
        name: this.login,
      });

      this.$store.commit("login", user.data);
      await this.$router.push("/chats");
    },
  },
};
</script>

<style scoped></style>
