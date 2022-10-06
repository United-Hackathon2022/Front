export const AuthController = {
  signin: () => {
    return `/auth/naver/redirect`;
  },
};

export const FeedController = {
  feed: () => {
    return `/feed`;
  },
  question: () => {
    return `/feed/question`;
  },
  myfeed: () => {
    return `/my-feed`;
  },
  joboffer: () => {
    return `/feed/job-offer`;
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
