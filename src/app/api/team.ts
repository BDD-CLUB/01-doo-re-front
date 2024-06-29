import { Team } from '@/types';

import { fetcher } from './fetcher';

const teamFetcher = fetcher();

const postCreateTeam = (team: FormData) =>
  teamFetcher('/teams', {
    method: 'POST',
    body: team,
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

const getTeamMembers = (teamId: number) => teamFetcher(`/teams/${teamId}/members`);

const getMyTeams = (memberId: number) => teamFetcher(`/teams/members/${memberId}`);

const getMyTeamsWithStudy = (token: string, memberId: number) =>
  teamFetcher(`/teams/members/${memberId}/studies`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export {
  postCreateTeam,
  putEditTeam,
  patchEditTeamImage,
  deleteTeam,
  postInviteTeam,
  postJoinTeam,
  getTeams,
  getMyTeams,
  getMyTeamsWithStudy,
  getTeamMembers,
};
