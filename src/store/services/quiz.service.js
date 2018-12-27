import { Base64 } from 'js-base64';
import Service from './service';

class QuizService extends Service {
  /**
   *
   *
   * @param {{difficulty:string,category:number}} [options={}]
   * @returns Promise
   * @memberof QuizService
   */
  async getTenQuestions(options = {}) {
    const data = await this.query({
      url: '/api.php',
      method: 'GET',
      params: {
        amount: 10,
        token: this.token,
        ...options,
      },
      responseType: 'json',
    });
    const { results } = data;
    return results.map(q => ({ ...q, id: Base64.encode(JSON.stringify(q), false) })) || [];
  }

  async getCategories() {
    const data = await this.query({
      url: '/api_category.php',
      method: 'GET',
      responseType: 'json',
    });
    const { trivia_categories: categories } = data;
    return categories || [];
  }
}

export default QuizService;
