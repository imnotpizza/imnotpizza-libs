/**
 * @file: Button/index.tsx
 * @author: chad / chad@imnotpizzalib.com
 * @since: 2024.02.06 ~
 * @description: 버튼 컴포넌트
 */

import { useMemo, ReactNode, ButtonHTMLAttributes } from 'react';
import '@/index.css';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

import { USAGE_TYPE_LIST, SIZE_LIST } from '@/enums';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  withIcon?: string | ReactNode;
  size?: SIZE_LIST;
  loading?: boolean;
  withLoading?: boolean;
  className?: string;
  usageType?: USAGE_TYPE_LIST;
  disabled?: boolean;
}

/**
 * Button Component
 * @param {string | ReactNode} children 버튼에 나타낼 내용
 * @param {string | ReactNode} withIcon 텍스트와 함께 나타낼 아이콘
 * @param {boolean} withLoading 텍스트와 함께 나타낼 로딩 아이콘
 * @param {SIZE_LIST} size 사이즈 크기 (full / xxl / xl / lg / md / sm / xs / xxs)
 * @param {boolean} loading 로딩 사용 유/무
 * @param {string} className css class
 * @param {USAGE_TYPE_LIST} usageType 버튼의 사용 타입 (box / line)
 * @param {boolean} disabled 비활성화 유/무
 */
export default function Button({
  size = 'full',
  usageType = 'box',
  className,
  ...props
}: IButtonProps) {
  /** 높이 className */
  const heightClassName = useMemo(() => {
    switch (size) {
      case 'xxl':
        return 'ods-h-16'; // 64px
      case 'full':
      case 'xl':
        return 'ods-h-14'; // 56px
      case 'lg':
        return 'ods-h-12'; // 48px
      case 'md':
        return 'ods-h-11'; // 44px
      case 'sm':
        return 'ods-h-[2.56em]'; // 36px
      case 'xs':
        return 'ods-h-[2.27em]'; // 32px
      case 'xxs':
        return 'ods-h-[2.33em]'; // 28px
    }
  }, [size]);

  /** 사이즈에 따른 css */
  const sizeClassName = useMemo(() => {
    switch (size) {
      case 'sm':
      case 'xs':
        return 'ods-text-title3 ods-px-xs ods-rounded';
      case 'xxs':
        return 'ods-text-body2 ods-px-xs ods-rounded';
      default:
        return 'ods-text-title1 ods-px-md ods-rounded-lg';
    }
  }, [size]);

  /** 버튼의 사용 타입 */
  const usageTypeClassName = useMemo(() => {
    switch (usageType) {
      case 'box':
        return 'ods-bg-primary ods-text-white disabled:ods-bg-gray-200 active:ods-bg-gray-800';
      case 'line':
        return 'ods-border-borderSecondary ods-border ods-text-black ods-bg-white disabled:ods-border-borderPrimary disabled:ods-text-tertiary disabled:ods-bg-white active:ods-border-gray-300';
    }
  }, [usageType]);

  /** 로딩 스피너 사이즈 */
  const spinnerSize = useMemo(() => {
    switch (size) {
      case 'xxs':
      case 'xs':
      case 'sm':
        return 'ods-w-3 ods-h-3';
      default:
        return 'ods-w-4 ods-h-4';
    }
  }, [size]);

  return (
    <button
      type="button"
      className={classNames(
        'ods-relative ods-flex ods-items-center ods-justify-center ods-whitespace-nowrap ods-box-border disabled:ods-bg-gray-200 disabled:ods-cursor-not-allowed',
        usageTypeClassName,
        heightClassName,
        sizeClassName,
        size === 'full' ? 'ods-w-full' : 'ods-w-auto',
        (props.loading || props.withLoading) && 'ods-pointer-events-none',
        className,
      )}
      disabled={props.disabled}
      {...props}
    >
      <div
        className={classNames(
          'ods-flex ods-items-center ods-gap-xs',
          props.loading && 'ods-opacity-0',
        )}
      >
        {props.withIcon && !props.withLoading && <span>{props.withIcon}</span>}
        {props.withLoading && (
          <ButtonCoverWithSpinner
            spinnerSize={spinnerSize}
            usageType={usageType}
            className={'ods-relative'}
          />
        )}
        {props.children}
      </div>
      {props.loading && (
        <ButtonCoverWithSpinner
          spinnerSize={spinnerSize}
          usageType={usageType}
        />
      )}
    </button>
  );
}

/** 로딩 스피너 */
export const ButtonCoverWithSpinner = ({
  spinnerSize,
  usageType,
  className,
}: {
  spinnerSize: string;
  usageType: USAGE_TYPE_LIST;
  className?: string;
}) => {
  return (
    <div
      className={classNames(
        'ods-absolute ods-bg-transparent ods-w-full ods-h-full ods-flex ods-justify-center ods-items-center ods-rounded',
        className,
      )}
    >
      <svg
        aria-hidden="true"
        className={classNames(
          'ods-animate-spin',
          usageType === 'box'
            ? 'ods-text-off-white ods-fill-black'
            : 'ods-text-black ods-fill-white',
          spinnerSize,
        )}
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
  );
};
