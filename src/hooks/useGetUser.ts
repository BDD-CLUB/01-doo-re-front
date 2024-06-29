import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { userAtom } from '@/atom';

const useGetUser = () => {
  const [isMounted, setIsMounted] = useState(false);
  const user = useAtomValue(userAtom);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? user : null;
};

export default useGetUser;
