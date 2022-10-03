<template>
  <v-app id="inspire">
    <!--    <v-app-bar app color="white" flat>-->
    <!--      <strong>-->
    <!--        {{ this.user.id }}-->
    <!--      </strong>-->
    <!--    </v-app-bar>-->

    <v-main class="grey lighten-3">
      <v-container>
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
    </v-main>
  </v-app>
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
