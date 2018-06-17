export default {
  update_categories: (state, data) => {
    if (data.findIndex(el => el.id === -1) === -1) {
      data.push({ name: 'Any', id: -1 });
    }
    state.categories = data;
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
  },
  answer_incorrect: (state, question) => {
    const q = state.questions.find(el => el.id === question.id);
    q.answered = true;
    q.correct = false;
  },
};
