import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';

import type { FolderProps } from '@/types';

import { folderListState, linkListState } from '@/recoil';
import usePageRouter from '@/hooks/usePageRouter';

import { getAllFolders } from '@/libs/folderService';
import { fetchLinks } from '@/utils/linkFetcher';

import DefaultLayout from '@/components/layout/DefaultLayout';

import AddLink from './components/AddLink';
import Dropdown from './components/Dropdown';
import FolderSelectList from './components/FolderSelectList';
import LinkLItemList from './components/LinkLItemList';
import LinkSearch from './components/LinkSearch';
import SelectedFolderTitle from './components/SelectedFolderTitle';

import s from './style.module.scss';

export default function Page() {
  const [, setFolderList] = useRecoilState(folderListState);
  const [, setLinkList] = useRecoilState(linkListState);
  const currentSelectedFolderId = usePageRouter();

  const { data: folderList } = useQuery<FolderProps[]>({
    queryKey: ['folderList'],
    queryFn: getAllFolders,
  });

  const { data: linkList } = useQuery({
    queryKey: ['linkList', currentSelectedFolderId],
    queryFn: () => fetchLinks(currentSelectedFolderId as string),
    enabled: !!currentSelectedFolderId,
  });

  useEffect(() => {
    if (folderList) {
      const newFolderList: FolderProps[] = [
        { id: 'all', name: '전체', linkCount: folderList.length },
        ...(folderList ?? []),
        { id: 'favorite', name: '즐겨찾기' },
      ];
      setFolderList(newFolderList);
    }
    if (linkList) {
      setLinkList(linkList);
    }
  }, [folderList, linkList, setFolderList, setLinkList]);

  return (
    <DefaultLayout>
      <AddLink />
      <LinkSearch />
      <FolderSelectList />
      <SelectedFolderTitle />
      <LinkLItemList />
    </DefaultLayout>
  );
}
