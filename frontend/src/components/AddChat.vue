<template>
  <v-card @click="getUsers">
    <v-autocomplete
      class="pa-3"
      multiple
      chips
      deletable-chips
      :items="users"
      item-text="name"
      item-value="id"
      hide-details
      v-model="selectedUsers"
    />
    <v-card-actions>
      <v-btn block :disabled="!selectedUsers.length" @click="createChat">
        Create chat
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "AddChat",
  data() {
    return {
      users: [],
      selectedUsers: [],
    };
  },
  computed: {
    ...mapGetters({
      socket: "getSocket",
    }),
  },
  created() {
    this.socket.on("chat", (data) => {
      console.log(data);
      this.$store.commit("addChat", data);
      this.$emit("updateDiff");
    });
  },
  methods: {
    async getUsers() {
      let { data } = await axios.get("http://localhost:3000/user");
      let id = this.$store.getters.getUserId;

      this.users = data.filter(function (user) {
        return user.id !== id;
      });
    },
    async createChat() {
      this.selectedUsers.push(this.$store.getters.getUserId);

      this.socket.emit("chat", { userIds: this.selectedUsers });

      this.selectedUsers = [];
    },
  },
};
</script>

<style scoped></style>
