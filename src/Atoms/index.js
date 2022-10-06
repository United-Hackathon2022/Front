import { atom } from 'recoil';

export const ShowLoginModal = atom({
  key: 'ShowLoginModal',
  default: false,
});

export const ShowMentoringModal = atom({
  key: 'ShowMentoringModal',
  default: false,
});

export const MenstrualCycle = atom({
  key: 'MenstrualCycle',
  default: {
    cycle: 0,
    menstrualBoomDay: 0,
    menstrualBoomMonth: 0,
  },
});
