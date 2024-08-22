/* eslint-disable import/prefer-default-export */
import { fetcher } from '@/app/api/fetcher';

const loginFetcher = fetcher();

const postGoogleLogin = (code: string | null, redirectUri: string | undefined) =>
  loginFetcher('/login/google', {
    method: 'POST',
    body: { code, redirectUri },
  });

export { postGoogleLogin };
