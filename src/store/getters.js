export default {
  alphabeticalCategories(state) {
    const categories = state.categories;
    return categories.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  },
  current_category(state) {
    return state.selected_category;
  },
  current_difficulty(state) {
    return state.current_difficulty;
  },
};
