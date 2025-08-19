/**
 * @file: Card.tsx
 * @author: liam / liam@o2pluss.com
 * @since: 2024.02.21 ~
 * @description: Card ui
 */

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ILayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * dialog Layout UI
 */
const Card = ({ className, children }: ILayoutProps) => (
  <section
    className={twMerge(
      'ods-w-full ods-h-full ods-p-6 ods-bg-white ods-border-[#E2E2E2] ods-border ods-flex ods-flex-col ods-relative ods-rounded-lg ods-gap-6',
      className,
    )}
  >
    {children}
  </section>
);

/** Card 헤더 */
Card.Header = ({ className, children }: ILayoutProps) => (
  <header
    className={twMerge(
      'ods-w-full ods-flex ods-justify-between ods-items-center',
      className,
    )}
  >
    {children}
  </header>
);

/** Card 제목 */
Card.Title = ({ className, children }: ILayoutProps) => (
  <p
    className={twMerge(
      'ods-text-xl ods-font-bold ods-!m-0 ods-flex ods-items-center ods-justify-start ods-text-gray-900',
      className,
    )}
  >
    {children}
  </p>
);

/**
 * Card body
 */
Card.Body = ({ className, children }: ILayoutProps) => (
  <div
    className={twMerge('ods-flex ods-items-start ods-justify-start', className)}
  >
    {children}
  </div>
);

/** Card Footer */
Card.Footer = ({ className, children }: ILayoutProps) => (
  <div
    className={twMerge(
      'ods-absolute ods-w-full ods-flex ods-left-0 ods-bottom-0',
      className,
    )}
  >
    {children}
  </div>
);

export default Card;
