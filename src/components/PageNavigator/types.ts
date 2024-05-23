export interface PageNavigatorProps {
  currentPage: number;
  setCurrentPage: (pageNumber: number | ((prevPage: number) => number)) => void;
  studyAssetCardDataAll: {
    title: string;
    content: string;
    date: string;
    bookmark: number;
    img: string;
  }[];
  itemsPerPage: number;
}
