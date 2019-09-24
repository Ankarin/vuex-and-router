export default {
  state: {
    users: []
  },
  actions: {
    async fetchUsers(ctx) {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();

      ctx.commit("mutateUsers", users);
    }
  },
  mutations: {
    mutateUsers(state, users) {
      state.users = users;
    }
  },

  getters: {
    getUsers(state) {
      return state.users;
    }
  }
};
