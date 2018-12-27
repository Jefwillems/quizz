import axios from 'axios';

export default class Service {
  constructor(token) {
    this.baseUrl = 'https://opentdb.com';
    this.token = token || undefined;
  }

  async query(options = {}) {
    const { data } = await axios({ baseURL: this.baseUrl, ...options });
    return data;
  }
}
