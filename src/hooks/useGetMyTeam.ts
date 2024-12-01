import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { myTeamAtom } from '@/atom';

const useGetMyTeam = () => {
  const [isMounted, setIsMounted] = useState(false);
  const myTeam = useAtomValue(myTeamAtom);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? myTeam : null;
};

export default useGetMyTeam;
