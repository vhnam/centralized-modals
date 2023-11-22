import { Modal, ModalProps } from "antd";
import { MouseEvent } from "react";
import { FormProvider } from "react-hook-form";

import { Author } from "../../../models/Author.model";

import useAuthorUpdateAction from "./AuthorUpdateModal.action";

import AuthorForm from "../author-form/AuthorForm";

interface AuthorUpdateModalProps extends ModalProps {
  author: Author;
}

function AuthorUpdateModal(props: AuthorUpdateModalProps) {
  const { author, onOk, ...rest } = props;

  const { methods, onSubmit } = useAuthorUpdateAction(author);

  const handleSubmit = (e: MouseEvent<HTMLElement>) => {
    onSubmit().then(() => {
      onOk(e);
    });
  };

  return (
    <FormProvider {...methods}>
      <Modal
        {...rest}
        open={true}
        title="Update Author"
        okText="Update"
        onOk={handleSubmit}
      >
        <AuthorForm />
      </Modal>
    </FormProvider>
  );
}

export default AuthorUpdateModal;
