import { atom } from 'recoil';

export const ShowLoginModal = atom({
  key: 'ShowLoginModal',
  default: false,
});

export const ShowMentoringModal = atom({
  key: 'ShowMentoringModal',
  default: false,
});
