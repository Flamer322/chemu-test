<template>
  <v-card max-width="450" class="mx-auto">
    <v-list>
      <v-subheader> Users </v-subheader>
      <template v-for="item in data.chats[this.$route.params['chatId']].users">
        <v-divider :key="2 * item.id" />
        <v-list-item :key="2 * item.id + 1">
          <v-list-item-content>
            <v-list-item-title
              :class="item.id === data.id ? 'font-weight-bold' : ''"
              >{{ item.name }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ChatUsers",
  props: {
    data: {
      required: true,
    },
  },
};
</script>

<style scoped></style>
