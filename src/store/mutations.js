export default {
  update_categories: (state, data) => {
    data.forEach((cat) => {
      if (state.categories.findIndex(el => el.id === cat.id) === -1) {
        state.categories.push({ label: cat.name, id: cat.id });
      }
    });
  },
  update_category: (state, data) => {
    state.selected_category = state.categories.find(el => el.id === +data);
  },
  update_difficulty: (state, data) => {
    state.current_difficulty = state.difficulties.find(el => el.id === +data);
  },
  update_questions: (state, data) => {
    const count = state.questions.length;
    const newQuestions = data.map((q, i) => ({
      ...q,
      answered: false,
      correct: false,
      id: count + i,
    }));
    state.questions = [...state.questions, ...newQuestions];
  },
  answer_correct: (state, question) => {
    const q = state.questions.find(el => el.id === question.id);
    q.answered = true;
    q.correct = true;
    state.score.correct += 1;
    state.score.total += 1;
  },
  answer_incorrect: (state, question) => {
    const q = state.questions.find(el => el.id === question.id);
    q.answered = true;
    q.correct = false;
    state.score.total += 1;
  },
  clear_questions: (state) => {
    state.questions = [];
  },
};
