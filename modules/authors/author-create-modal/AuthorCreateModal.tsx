import { Modal, ModalProps } from "antd";
import { MouseEvent } from "react";
import { FormProvider } from "react-hook-form";

import useAuthorCreateAction from "./AuthorCreateModal.action";

import AuthorForm from "../author-form";

function AuthorCreateModal(props: ModalProps) {
  const { onOk, ...rest } = props;

  const { methods, isLoading, onSubmit } = useAuthorCreateAction();

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
        okButtonProps={{
          loading: isLoading,
        }}
      >
        <AuthorForm />
      </Modal>
    </FormProvider>
  );
}

export default AuthorCreateModal;
