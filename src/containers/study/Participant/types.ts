export interface ParticipantType {
  id: number;
  name: string;
  status: string;
  profileImg: string;
  myPageUrl: string;
}

export interface ParticipantProps {
  participantInfos: ParticipantType[];
}
