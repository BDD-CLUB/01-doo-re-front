import { Team } from '@/types';

import { fetcher } from './fetcher';

const teamFetcher = fetcher();

const postCreateTeam = (token: string, team: FormData) =>
  teamFetcher('/teams', {
    method: 'POST',
    body: team,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const putEditTeam = (teamId: number, teamInfo: Pick<Team, 'name' | 'description'>) =>
  teamFetcher(`/teams/${teamId}`, {
    method: 'PUT',
    body: teamInfo,
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

const postInviteTeam = (token: string, teamId: number) =>
  teamFetcher(`/teams/${teamId}/invite-code`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const postJoinTeam = (token: string, teamId: number, code: string) =>
  teamFetcher(`/teams/${teamId}/join`, {
    method: 'POST',
    body: code,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const getTeams = () => teamFetcher(`/teams`);

const getTeamMembers = (token: string, teamId: number) =>
  teamFetcher(`/teams/${teamId}/members`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const getMyTeams = (memberId: number) => teamFetcher(`/teams/members/${memberId}`);

export {
  postCreateTeam,
  putEditTeam,
  patchEditTeamImage,
  deleteTeam,
  postInviteTeam,
  postJoinTeam,
  getTeams,
  getMyTeams,
  getTeamMembers,
};
