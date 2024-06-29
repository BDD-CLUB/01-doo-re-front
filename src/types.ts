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

export interface Curriculum {
  id: number;
  name: string;
  itemOrder: number;
  isCompleted?: boolean;
}

export interface Document {
  title: string;
  description: string;
  accessType: string;
  type: string;
  url: string;
  uploaderId: number;
}
