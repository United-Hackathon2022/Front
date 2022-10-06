import RequestApi from '../Utils/Libs/requestApi';
import { UsersController } from '../Utils/Libs/requestUrls';

class Comments {
  /**
   * @returns - 댓글 작성
   */
  postComment(data, id) {
    try {
      return RequestApi({
        method: 'POST',
        url: UsersController.users() + `/${id}`,
        data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * @returns - 댓글 삭제
   */
  deleteComment(id) {
    try {
      return RequestApi({
        method: 'POST',
        url: UsersController.users() + `/${id}`,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * @returns - 댓글 수정
   */
  patchComment(data, id) {
    try {
      return RequestApi({
        method: 'patch',
        url: UsersController.users() + `/${id}`,
        data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * @returns - 댓글 목록 보기
   */
  getComments(id) {
    try {
      return RequestApi({
        method: 'GET',
        url: UsersController.users() + `/${id}`,
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Comments();
