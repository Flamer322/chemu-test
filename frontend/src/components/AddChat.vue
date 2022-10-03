<template>
  <v-card>
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

export default {
  name: "AddChat",
  data() {
    return {
      users: [],
      selectedUsers: [],
    };
  },
  methods: {
    async createChat() {
      this.selectedUsers.push(this.$store.getters.getUserId);

      let chat = await axios.post(`http://localhost:3000/chat`, {
        users: this.selectedUsers,
      });

      this.$store.commit("addChat", chat.data);

      this.$emit("updateDiff");

      this.selectedUsers = [];
    },
  },
  async created() {
    let { data } = await axios.get("http://localhost:3000/user");
    let id = this.$store.getters.getUserId;

    this.users = data.filter(function (user) {
      return user.id !== id;
    });
  },
};
</script>

<style scoped></style>
