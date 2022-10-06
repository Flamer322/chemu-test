<template>
  <div>
    <MessageList :key="messagesDiff" :data="data" />
    <InputField @updateDiff="updateDiff" :data="data.id" />
  </div>
</template>

<script>
import InputField from "@/components/InputField";
import MessageList from "@/components/MessageList";

export default {
  name: "ChatPage",
  components: {
    MessageList,
    InputField,
  },
  data() {
    return {
      messagesDiff: 0,
    };
  },
  methods: {
    updateDiff() {
      this.messagesDiff++;
    },
  },
  props: {
    data: {
      required: true,
    },
  },
};
</script>

<style scoped></style>
