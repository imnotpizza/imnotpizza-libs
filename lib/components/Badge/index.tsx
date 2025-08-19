/**
 * @file: Badge/index.tsx
 * @author: chad / chad@o2pluss.com
 * @since: 2024.07.02 ~
 * @description: Badge 컴포넌트
 */

import { BADGE_TYPE } from '@/enums';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

interface IBadgeProps {
  type?: BADGE_TYPE;
  size?: 'default' | 'sm';
  children?: string | number;
}

/**
 * Badge 컴포넌트
 * @param type 타입 지정('dot' | 'number')
 * @param size 타입이 dot 일 경우 사이즈 지정('default' | 'sm')
 * @param children 타입이 number 일 경우 표시할 수
 */
export default function Badge({
  type = 'number',
  size = 'default',
  children = 0,
}: IBadgeProps) {
  const typeClassName = useMemo(() => {
    switch (type) {
      case 'number':
        return 'ods-min-w-4 ods-h-4 ods-px-1';
      case 'dot':
        return size === 'default' ? 'ods-w-2 ods-h-2' : 'ods-w-1 ods-h-1';
    }
  }, [type, size]);

  /** 숫자가 999 보다 크면 '999+'로 반환 */
  const markPlusOver999 = () => {
    if (!children || +children < 0) return '0';
    return +children > 999 ? '999+' : children;
  };

  return (
    <div
      className={twMerge(
        'ods-inline-flex ods-rounded-xl ods-bg-primary ods-items-center ods-justify-center',
        typeClassName,
      )}
    >
      {type !== 'dot' && (
        <span className="ods-text-[0.6875em] ods-text-white ods-font-bold">
          {markPlusOver999()}
        </span>
      )}
    </div>
  );
}
