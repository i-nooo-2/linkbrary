import type { DropdownItemProps } from '@/components/Dropdown';
import Dropdown from '@/components/Dropdown';

const listItems: DropdownItemProps[] = [
  {
    itemLabel: 'Add Folder',
    eventHandler: () => {},
  },
  { itemLabel: 'Add Link', eventHandler: () => {} },
];

const DropdownAddBtn = () => {
  return <Dropdown button={<button type="button">asd</button>} listItems={listItems} />;
};
export default DropdownAddBtn;
