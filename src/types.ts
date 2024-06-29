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

export interface CreateStudyDto {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  cropId: number;
  curriculumItems: CurriculumItemDto[];
}

export interface EditStudyDto {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
}

export interface Team {
  readonly id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface TeamDetail extends Team {
  attendanceRate: number;
}

export interface Member {
  readonly id: number;
  name: string;
  imageUrl: string;
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

export interface Document {
  title: string;
  description: string;
  accessType: DocumentAccessType;
  type: DocumentType;
  url: string;
  uploaderId: number;
}

export type DocumentAccessType = 'TEAM' | 'ALL'; // 'STUDY' 추가 가능성

export type DocumentType = 'DOCUMENT' | 'IMAGE' | 'URL';
