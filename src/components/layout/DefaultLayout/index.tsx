import { type ReactNode, useEffect } from 'react';
import router from 'next/router';
import { useRecoilState } from 'recoil';

import { loginState, userState } from '@/recoil';

import Footer from '@/components/Footer';
import Gnb from '@/components/Gnb';

import s from './style.module.scss';

function DefaultLayout({ children }: { children: ReactNode }) {
  const [isLoggedIn] = useRecoilState(loginState);
  const user = useRecoilState(userState);

  useEffect(() => {
    if (!isLoggedIn) {
      void router.push('/');
    }
  }, [isLoggedIn]);

  return (
    <>
      <Gnb isLogin={isLoggedIn} userEmail={user[0].email} />
      <div className={s.container}>{children}</div>
      <Footer />
    </>
  );
}
export default DefaultLayout;
