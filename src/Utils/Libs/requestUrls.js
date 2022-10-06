export const AuthController = {
  signin: () => {
    return `/auth/naver/redirect`;
  },
};

export const FeedController = {
  feed: () => {
    return `/feeds`;
  },
  question: () => {
    return `/feed/question`;
  },
  myfeed: () => {
    return `/my-feed`;
  },
  getFeeds: () => {
    return `/list?type=`;
  },
  getToken: () => {
    return `/feeds/token`;
  },
};

export const UsersController = {
  users: () => {
    return `/users`;
  },
};

export const CommentsController = {
  comments: () => {
    return `/comments`;
  },
};

export const Calendar = {};
