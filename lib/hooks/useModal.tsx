import { useState } from 'react';
import ReactModal from 'react-modal';
import { twMerge } from 'tailwind-merge';
import { XmarkSolid } from '..';
interface IModalComponentProps extends Partial<ReactModal.Props> {
  children: React.ReactNode;
  rounded?: boolean;
  className?: string;
}

const appElement = document.getElementById('root') as HTMLElement;

/**
 * Modal 띄우기 Hook
 * @param 옵션 react-modal props 참고 (https://www.npmjs.com/package/react-modal)
 *
 * @returns isOpen: Modal 오픈 여부
 * @returns openModal: Modal 오픈 함수
 * @returns closeModal: Modal 닫기 함수
 * @returns ModalView: Modal 컴포넌트
 *
 * @example
 * const { openModal, closeModal, ModalView } = useModal();
 * <ModalView>
 *   <AnyModalContents />
 * </ModalView>
 */
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  /**
   * Modal 컴포넌트
   * @param rounded: Modal border-radius 추가 여부 (default: false)
   * @param children: Modal 내부 컨텐츠
   * @param className: 모달창 style class
   * @param modalOptions: react-modal props
   */
  const ModalView = ({
    rounded = false,
    children,
    className,
    ...modalOptions
  }: IModalComponentProps) => {
    if (!isOpen) return null;
    return (
      <ReactModal
        ariaHideApp={false}
        isOpen={isOpen}
        className={twMerge(
          'ods-bg-white focus:ods-outline-none ods-z-[9999] ods-rounded-[30px]',
          rounded && 'ods-rounded-lg',
          className,
        )}
        overlayClassName="ods-w-full ods-h-full ods-fixed ods-top-0 ods-right-0 ods-bg-[#2B2B2B60] ods-z-[9999] ods-flex ods-items-center ods-justify-center"
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        appElement={appElement}
        {...modalOptions}
      >
        {children}
      </ReactModal>
    );
  };

  /**
   * Modal 닫기 버튼
   */
  const CloseButton = () => {
    return <XmarkSolid className="ods-cursor-pointer" onClick={closeModal} />;
  };

  return {
    isOpen,
    openModal,
    closeModal,
    ModalView,
    CloseButton,
  };
};

export default useModal;
