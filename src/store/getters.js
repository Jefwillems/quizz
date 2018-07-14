export default {
  alphabeticalCategories({ categories }) {
    return categories.sort((a, b) => {
      if (a.id === -1) return -1;
      if (a.label < b.label) return -1;
      if (a.label > b.label) return 1;
      return 0;
    });
  },
  difficulties({ difficulties }) {
    return difficulties;
  },
  selected_category(state) {
    return state.selected_category;
  },
  current_difficulty(state) {
    return state.current_difficulty;
  },
  not_answered_question({ questions }) {
    return questions.find(el => !el.answered) || { question: 'No questions loaded yet.' };
  },
  score({ score }) {
    return score;
  },
};
