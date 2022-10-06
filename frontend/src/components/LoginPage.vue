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
import io from "socket.io-client";

export default {
  name: "LoginPage",
  data() {
    return {
      socket: null,
      login: "",
    };
  },
  created() {
    const socket = io("http://localhost:3000");

    socket.on("connect", function () {
      console.log("Connected");
    });

    socket.on("disconnect", (reason) => {
      console.log("Disconnected", reason);
    });

    this.socket = socket;

    this.$store.commit("setSocket", this.socket);
  },
  methods: {
    async getOrCreate() {
      const { data } = await axios.post(`http://localhost:3000/user/name`, {
        name: this.login,
      });

      this.socket.emit("joinRoom", data.id);

      this.$store.commit("login", data);
      await this.$router.push("/chats");
    },
  },
};
</script>

<style scoped></style>
