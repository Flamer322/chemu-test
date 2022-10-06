import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {},
    socket: null,
  },
  mutations: {
    addMessage(state, data) {
      state.user.chats[data.chatId].messages.push(data.message);
    },
    addChat(state, chat) {
      state.user.chats[chat.id] = chat;
    },
    login(state, user) {
      state.user = user;
    },
    setSocket(state, socket) {
      state.socket = socket;
    },
  },
  getters: {
    getSocket: (state) => {
      return state.socket;
    },
    getChats: (state) => {
      return state.user.chats;
    },
    getUser: (state) => {
      return state.user;
    },
    getUserId: (state) => {
      return state.user.id;
    },
    isAuthenticated: (state) => {
      return typeof state.user.id !== "undefined";
    },
  },
});
