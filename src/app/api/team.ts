import { EditTeamDto } from '@/types';

import { fetcher } from './fetcher';

const teamFetcher = fetcher();

const postTeamFetch = (team: FormData) =>
  teamFetcher('/teams', {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: team,
  });

const putEditTeamFetch = (teamId: number, team: EditTeamDto) =>
  teamFetcher(`/teams/${teamId}`, {
    method: 'PUT',
    body: team,
  });

const patchEditTeamImageFetch = (teamId: number, file: FormData) =>
  teamFetcher(`/teams/${teamId}/image`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: file,
  });

const deleteTeamFetch = (teamId: number) =>
  teamFetcher(`/teams/${teamId}`, {
    method: 'DELETE',
  });

const postInviteTeamFetch = (teamId: number, code: string) =>
  teamFetcher(`/teams/${teamId}/invite-code`, {
    method: 'POST',
    body: code,
  });

const postJoinTeamFetch = (teamId: number, code: string) =>
  teamFetcher(`/teams/${teamId}/join`, {
    method: 'POST',
    body: code,
  });

export {
  postTeamFetch,
  putEditTeamFetch,
  patchEditTeamImageFetch,
  deleteTeamFetch,
  postInviteTeamFetch,
  postJoinTeamFetch,
};
