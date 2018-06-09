export default {
  increment({ commit }) {
    setTimeout(() => {
      commit('increment');
    }, 1000);
  },
  decrement({ commit }) {
    commit('decrement');
  },
};
