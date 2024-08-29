import { useQueryClient } from '@tanstack/react-query';

const useRefetchTeamInfo = () => {
  const queryClient = useQueryClient();
  const refetchTeamInfo = (teamId: number) => {
    queryClient.invalidateQueries({
      queryKey: ['teamInfo', teamId],
    });
  };
  return refetchTeamInfo;
};

export default useRefetchTeamInfo;
