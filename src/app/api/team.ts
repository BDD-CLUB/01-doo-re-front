import { useQuery } from '@tanstack/react-query';

import useGetUser from '@/hooks/useGetUser';
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

const getTeamInfo = (token: string, teamId: number) =>
  teamFetcher(`/teams/${teamId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const useGetTeamInfoQuery = (teamId: number) => {
  const user = useGetUser();
  return useQuery({
    queryFn: () => getTeamInfo(user?.token || '', teamId).then((res) => res.body),
    queryKey: ['teamInfo', teamId],
  });
};

const putEditTeam = (token: string, teamId: number, teamInfo: Pick<Team, 'name' | 'description'>) => {
  return teamFetcher(`/teams/${teamId}`, {
    method: 'PUT',
    body: teamInfo,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const patchEditTeamImage = (token: string, teamId: number, file: FormData) =>
  teamFetcher(`/teams/${teamId}/image`, {
    method: 'PATCH',
    body: file,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const deleteTeam = (token: string, teamId: number) =>
  teamFetcher(`/teams/${teamId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
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
    body: { code },
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

const deleteTeamMember = (token: string, teamId: number, memberId: number) =>
  teamFetcher(`/teams/${teamId}/members/${memberId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const mandateTeamLeader = (token: string, teamId: number, memberId: number) =>
  teamFetcher(`/teams/${teamId}/mandate/${memberId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const getMyTeams = (memberId: number) => teamFetcher(`/teams/members/${memberId}`);

export {
  postCreateTeam,
  getTeamInfo,
  useGetTeamInfoQuery,
  putEditTeam,
  patchEditTeamImage,
  deleteTeam,
  postInviteTeam,
  postJoinTeam,
  getTeams,
  getMyTeams,
  deleteTeamMember,
  mandateTeamLeader,
  getTeamMembers,
};
