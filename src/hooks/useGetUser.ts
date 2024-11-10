import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { userAtom } from '@/atom';

const useGetUser = () => {
  const user = useAtomValue(userAtom);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    if (user !== null) {
      setIsMounted(true);
    }
  }, [user]);

  return isMounted ? user : null;
};

export default useGetUser;
