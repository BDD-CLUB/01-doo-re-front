export interface CategoryProps {
  id: number;
  name: string;
  subCategory: { id: number; name: string }[];
}
