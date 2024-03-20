import { fetcher } from '@/app/api/fetcher';
import { CurriculumItemsDto } from '@/types';

const curriculumFetcher = fetcher();

const postCurriculumFetch = (studyId: number, curriculum: CurriculumItemsDto) => {
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
