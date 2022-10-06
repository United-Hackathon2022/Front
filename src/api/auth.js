import RequestApi from '../Utils/Libs/requestApi';
import { AuthController } from '../Utils/Libs/requestUrls';

class Auth {
  /**
   * @returns 네이버 로그인
   */
  signin() {
    try {
      return RequestApi({
        method: 'POST',
        url: AuthController.signin(),
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
