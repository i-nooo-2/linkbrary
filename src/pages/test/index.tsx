import { BtnVariant, CustomButton } from '@/components/CustomButton';

import s from './style.module.scss';

export default function Page() {
  return (
    <div className={s.btnContainer}>
      <CustomButton variant={BtnVariant.OUTLINED} onClick={() => console.log('Button clicked')} text="sssssdsdsddsdssdsdsdsssdddsdsss" />
      <CustomButton variant={BtnVariant.GRADIENT} onClick={() => console.log('Button clicked')} icon={<p>assdsddssdsssdsdsdsdsdsdsdsddsd</p>} />
      <CustomButton variant={BtnVariant.CONTAINED} onClick={() => console.log('Button clicked')} text="asdsdsdsdsdsdasd" />
    </div>
  );
}
