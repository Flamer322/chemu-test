<template>
  <v-card max-width="450" class="mx-auto">
    <v-list three-line>
      <v-subheader> Chats </v-subheader>
      <template v-for="item in chats">
        <div :key="item.id">
          <v-divider />
          <v-list-item :to="'/chats/' + item.id">
            <v-list-item-content>
              <v-list-item-title>Chat #{{ item.id }}</v-list-item-title>
              <v-list-item-subtitle>{{
                item.users.map((el) => el.name).join(", ")
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </div>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ChatList",
  props: {
    chats: {
      required: true,
    },
  },
};
</script>

<style scoped></style>
