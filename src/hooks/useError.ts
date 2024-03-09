/* eslint-disable import/prefer-default-export */
import { useState } from 'react';

export const useError = () => {
  const [, setError] = useState();

  return (message: string) =>
    setError(() => {
      throw new Error(message);
    });
};
