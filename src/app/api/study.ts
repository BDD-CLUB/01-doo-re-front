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

const getStudies = (studyId: number, page: number, size: number) =>
  studyFetcher(`/teams/${studyId}/studies?page=${page}&size=${size}`);

const getCurriculum = (token: string, studyId: number) =>
  studyFetcher(`/studies/${studyId}/curriculums`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const postCurriculum = (
  token: string,
  studyId: number,
  curriculumItems: Curriculum[],
  deletedCurriculumItems: Curriculum[],
) =>
  studyFetcher(`/studies/${studyId}/curriculums`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: {
      curriculumItems,
      deletedCurriculumItems,
    },
  });

const patchCurriculumCompleted = (token: string, curriculumId: number, participantId: number) =>
  studyFetcher(`/curriculums/${curriculumId}/${participantId}/check`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

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
  getStudies,
  getCurriculum,
  postCurriculum,
  patchCurriculumCompleted,
};
