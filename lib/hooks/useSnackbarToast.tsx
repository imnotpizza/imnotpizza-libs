'use client';

import Snackbar, { ISnackbarProps } from '@/components/Snackbar';
import React from 'react';
import { ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// default Toast 옵션
const defaultToastOptions: ToastOptions = {
  position: 'top-left',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: false,
  pauseOnFocusLoss: true,
  closeButton: false,
};

export default function useSnackbarToast() {
  // toast 띄우기
  const showToast = (
    snackbarOptions: Partial<ISnackbarProps>,
    toastOptions: Partial<ToastOptions>,
  ) => {
    toast(
      <Snackbar
        title="Title"
        desc="Description"
        type="action"
        {...snackbarOptions}
      />,
      {
        ...defaultToastOptions,
        ...toastOptions,
      },
    );
  };

  // toast 닫기
  const closeToast = () => {
    toast.dismiss();
  };

  return {
    showToast,
    closeToast,
  };
}
