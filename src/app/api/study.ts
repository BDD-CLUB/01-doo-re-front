import { useQuery } from '@tanstack/react-query';

import { fetcher } from '@/app/api/fetcher';
import { Study, Curriculum, PostCurriculum } from '@/types';

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

const postStudyMember = (token: string, studyId: number, userId: number) =>
  studyFetcher(`/studies/${studyId}/members/${userId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const deleteStudyMember = (token: string, studyId: number, userId: number) =>
  studyFetcher(`/studies/${studyId}/members/${userId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const leaveStudy = (token: string, studyId: number) =>
  studyFetcher(`/studies/${studyId}/members`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const getStudyMembers = (token: string, studyId: number) =>
  studyFetcher(`/studies/${studyId}/members`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const getStudies = (studyId: number, page: number, size: number) =>
  studyFetcher(`/teams/${studyId}/studies?page=${page}&size=${size}`);

const getCurriculum = (token: string, studyId: number) =>
  studyFetcher(`/studies/${studyId}/curriculums`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const useGetCurriculumInfoQuery = (token: string, studyId: number) => {
  return useQuery({
    queryFn: () => getCurriculum(token, studyId),
    queryKey: ['curriculum', studyId],
  });
};

const postCurriculum = (
  token: string,
  studyId: number,
  curriculumItems: PostCurriculum[],
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

const getMyStudies = (token: string, memberId: number) =>
  studyFetcher(`/studies/members/${memberId}`, { headers: { Authorization: `Bearer ${token}` } });

export {
  postStudy,
  getStudyAll,
  getStudy,
  getMyStudies,
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
  useGetCurriculumInfoQuery,
  postCurriculum,
  patchCurriculumCompleted,
};
