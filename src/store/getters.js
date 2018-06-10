export default {
  even(state) {
    return state.count % 2 === 0;
  },
  alphabeticalCategories(state) {
    const categories = state.categories;
    return categories.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  },
  cat_question_count: (state) => (id) =>
    state.categories.find((el) => el.id === id).question_count,
};
