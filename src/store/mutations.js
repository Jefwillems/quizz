import {
  UPDATE_CATEGORIES,
  UPDATE_TOKEN,
  UPDATE_QUESTIONS,
  ANSWER_QUESTION,
  CLEAR_HISTORY,
} from './types';

export default {
  [UPDATE_CATEGORIES](state, data) {
    state.categories = [...data];
  },
  [UPDATE_TOKEN](state, token) {
    state.token = token;
  },
  [UPDATE_QUESTIONS](state, questions) {
    const newQuestions = questions.filter((q) => {
      const foundInQuestions = state.questions.find(currQ => currQ.id === q.id);
      const foundInAnsweredQuestions = state.answered_questions.find(currQ => currQ.id === q.id);
      // ? If the new question is found in the answered questions, or current questions, omit it.
      const found = foundInQuestions || foundInAnsweredQuestions;
      return !found;
    });
    if (state.questions.length === 0) state.selected_question = newQuestions.pop();
    state.questions = [...state.questions, ...newQuestions];
  },
  [ANSWER_QUESTION](state, answer) {
    const { selected_question: answeredQuestion } = state;
    state.answered_questions = [...state.answered_questions, { ...answeredQuestion, answer }];
    const [q] = state.questions.splice(0, 1);
    state.selected_question = { ...q };
  },
  [CLEAR_HISTORY](state) {
    state.answered_questions = [];
  },
};
