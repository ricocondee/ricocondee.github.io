import React, { createContext, useState, useContext } from 'react';

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState('resume'); // Default to resume

  const handleModal = (content = 'resume') => {
    if (content) {
        setModalContent(content);
    }
    setModal(!modal);
  };

  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  return useContext(ModalContext);
};
