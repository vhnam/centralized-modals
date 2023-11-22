import { useStore } from "zustand";
import { useShallow } from "zustand/react/shallow";

import modalStore from "../../stores/modalStore";

function ModalManager() {
  const { modals, closeModal } = useStore(
    modalStore,
    useShallow((state) => ({
      modals: state.modals,
      closeModal: state.closeModal,
    }))
  );

  return (
    <>
      {modals.map((modal) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { onClose, ...props } = modal.props as any;

        return (
          <modal.component
            key={`MODAL_${modal.id}`}
            data-modal-id={modal.id}
            {...props}
            onCancel={() => {
              closeModal(modal.id);
              onClose && onClose();
            }}
            open={modal.isOpen}
          />
        );
      })}
    </>
  );
}

export default ModalManager;
