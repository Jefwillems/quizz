import {
  FETCH_CATEGORIES,
  UPDATE_CATEGORIES,
  FETCH_TOKEN,
  UPDATE_TOKEN,
  FETCH_QUESTIONS,
  UPDATE_QUESTIONS,
} from './types';
import { QuizService, UserService } from './services';

export default {
  async [FETCH_CATEGORIES]({ commit, state }) {
    const service = new QuizService(state.token);
    const categories = await service.getCategories();
    commit(UPDATE_CATEGORIES, categories);
  },

  async [FETCH_TOKEN]({ commit, state }) {
    const service = new UserService(state.token);
    const { token } = await service.retrieveToken();
    commit(UPDATE_TOKEN, token);
  },

  async [FETCH_QUESTIONS]({ commit, state }) {
    const service = new QuizService(state.token);
    const questions = await service.getTenQuestions();
    commit(UPDATE_QUESTIONS, questions);
  },
};
