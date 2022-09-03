import { createContext, useContext, useState } from "react";
import { Modal } from "~/components";

interface GlobalProviderProps {
  children: React.ReactNode;
}

interface GlobalContextType {
  showModal: ({ show, children }: Partial<ModalProps>) => void;
}

interface ModalProps {
  show: boolean;
  children?: React.ReactNode;
}

const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: GlobalProviderProps) => {
  const [modals, setModals] = useState<ModalProps>({
    show: false,
    children: null,
  });

  const globalContextValue: GlobalContextType = {
    // eslint-disable-next-line no-shadow
    showModal: ({ show = true, children }) => {
      show ? setModals({ show, children }) : setModals({ ...modals, show });
    },
  };
  return (
    <GlobalContext.Provider value={globalContextValue}>
      {children}
      <Modal show={modals.show}>{modals.children}</Modal>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
