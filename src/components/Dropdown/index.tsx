import { useState } from 'react';

import s from './style.module.scss';

export interface DropdownItemProps {
  itemLabel: string;
  eventHandler: () => void;
}

interface DropdownProps {
  button: React.ReactNode;
  listItems: DropdownItemProps[];
}

const Dropdown = ({ button, listItems }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (eventHandler: () => void) => {
    eventHandler();
    setIsOpen(false); // 아이템 클릭 후 드롭다운을 닫습니다.
  };

  const handleButtonClick = (event: React.MouseEvent) => {
    // 클릭 이벤트를 버블링하지 않도록 중지
    event.stopPropagation();
    toggleDropdown();
  };

  return (
    <div className={s.dropdown} onClick={handleButtonClick}>
      <div className={s.btn}>{button}</div>
      {isOpen && (
        <ul className={s.list}>
          {listItems.map((item, index) => (
            <li className={s.item} key={index} onClick={() => handleItemClick(item.eventHandler)}>
              {item.itemLabel}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
