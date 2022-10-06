import { atom } from 'recoil';

export const ShowLoginModal = atom({
  key: 'ShowLoginModal',
  default: false,
});

export const ShowMentoringModal = atom({
  key: 'ShowMentoringModal',
  default: false,
});

export const AddFeed = atom({
  key: 'AddFeed',
  default: false,
});
