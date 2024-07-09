import { useRecoilState } from 'recoil';

import { currentFolderState } from '@/recoil';

const SelectedFolderTitle = () => {
  const [currentFolder] = useRecoilState(currentFolderState);
  return <p>{currentFolder.name}</p>;
};

export default SelectedFolderTitle;
