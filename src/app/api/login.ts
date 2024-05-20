/* eslint-disable import/prefer-default-export */
import { fetcher } from '@/app/api/fetcher';

const loginFetcher = fetcher();

const postGoogleLoginFetch = () => {
  return async (code: string | null) =>
    loginFetcher('/login/google', {
      method: 'POST',
      body: { code },
    });
};

export { postGoogleLoginFetch };
