import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [{ label: 'Any Category', id: -1 }],
    selected_category: { label: 'Any Category', id: -1 },
    difficulties: [
      { label: 'Any Difficulty', id: -1 },
      { label: 'easy', id: 1 },
      { label: 'medium', id: 2 },
      { label: 'hard', id: 3 },
    ],
    current_difficulty: { label: 'Any Difficulty', id: -1 },
    questions: [],
    score: { correct: 0, total: 0 },
  },
  mutations,
  getters,
  actions,
});
