export interface PageNavigatorProps {
  currentPage: number;
  setCurrentPage: (pageNumber: number | ((prevPage: number) => number)) => void;
  componentLength: number;
  itemsPerPage: number;
}
