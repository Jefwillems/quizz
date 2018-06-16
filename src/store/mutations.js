export default {
  update_categories: (state, data) => {
    state.categories = data;
  },
  update_category: (state, data) => {
    state.selected_category = state.categories.find(el => el.id === +data);
  },
  update_difficulty: (state, data) => {
    state.current_difficulty = state.difficulties.find(el => el.id === +data);
  },
  update_questions: (state, data) => {
    state.questions = data;
  },
};
