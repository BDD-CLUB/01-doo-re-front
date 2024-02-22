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

export interface CategoryInfoType {
  id: number;
  name: string;
}
