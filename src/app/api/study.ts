import { fetcher } from '@/app/api/fetcher';
import { CreateStudyDto, Curriculum, EditStudyDto } from '@/types';

const studyFetcher = fetcher();

const postStudy = (teamId: number, study: CreateStudyDto) =>
const postStudy = (teamId: number, study: CreateStudyDto) =>
  studyFetcher(`/teams/${teamId}/studies`, {
    method: 'POST',
    body: study,
  });
const getStudyAll = (studyId: number) => studyFetcher(`/studies/${studyId}/all`);
const getStudyAll = (studyId: number) => studyFetcher(`/studies/${studyId}/all`);

const getStudy = (studyId: number) => studyFetcher(`/studies/${studyId}`);
const getStudy = (studyId: number) => studyFetcher(`/studies/${studyId}`);

const deleteStudy = (studyId: number) => studyFetcher(`/studies/${studyId}`, { method: 'DELETE' });
const deleteStudy = (studyId: number) => studyFetcher(`/studies/${studyId}`, { method: 'DELETE' });

const putEditStudy = (studyId: number, study: EditStudyDto) =>
const putEditStudy = (studyId: number, study: EditStudyDto) =>
  studyFetcher(`/studies/${studyId}`, {
    method: 'PUT',
    body: study,
  });

const patchTerminateStudy = (studyId: number) =>
const patchTerminateStudy = (studyId: number) =>
  studyFetcher(`/studies/${studyId}/termination`, {
    method: 'PATCH',
  });

const patchStudyStatus = (studyId: number, status: string) =>
const patchStudyStatus = (studyId: number, status: string) =>
  studyFetcher(`/studies/${studyId}/status?status=${status}`, {
    method: 'PATCH',
  });

const postStudyMember = (studyId: number, userId: number) =>
const postStudyMember = (studyId: number, userId: number) =>
  studyFetcher(`/studies/${studyId}/members/${userId}`, {
    method: 'POST',
  });

const deleteStudyMember = (studyId: number, userId: number) =>
  studyFetcher(`/studies/${studyId}/members/${userId}`, {
    method: 'DELETE',
  });

const leaveStudy = (studyId: number) =>
  studyFetcher(`/studies/${studyId}/members`, {
    method: 'DELETE',
  });

const getStudyMembers = (studyId: number) => studyFetcher(`/studies/${studyId}/members`);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getCurriculum = (studyId: number): { participantId: number; curriculumItems: Curriculum[] } => {
  // FIXME 추후 더미데이터 제거하고 Api 연결 필요.
  // studyFetcher(`/curriculum/${studyId}`, {
  //   method: 'GET',
  // });

  const data = {
    participantId: 1,
    curriculumItems: [
      {
        id: 1,
        name: '커리큘럼 1',
        itemOrder: 1,
        isCompleted: false,
      },
      {
        id: 2,
        name: '커리큘럼 2',
        itemOrder: 2,
        isCompleted: false,
      },
      {
        id: 3,
        name: '커리큘럼 3',
        itemOrder: 3,
        isCompleted: true,
      },
    ],
  };

  return {
    participantId: data.participantId,
    curriculumItems: data.curriculumItems,
  };
};

const postCurriculum = (studyId: number, curriculumItems: Curriculum[], deletedCurriculumItems: Curriculum[]) =>
  studyFetcher(`/curriculum/${studyId}`, {
    method: 'POST',
    body: {
      curriculumItems,
      deletedCurriculumItems,
    },
  });

const patchCurriculumCompleted = (curriculumId: number, participantId: number) => {
  studyFetcher(`/curriculums/${curriculumId}/${participantId}/check`, {
    method: 'PATCH',
  });
};

export {
  postStudy,
  getStudyAll,
  getStudy,
  deleteStudy,
  putEditStudy,
  patchTerminateStudy,
  patchStudyStatus,
  postStudyMember,
  deleteStudyMember,
  leaveStudy,
  getStudyMembers,
  getCurriculum,
  postCurriculum,
  patchCurriculumCompleted,
};
