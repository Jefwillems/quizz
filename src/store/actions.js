import types from './types';

export default {
  increment({ commit }) {
    setTimeout(() => {
      commit('increment');
    }, 1000);
  },
  decrement({ commit }) {
    commit('decrement');
  },
  fetch_categories({ commit, dispatch }) {
    fetch('https://opentdb.com/api_category.php')
      .then((data) => data.json())
      .then((json) => {
        const catgs = json.trivia_categories ? json.trivia_categories : [];
        commit(types.mutations.UPDATE_CATEGORIES, catgs);
        catgs.forEach((el) => {
          dispatch(types.actions.FETCH_CAT_QUESTION_COUNT, el);
        });
      });
  },
  fetch_cat_question_count({ commit }, el) {
    fetch(`https://opentdb.com/api_count.php?category=${el.id}`)
      .then((data) => data.json())
      .then((json) => {
        commit(types.mutations.UPDATE_CAT_COUNT, json);
      });
  },
};
