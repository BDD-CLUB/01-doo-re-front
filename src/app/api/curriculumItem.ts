import { fetcher } from '@/app/api/fetcher';
import { CurriculumItemsDto } from '@/types';

const curriculumFetcher = fetcher();

const postcurriculumFetch = (studyId: number, curriculum: CurriculumItemsDto) => {
  curriculumFetcher(`/studies/${studyId}/curriculums`, {
    method: 'POST',
    body: curriculum,
  });
};

const patchcurriculumFetch = () => {
  // curriculumFetcher(`/curriculums/${}/${}/check`, {
  //     method: 'PATCH',
  //     body: curriculum,
  // });
};

export { postcurriculumFetch, patchcurriculumFetch };
