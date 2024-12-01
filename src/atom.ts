/* eslint-disable import/prefer-default-export */
import { atomWithStorage } from 'jotai/utils';

type UserAtomType = {
  memberId: number;
  token: string;
  isLogin: boolean;
};

export const defaultUserAtom = {
  memberId: -1,
  token: '',
  isLogin: false,
} as const;

export const userAtom = atomWithStorage('user', defaultUserAtom as UserAtomType);

export const myTeamAtom = atomWithStorage('myTeam', []);

export const loginBackPathAtom = atomWithStorage('loginBackPath', '/');
