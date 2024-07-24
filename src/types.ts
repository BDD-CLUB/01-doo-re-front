export interface ParticipantType {
  id: number;
  name: string;
  status: string;
  profileImg: string;
  myPageUrl: string;
}

export interface TabButtonInfoType {
  id: number;
  name: string;
  wholeView: boolean;
  page?: string;
}

export interface CurriculumItemDto {
  id: number;
  name: string;
  itemOrder: number;
  isDeleted: boolean;
}

interface TeamReference {
  readonly id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Study {
  readonly id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  cropId: number;
  status: string;
  studyProgressRatio: number;
  studyLeaderId: number;
  teamReference: TeamReference;
}

export interface Team {
  readonly id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface TeamDetail extends Team {
  attendanceRatio: number;
}

export interface StudyMember {
  readonly memberId: number;
  name: string;
  imageUrl: string;
}

export interface Member {
  readonly id: number;
  name: string;
  imageUrl: string;
}

export interface TeamMemberDetail extends Member {
  teamRole: string;
}

export interface Curriculum {
  id: number;
  participantId?: number;
  name: string;
  itemOrder: number;
  isChecked?: boolean;
}

export interface Garden {
  contributeDate: string;
  contributeCount: number;
}

export interface TeamRank {
  point: number;
  rank: number;
  teamReferenceResponse: Team;
  teamGardenResponse: Garden[];
}

export interface StudyRank {
  point: number;
  studyReferenceResponse: Study;
}

export interface Document {
  title: string;
  description: string;
  accessType: DocumentAccessType;
  type: DocumentType;
  url: string;
  uploaderId: number;
}

export type DocumentAccessType = 'TEAM' | 'STUDY' | 'ALL';

export type DocumentType = 'DOCUMENT' | 'IMAGE' | 'URL';
