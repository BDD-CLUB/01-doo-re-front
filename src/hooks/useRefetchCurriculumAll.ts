import { useQueryClient } from '@tanstack/react-query';

const useRefetchCurriculumAll = (studyId: number) => {
  const queryClient = useQueryClient();
  const refetchCurriculumAll = () => {
    queryClient.invalidateQueries({
      queryKey: ['curriculumAll', studyId],
    });
  };
  return refetchCurriculumAll;
};

export default useRefetchCurriculumAll;
