import { createContext, useState } from 'react';
// import { IappModal } from '../../utils/interfaces';
import AppModal from '../../hooks/modal/Modal';

export const ModalContext = createContext(null);

export const ModalProvider = ({
  children
}) => {
  const [open, setOpen] = useState(false);
  const [component, setComponent] = useState();
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        component,
        setComponent
      }}
    >
      <>
        {children}{' '}
        <AppModal
          open={open}
          openModal={openModal}
          closeModal={closeModal}
          Component={component}
        />
      </>
    </ModalContext.Provider>
  );
};
