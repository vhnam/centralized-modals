import { Modal, ModalProps } from "antd";
import { MouseEvent } from "react";
import { FormProvider } from "react-hook-form";

import useAuthorCreateAction from "./AuthorCreateModal.action";

import AuthorForm from "../author-form/AuthorForm";

function AuthorCreateModal(props: ModalProps) {
  const { onOk, ...rest } = props;

  const { methods, onSubmit } = useAuthorCreateAction();

  const handleSubmit = (e: MouseEvent<HTMLElement>) => {
    onSubmit().then(() => {
      onOk(e);
    });
  };

  return (
    <FormProvider {...methods}>
      <Modal
        {...rest}
        title="Create author"
        okText="Create"
        onOk={handleSubmit}
      >
        <AuthorForm />
      </Modal>
    </FormProvider>
  );
}

export default AuthorCreateModal;
