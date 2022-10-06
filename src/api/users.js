import RequestApi from '../Utils/Libs/requestApi';
import { UsersController } from '../Utils/Libs/requestUrls';

class Users {
  /**
   * @returns 유저 정보 변경
   */
  patchUser(data, id) {
    try {
      return RequestApi({
        method: 'PATCH',
        url: UsersController.users() + `/${id}`,
        data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * @returns 마이페이지 보기
   */
  getUser() {
    try {
      return RequestApi({
        method: 'GET',
        url: UsersController.users(),
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * @returns 멘토 정보 보기
   */
  getUsersMentor(id) {
    try {
      return RequestApi({
        method: 'GET',
        url: UsersController.users() + `/${id}/mentor`,
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Users();
