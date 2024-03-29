export interface CubeColorType {
  ceil: string;
  side1: string;
  side2: string;
}

export interface GardenInfoType {
  date: number;
  week: number;
  count: number;
  id: number;
}

export interface TeamRankInfoType {
  id: number;
  idx: number;
  rank: number;
  name: string;
  description: string;
  url: string;
  gardenInfos: GardenInfoType[];
}

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

export interface EditTeamDto {
  name: string;
  description: string;
}

export interface CurriculumDto {
  createdAt: string;
  updatedAt: string;
  id: number;
  name: string;
  itemOrder: number;
  isDeleted: boolean;
  study: string;
  participantCurriculumItems: CurriculumItemDto[];
}

export interface CurriculumItemsDto {
  curriculumItems: CurriculumDto[];
  deletedCurriculumItems: CurriculumDto[];
  participantCurriculumItems: CurriculumDto[];
}
