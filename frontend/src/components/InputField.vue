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
import axios from "axios";

let text;

export default {
  name: "InputField",
  data() {
    return {
      text,
    };
  },
  props: {
    data: {
      required: true,
    },
  },
  methods: {
    async sendMessage() {
      let message = await axios.post(
        `http://localhost:3000/message/${this.$route.params["chatId"]}/${this.data}`,
        {
          text: this.text,
        }
      );

      this.$store.commit("addMessage", {
        chatId: this.$route.params["chatId"],
        message: message.data,
      });

      this.text = "";
    },
  },
};
</script>

<style scoped></style>
