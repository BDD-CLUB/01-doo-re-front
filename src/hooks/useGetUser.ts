import { useAtomValue } from 'jotai';

import { userAtom } from '@/atom';

const useGetUser = () => {
  const user = useAtomValue(userAtom);
  return user;
};

export default useGetUser;
