import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    selected_category: -1,
    questions: [],
    selected_question: '',
    answered_questions: [],
    difficulties: [
      { id: -1, name: 'Any' },
      { id: 0, name: 'Easy' },
      { id: 1, name: 'Medium' },
      { id: 2, name: 'Hard' },
    ],
    selected_difficulty: 'Any',
    token: '',
  },
  getters: {
    ...getters,
    getField,
  },
  actions,
  mutations: {
    ...mutations,
    updateField,
  },
});
export { default as types } from './types';
