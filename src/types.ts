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
  rank: number;
  name: string;
  description: string;
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

export interface CurriculumDto {
  createdAt: string;
  updatedAt: string;
  id: number;
  name: string;
  itemOrder: number;
  isDeleted: boolean;
  study: string;
  // participantCurriculumItems: CurriculumItemDto[];
}

export interface CurriculumItemsDto {
  curriculumItems: CurriculumDto[];
  deletedCurriculumItems: CurriculumDto[];
  participantCurriculumItems: CurriculumDto[];
}
