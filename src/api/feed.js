import RequestApi from '../Utils/Libs/requestApi';
import { FeedController } from '../Utils/Libs/requestUrls';

class Feed {
  /**
   * @returns - 피드 생성
   */
  postFeed(data) {
    try {
      return RequestApi({
        method: 'POST',
        url: FeedController.feed(),
        data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * @returns - 피드목록 조회
   */
  getAllFeeds() {
    try {
      return RequestApi({
        method: 'GET',
        url: FeedController.joboffer(),
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * @returns - 피드 상세 조회
   */
  getFeed() {
    try {
      return RequestApi({
        method: 'GET',
        url: FeedController.feed(),
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * @returns - 피드 수정
   */
  putFeed(data, id) {
    try {
      return RequestApi({
        method: 'PUT',
        url: FeedController.feed() + `/${id}`,
        data,
      });
    } catch (error) {
      return error;
    }
  }

  /**
   * @returns - 피드 수정
   */
  deleteFeed(id) {
    try {
      return RequestApi({
        method: 'DELETE',
        url: FeedController.feed() + `/${id}`,
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Feed();
