import { Modal, ModalProps, Typography } from "antd";
import { MouseEvent } from "react";

import { Author } from "../../../models/Author.model";

import useAuthorDeleteAction from "./AuthorDeleteModal.action";

const { Text } = Typography;

interface AuthorUpdateModalProps extends ModalProps {
  author: Author;
}

function AuthorDeleteModal(props: AuthorUpdateModalProps) {
  const { author, onOk, ...rest } = props;

  const { isLoading, onSubmit } = useAuthorDeleteAction();

  const handleSubmit = (e: MouseEvent<HTMLElement>) => {
    onSubmit(author.id).then(() => {
      onOk(e);
    });
  };

  return (
    <Modal
      {...rest}
      open={true}
      title="Delete author"
      okText="Confirm"
      onOk={handleSubmit}
      okButtonProps={{
        danger: true,
        loading: isLoading,
      }}
    >
      <Text>Are you sure to delete author "{author.name}"?</Text>
    </Modal>
  );
}

export default AuthorDeleteModal;
