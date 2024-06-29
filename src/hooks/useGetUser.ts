import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { userAtom } from '@/atom';

const useGetUser = () => {
  const [isMunted, setIsMunted] = useState(false);
  const user = useAtomValue(userAtom);

  useEffect(() => {
    setIsMunted(true);
  }, []);

  return isMunted ? user : null;
};

export default useGetUser;
