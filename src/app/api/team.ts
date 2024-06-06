import { EditTeamDto } from '@/types';

import { fetcher } from './fetcher';

const teamFetcher = fetcher();

const postCreateTeam = (team: FormData) =>
  teamFetcher('/teams', {
    method: 'POST',
    body: team,
  });

const putEditTeam = (teamId: number, team: EditTeamDto) =>
  teamFetcher(`/teams/${teamId}`, {
    method: 'PUT',
    body: team,
  });

const patchEditTeamImage = (teamId: number, file: FormData) =>
  teamFetcher(`/teams/${teamId}/image`, {
    method: 'PATCH',
    body: file,
  });

const deleteTeam = (teamId: number) =>
  teamFetcher(`/teams/${teamId}`, {
    method: 'DELETE',
  });

const postInviteTeam = (teamId: number, code: string) =>
  teamFetcher(`/teams/${teamId}/invite-code`, {
    method: 'POST',
    body: code,
  });

const postJoinTeam = (teamId: number, code: string) =>
  teamFetcher(`/teams/${teamId}/join`, {
    method: 'POST',
    body: code,
  });

const getGardenInfo = (teamId: number) =>
  teamFetcher(`/garden/${teamId}`, {
    method: 'GET',
  });

export { postCreateTeam, putEditTeam, patchEditTeamImage, deleteTeam, postInviteTeam, postJoinTeam, getGardenInfo };
