/* eslint-disable import/prefer-default-export */
import { atomWithStorage } from 'jotai/utils';

export const defaultUserAtom = {
  memberId: 0,
  token: '',
  isLogin: false,
} as const;

export const userAtom = atomWithStorage('user', defaultUserAtom);

export const loginBackPathAtom = atomWithStorage('loginBackPath', '/');
