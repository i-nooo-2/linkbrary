export interface FolderProps {
  id: number | string;
  name: string;
  linkCount?: number;
  createdAt?: string;
}

export interface FolderItemListProps {
  folderList: FolderProps[];
}
