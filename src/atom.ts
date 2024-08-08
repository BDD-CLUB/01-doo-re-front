/* eslint-disable import/prefer-default-export */
import { atomWithStorage } from 'jotai/utils';

export const userAtom = atomWithStorage('user', {
  memberId: 0,
  token: '',
  isLogin: false,
});

export const myTeamAtom = atomWithStorage<{ teams: number[] }>('myTeam', {
  teams: [],
});

export const loginBackPathAtom = atomWithStorage('loginBackPath', '/');
