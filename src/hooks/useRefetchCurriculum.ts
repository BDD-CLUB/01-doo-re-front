import { useQueryClient } from '@tanstack/react-query';

const useRefetchCurriculum = (studyId: number) => {
  const queryClient = useQueryClient();
  const refetchTeamInfo = () => {
    queryClient.invalidateQueries({
      queryKey: ['curriculum', studyId],
    });
  };
  return refetchTeamInfo;
};

export default useRefetchCurriculum;
