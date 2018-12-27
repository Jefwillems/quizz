import shuffle from 'lodash.shuffle';

export default {
  difficulties: ({ difficulties }) => difficulties,
  categories: ({ categories }) => categories,
  selected_question: ({ selected_question: selectedQuestion }) => selectedQuestion,
  selected_q_answers: ({ selected_question: selectedQuestion }) => {
    if (selectedQuestion.correct_answer && selectedQuestion.incorrect_answers) {
      return shuffle([selectedQuestion.correct_answer, ...selectedQuestion.incorrect_answers]);
    }
    return [];
  },
  questions_length: ({ questions }) => questions.length,
  answered_questions: ({ answered_questions: answeredQuestions }) => answeredQuestions,
};
