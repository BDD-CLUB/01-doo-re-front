import { fetcher } from '@/app/api/fetcher';
import { CreateStudyDto, EditStudyDto } from '@/types';

const studyFetcher = fetcher();

const postStudy = (teamId: number, study: CreateStudyDto) =>
  studyFetcher(`/teams/${teamId}/studies`, {
    method: 'POST',
    body: study,
  });
const getStudyAll = (studyId: number) => studyFetcher(`/studies/${studyId}/all`);

const getStudy = (studyId: number) => studyFetcher(`/studies/${studyId}`);

const deleteStudy = (studyId: number) => studyFetcher(`/studies/${studyId}`, { method: 'DELETE' });

const putEditStudy = (studyId: number, study: EditStudyDto) =>
  studyFetcher(`/studies/${studyId}`, {
    method: 'PUT',
    body: study,
  });

const patchTerminateStudy = (studyId: number) =>
  studyFetcher(`/studies/${studyId}/termination`, {
    method: 'PATCH',
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

export {
  postStudy,
  getStudy,
  getStudyAll,
  deleteStudy,
  putEditStudy,
  patchTerminateStudy,
  patchStudyStatus,
  postStudyMember,
  deleteStudyMember,
  leaveStudy,
  getStudyMembers,
};
