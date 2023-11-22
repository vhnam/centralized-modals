import { Modal, ModalProps, Typography } from "antd";
import { MouseEvent } from "react";

import { Animal } from "../../../models/Animal.model";

import useAnimalDeleteAction from "./AnimalDeleteModal.action";

const { Text } = Typography;

interface AnimalDeleteModalProps extends ModalProps {
  animal: Animal;
}

function AnimalDeleteModal(props: AnimalDeleteModalProps) {
  const { animal, onCancel, ...rest } = props;

  const { isLoading, onSubmit } = useAnimalDeleteAction();

  const handleSubmit = (e: MouseEvent<HTMLElement>) => {
    onSubmit(animal.id).then(() => {
      onCancel && onCancel(e);
    });
  };

  return (
    <Modal
      {...rest}
      open={true}
      title="Delete animal"
      okText="Confirm"
      onOk={handleSubmit}
      onCancel={onCancel}
      okButtonProps={{
        danger: true,
        loading: isLoading,
      }}
    >
      <Text>Are you sure to delete animal "{animal.name}"?</Text>
    </Modal>
  );
}

export default AnimalDeleteModal;
