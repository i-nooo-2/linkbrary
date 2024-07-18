/* eslint-disable no-param-reassign */
import axios from 'axios';

import { getCookie, removeCookie } from '@/utils'; // 쿠키 유틸리티 함수 import

const axiosConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_ROOT_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance = axios.create(axiosConfig);

// 각 요청에 accessToken 헤더 추가
axiosInstance.interceptors.request.use(
  config => {
    const token = getCookie('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

// 토큰 만료 시 로그아웃 처리 및 메인 페이지로 이동
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response && error.response.status === 401) {
      console.log('401 Unauthorized error - logging out');
      removeCookie('accessToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
