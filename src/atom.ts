/* eslint-disable import/prefer-default-export */
import { atomWithStorage } from 'jotai/utils';

export const userAtom = atomWithStorage('user', {
  memberId: 0,
  token: '',
  isLogin: false,
});

export const loginBackPathAtom = atomWithStorage('loginBackPath', '/');
