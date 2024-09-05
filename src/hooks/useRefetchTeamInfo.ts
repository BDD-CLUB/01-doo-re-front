import { useQueryClient } from '@tanstack/react-query';

const useRefetchTeamInfo = () => {
  const queryClient = useQueryClient();
  const refetchTeamInfo = () => {
    queryClient.invalidateQueries({
      queryKey: ['teamInfo'],
    });
  };
  return refetchTeamInfo;
};

export default useRefetchTeamInfo;
