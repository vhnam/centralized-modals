import { Modal, ModalProps } from "antd";
import { useEffect } from "react";
import { FormProvider } from "react-hook-form";

import { Animal } from "../../../models/Animal.model";

import useAnimalUpdateAction from "./AnimalUpdateModal.action";

import AnimalForm from "../animal-form";

interface AnimalUpdateModalProps extends ModalProps {
  animal: Animal;
}

function AnimalUpdateModal(props: AnimalUpdateModalProps) {
  const { animal, onCancel, ...rest } = props;

  const { methods, isLoading, onSubmit } = useAnimalUpdateAction(animal);

  const handleSubmit = (e) => {
    onSubmit().then(() => {
      onCancel && onCancel(e);
    });
  };

  useEffect(() => {
    return () => {
      methods.reset();
    };
  }, []);

  return (
    <FormProvider {...methods}>
      <Modal
        {...rest}
        title="Update animal"
        okText="Update"
        onCancel={onCancel}
        onOk={handleSubmit}
        okButtonProps={{
          loading: isLoading,
        }}
      >
        <AnimalForm />
      </Modal>
    </FormProvider>
  );
}

export default AnimalUpdateModal;
