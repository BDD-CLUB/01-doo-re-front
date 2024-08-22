import { useQueryClient } from '@tanstack/react-query';

import useGetUser from '@/hooks/useGetUser';

const useRefetchSideBar = () => {
  const queryClient = useQueryClient();
  const user = useGetUser();
  const refetchSideBar = () => {
    queryClient.invalidateQueries({
      queryKey: ['sidebar', user?.memberId],
    });
  };
  return refetchSideBar;
};

export default useRefetchSideBar;
