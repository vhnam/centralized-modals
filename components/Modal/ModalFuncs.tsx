import modalStore from "../../stores/modalStore";

const { getState } = modalStore;
const { openModal, closeModal } = getState();

export { openModal, closeModal };
