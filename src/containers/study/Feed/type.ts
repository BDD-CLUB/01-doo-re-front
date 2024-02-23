interface ContentItem {
  id: number;
  name: string;
  subject: string;
  action: string;
}

export interface FeedProps {
  date: string;
  content: ContentItem[];
}
