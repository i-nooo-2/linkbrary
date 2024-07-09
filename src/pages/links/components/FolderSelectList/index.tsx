import Link from 'next/link';
import { useRecoilState } from 'recoil';

import type { FolderProps } from '@/types';

import { currentFolderState, folderListState } from '@/recoil';

const FolderItem = ({ id, name }: { id: number | string; name: string }) => {
  const [, setCurrentFolder] = useRecoilState(currentFolderState);
  return (
    <Link href={`/links/${id}`}>
      <button
        type="button"
        onClick={() => {
          setCurrentFolder({ name });
        }}
      >
        {name}
      </button>
    </Link>
  );
};

const FolderSelectList = () => {
  const [folders] = useRecoilState<FolderProps[]>(folderListState);
  return (
    <>
      {folders.map((folder) => (
        <FolderItem key={folder.id} id={folder.id} name={folder.name} />
      ))}
    </>
  );
};

export default FolderSelectList;
