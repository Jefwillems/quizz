import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    categories: [],
    selected_category: { name: '', id: -1 },
    difficulties: [
      { name: 'any', id: -1 },
      { name: 'easy', id: 1 },
      { name: 'medium', id: 2 },
      { name: 'hard', id: 3 },
    ],
    current_difficulty: { name: '', id: 0 },
    questions: [],
  },
  mutations,
  getters,
  actions,
});
