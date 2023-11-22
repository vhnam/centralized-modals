/* eslint-disable @typescript-eslint/no-explicit-any */

import { nanoid } from "nanoid";
import { createStore } from "zustand/vanilla";

interface ModalStore {
  modals: any[];
  openModal: (modalComponent: any, props?: Record<string, any>) => void;
  closeModal: (modalId: string) => void;
  closeAll: () => void;
}

const modalStore = createStore<ModalStore>((set) => ({
  modals: [],
  openModal: (modalComponent, props = {}) => {
    set((state) => ({
      ...state,
      modals: [
        ...state.modals,
        {
          id: props.id ?? nanoid(),
          component: modalComponent,
          props,
          isOpen: true,
        },
      ],
    }));
  },
  closeModal: (modalID) => {
    set((state) => ({
      ...state,
      modals: state.modals.filter((modal) => modal.id !== modalID),
    }));
  },
  closeAll: () => {
    set((state) => ({
      ...state,
      modals: [],
    }));
  },
}));

export default modalStore;
