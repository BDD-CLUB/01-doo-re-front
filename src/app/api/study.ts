import { fetcher } from '@/app/api/fetcher';
import { Study, Curriculum } from '@/types';

const studyFetcher = fetcher();

const postStudy = (
  token: string,
  teamId: number,
  study: Pick<Study, 'name' | 'description' | 'startDate' | 'endDate' | 'cropId'>,
) =>
  studyFetcher(`/teams/${teamId}/studies`, {
    method: 'POST',
    body: study,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
const getStudyAll = (studyId: number) => studyFetcher(`/studies/${studyId}/all`);

const getStudy = (studyId: number) => studyFetcher(`/studies/${studyId}`);

const deleteStudy = (token: string, studyId: number) =>
  studyFetcher(`/studies/${studyId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const putEditStudy = (
  token: string,
  studyId: number,
  study: Pick<Study, 'name' | 'description' | 'startDate' | 'endDate' | 'status'>,
) =>
  studyFetcher(`/studies/${studyId}`, {
    method: 'PUT',
    body: study,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const patchTerminateStudy = (token: string, studyId: number) =>
  studyFetcher(`/studies/${studyId}/termination`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const patchStudyStatus = (studyId: number, status: string) =>
  studyFetcher(`/studies/${studyId}/status?status=${status}`, {
    method: 'PATCH',
  });

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
const getCurriculum = (studyId: number): { curriculumItems: Curriculum[] } => {
  // FIXME 추후 더미데이터 제거하고 Api 연결 필요.
  // studyFetcher(`/studies/${studyId}/curriculums/all`, {
  //   method: 'GET'
  // });

  const data = {
    curriculumItems: [
      {
        id: 1,
        participantId: 1,
        name: '커리큘럼 1',
        itemOrder: 1,
        isCompleted: false,
      },
      {
        id: 2,
        participantId: 1,
        name: '커리큘럼 2',
        itemOrder: 2,
        isCompleted: false,
      },
      {
        id: 3,
        participantId: 1,
        name: '커리큘럼 3',
        itemOrder: 3,
        isCompleted: true,
      },
    ],
  };

  return {
    curriculumItems: data.curriculumItems,
  };
};

const postCurriculum = (studyId: number, curriculumItems: Curriculum[], deletedCurriculumItems: Curriculum[]) =>
  studyFetcher(`/studies/${studyId}/curriculums`, {
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
