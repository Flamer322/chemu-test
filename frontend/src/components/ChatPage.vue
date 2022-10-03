<template>
  <div>
    <MessageList :data="data" />
    <InputField :data="data.id" />
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
  props: {
    data: {
      required: true,
    },
  },
};
</script>

<style scoped></style>
