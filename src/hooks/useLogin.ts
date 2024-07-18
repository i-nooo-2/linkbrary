import { useState } from 'react';
import { useRecoilState } from 'recoil';

import type { AuthProps } from '@/types';
import { userDefault } from '@/constants/defaultValue';

import { loginState, userState } from '@/recoil';

import { login as loginApi } from '@/libs/authService';
import { getAllUsers } from '@/libs/userService';
import { removeCookie, setCookie } from '@/utils/cookie';

const useLogin = () => {
  const [isLoggedIn, setLoginState] = useRecoilState(loginState);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const userData = await getAllUsers();
      setUserInfo(userData);
    } catch (error) {
      setUserInfo(userDefault);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async ({ email, password }: AuthProps) => {
    try {
      const token = await loginApi({ email, password });
      setCookie('accessToken', token);
      await fetchUsers();
      setLoginState(true);
      return true;
    } catch (error) {
      setLoginState(false);
      return false;
    }
  };

  const logout = () => {
    removeCookie('accessToken');
    setLoginState(false);
    setUserInfo(userDefault);
  };

  return { isLoggedIn, login, logout, isLoading, userInfo };
};

export default useLogin;
