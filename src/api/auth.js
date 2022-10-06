import RequestApi from '../Utils/Libs/requestApi';
import { AuthController } from '../Utils/Libs/requestUrls';

class Auth {
  /**
   * @returns 네이버 로그인
   */
  signin(data) {
    try {
      return RequestApi({
        method: 'GET',
        url: AuthController.signin(),
        data: data,
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
