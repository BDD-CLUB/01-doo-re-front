/* eslint-disable import/prefer-default-export */
import { fetcher } from '@/app/api/fetcher';

const loginFetcher = fetcher();

const postGoogleLogin = (code: string | null) =>
  loginFetcher('/login/google', {
    method: 'POST',
    body: { code },
  });

export { postGoogleLogin };
