import { Modal, ModalProps } from "antd";
import { FormProvider, UseFormReturn } from "react-hook-form";

import { AnimalForm as AnimalFormType } from "../animal-form/AnimalForm.schema";

import AnimalForm from "../animal-form";

interface AnimalCreateModalProps extends ModalProps {
  isLoading: boolean;
  methods: UseFormReturn<AnimalFormType, any, undefined>;
  onSubmit: () => Promise<unknown>;
}

function AnimalCreateModal(props: AnimalCreateModalProps) {
  const { isLoading, methods, onCancel, onSubmit, ...rest } = props;

  const handleSubmit = (e) => {
    onSubmit().then(() => {
      onCancel && onCancel(e);
    });
  };

  return (
    <FormProvider {...methods}>
      <Modal
        {...rest}
        title="Create animal"
        okText="Create"
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

export default AnimalCreateModal;
