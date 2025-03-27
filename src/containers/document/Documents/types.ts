export interface DocumentPageProps {
  readonly teamId: number;
  category: 'studies' | 'teams';
  groupId: number;
  refetchTrigger?: boolean;
}
