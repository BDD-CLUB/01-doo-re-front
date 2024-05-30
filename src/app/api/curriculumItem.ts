import { fetcher } from '@/app/api/fetcher';
import { Curriculum } from '@/types';

const curriculumFetcher = fetcher();

const postCurriculumFetch = (studyId: number, curriculum: Curriculum) => {
  curriculumFetcher(`/studies/${studyId}/curriculums`, {
    method: 'POST',
    body: curriculum,
  });
};

const patchCurriculumFetch = (curriculumId: number, ParticipantId: number) => {
  curriculumFetcher(`/curriculums/${curriculumId}/${ParticipantId}/check`, {
    method: 'PATCH',
  });
};

export { postCurriculumFetch, patchCurriculumFetch };
