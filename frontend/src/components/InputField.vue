<template>
  <v-text-field
    style="padding: 30px"
    v-model="text"
    single-line
    full-width
    hide-details
    append-outer-icon="mdi-send"
    @click:append-outer="sendMessage"
  ></v-text-field>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "InputField",
  data() {
    return {
      text: null,
    };
  },
  computed: {
    ...mapGetters({
      socket: "getSocket",
    }),
  },
  props: {
    data: {
      required: true,
    },
  },
  created() {
    this.socket.on("message", (data) => {
      console.log(data);
      this.$store.commit("addMessage", {
        chatId: data.chat_id,
        message: data.message,
      });
      this.$emit("updateDiff");
    });
  },
  methods: {
    async sendMessage() {
      this.socket.emit("message", {
        chatId: this.$route.params["chatId"],
        senderId: this.data,
        text: this.text,
      });

      this.text = "";
    },
  },
};
</script>

<style scoped></style>
