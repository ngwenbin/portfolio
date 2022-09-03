import { createContext, useContext, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

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

const Modal = ({ children, show }: ModalProps) => {
  const { showModal } = useGlobalContext();
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => showModal({ show: false })}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-gray-200/[.1] text-white backdrop-blur-lg p-6 text-left align-middle shadow-xl transition-all">
                {children}
                <div className="flex w-full justify-end">
                  <button
                    type="button"
                    className="px-3 py-2 text-sm font-medium leading-4 shadow-sm border border-gray-300 rounded-lg"
                    onClick={() => showModal({ show: false })}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

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

export default function useGlobalContext() {
  return useContext(GlobalContext);
}
