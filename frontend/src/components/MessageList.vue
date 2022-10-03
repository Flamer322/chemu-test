<template>
  <v-virtual-scroll
    ref="container"
    :bench="100"
    :items="data.chats[this.$route.params['chatId']].messages"
    height="80vh"
    item-height="100%"
  >
    <template v-slot:default="{ item }">
      <div class="d-flex" :key="item.id">
        <v-spacer v-if="data.id === item.sender.id" />
        <v-card
          class="ma-2 rounded-xl"
          :class="
            data.id === item.sender.id
              ? 'light-blue lighten-4'
              : 'blue-grey lighten-4'
          "
          style="width: fit-content"
          max-width="80%"
        >
          <v-card-text>
            <v-list-item-title
              ><strong>{{ item.sender.name }}</strong></v-list-item-title
            >
            <v-list-item-title class="text-wrap">{{
              item.text
            }}</v-list-item-title>
          </v-card-text>
        </v-card>
      </div>
    </template>
  </v-virtual-scroll>
</template>

<script>
export default {
  name: "MessageList",
  data() {
    return {
      chat: {},
    };
  },
  props: {
    data: {
      required: true,
    },
  },
  methods: {
    goTo() {
      this.$vuetify.goTo(9999, {
        container: this.$refs.container,
        duration: 0,
      });
    },
  },
  updated() {
    this.goTo();
  },
  mounted() {
    this.goTo();
  },
};
</script>

<style scoped>
html {
  overflow-y: auto;
}
</style>
