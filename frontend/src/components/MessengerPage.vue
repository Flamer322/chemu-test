<template>
  <v-container style="max-width: 1200px">
    <v-row>
      <v-col style="position: sticky; top: 80px" cols="12" sm="3">
        <v-sheet rounded="lg">
          <ChatList :key="chatsDiff" :chats="user.chats" />
          <AddChat @updateDiff="updateDiff" />
        </v-sheet>
      </v-col>

      <v-col v-if="$route.params['chatId']" cols="12" sm="7">
        <v-sheet max-height="1200px" class="overflow-hidden" rounded="lg">
          <ChatPage :data="user" />
        </v-sheet>
      </v-col>

      <v-col
        v-if="$route.params['chatId']"
        style="position: sticky; top: 80px"
        cols="12"
        sm="2"
      >
        <v-sheet rounded="lg">
          <ChatUsers :data="user" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChatPage from "@/components/ChatPage";
import ChatList from "@/components/ChatList";
import ChatUsers from "@/components/ChatUsers";
import AddChat from "@/components/AddChat";
import { mapGetters } from "vuex";

export default {
  name: "MessengerPage",
  components: {
    ChatUsers,
    ChatPage,
    ChatList,
    AddChat,
  },
  computed: {
    ...mapGetters({
      user: "getUser",
    }),
  },
  data() {
    return {
      chatsDiff: 0,
    };
  },
  methods: {
    updateDiff() {
      this.chatsDiff++;
    },
  },
};
</script>

<style scoped lang="scss"></style>
