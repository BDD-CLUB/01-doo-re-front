import { fetcher } from '@/app/api/fetcher';
import { CreateStudyDto, EditStudyDto } from '@/types';

const studyFetcher = fetcher();

const postStudyFetch = (teamId: number, study: CreateStudyDto) =>
  studyFetcher(`/teams/${teamId}/studies`, {
    method: 'POST',
    body: study,
  });

const getStudyFetch = (studyId: number) => studyFetcher(`/studies/${studyId}`);

const deleteStudyFetch = (studyId: number) => studyFetcher(`/studies/${studyId}`, { method: 'DELETE' });

const putEditStudyFetch = (studyId: number, study: EditStudyDto) =>
  studyFetcher(`/studies/${studyId}`, {
    method: 'PUT',
    body: study,
  });

const patchTerminateStudyFetch = (studyId: number) =>
  studyFetcher(`/studies/${studyId}/termination`, {
    method: 'PATCH',
  });

const patchStudyStatusFetch = (studyId: number, status: string) =>
  studyFetcher(`/studies/${studyId}/status?status=${status}`, {
    method: 'PATCH',
  });

const postStudyMemberFetch = (studyId: number, userId: number) =>
  studyFetcher(`/studies/${studyId}/members/${userId}`, {
    method: 'POST',
  });

const deleteStudyMemberFetch = (studyId: number, userId: number) =>
  studyFetcher(`/studies/${studyId}/members/${userId}`, {
    method: 'DELETE',
  });

const leaveStudyFetch = (studyId: number) =>
  studyFetcher(`/studies/${studyId}/members`, {
    method: 'DELETE',
  });

const getStudyMembersFetch = (studyId: number) => studyFetcher(`/studies/${studyId}/members`);

export {
  postStudyFetch,
  getStudyFetch,
  deleteStudyFetch,
  putEditStudyFetch,
  patchTerminateStudyFetch,
  patchStudyStatusFetch,
  postStudyMemberFetch,
  deleteStudyMemberFetch,
  leaveStudyFetch,
  getStudyMembersFetch,
};
