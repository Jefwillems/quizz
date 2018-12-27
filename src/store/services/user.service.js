import moment from 'moment';
import Service from './service';

const TRIVIA_DB = 'triviaDB';

class UserService extends Service {
  // resetToken() {}

  async retrieveToken() {
    const data = JSON.parse(localStorage.getItem(TRIVIA_DB)) || {
      updatedAt: moment().subtract(12, 'hours'),
    };
    const expired = moment(data.updatedAt).isBefore(moment().subtract(6, 'hours'));
    if (expired) {
      const { response_code: responseCode, token } = await this.query({
        url: '/api_token.php',
        method: 'GET',
        params: {
          command: 'request',
        },
        responseType: 'json',
      });
      if (responseCode === 0) {
        localStorage.setItem(
          TRIVIA_DB,
          JSON.stringify({
            token,
            updatedAt: moment.now(),
          }),
        );
        return token;
      }
      return null;
    }
    return data;
  }
}

export default UserService;
