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
