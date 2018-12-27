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
    const cat = state.selected_difficulty.toLowerCase();
    const options = {
      category: state.selected_category > -1 ? state.selected_category : undefined,
      difficulty: cat !== 'any' ? cat : undefined,
    };
    const service = new QuizService(state.token);
    const questions = await service.getTenQuestions(JSON.parse(JSON.stringify(options)));
    commit(UPDATE_QUESTIONS, questions);
  },
};
