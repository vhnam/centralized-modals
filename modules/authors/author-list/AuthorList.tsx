import { Avatar, Button, Card, Table, Tag, Typography } from "antd";
import dayjs from "dayjs";
import { useCallback, useState } from "react";

import { Author } from "../../../models/Author.model";

import useAuthorListAction from "./AuthorList.action";

import LoadingOverlay from "../../../components/LoadingOverlay";

import AuthorCreateModal from "../author-create-modal";
import AuthorUpdateModal from "../author-update-modal";

const { Title } = Typography;

const columns = [
  {
    title: "AUTHOR",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "FUNCTION",
    dataIndex: "function",
    key: "function",
  },
  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "EMPLOYED",
    key: "employed",
    dataIndex: "employed",
  },
];

function AuthorList() {
  const [isOpenCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const [isOpenUpdateModal, setOpenUpdateModal] = useState<boolean>(false);

  const {
    authors,
    author,
    isLoadingGetAuthors,
    isLoadingGetAuthor,
    setSelectedAuthor,
  } = useAuthorListAction();

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
  };

  const handleSubmitCreateModal = () => {
    setOpenCreateModal(false);
  };

  const handleOpenUpdateModal = (id: string) => {
    setOpenUpdateModal(true);
    setSelectedAuthor(id);
  };

  const handleCloseUpdateModal = () => {
    setOpenUpdateModal(false);
    setSelectedAuthor(undefined);
  };

  const handleSubmitUpdateModal = () => {
    setOpenUpdateModal(false);
  };

  const renderAuthorList = useCallback(() => {
    if (!authors) {
      return [];
    }

    return authors.map((author: Author) => ({
      key: author.id,
      name: (
        <Avatar.Group>
          <Avatar shape="square" size={40} src={author.avatar}></Avatar>
          <div className="avatar-info">
            <Title level={5}>{author.name}</Title>
            <p>{author.email}</p>
          </div>
        </Avatar.Group>
      ),
      function: (
        <div className="author-info">
          <Title level={5}>{author.jobTitle}</Title>
          <p>{author.jobType}</p>
        </div>
      ),
      status: <Tag color={author.isOnline ? "#1890ff" : "#8c8c8c"}>ONLINE</Tag>,
      employed: (
        <div className="ant-employed">
          <span>{dayjs(author.employed).format("DD/MM/YYYY")}</span>
          <Button
            type="link"
            onClick={handleOpenUpdateModal.bind(null, author.id)}
          >
            Update
          </Button>
        </div>
      ),
    }));
  }, [authors]);

  return (
    <>
      <Card
        bordered={false}
        title="Authors Table"
        extra={
          <Button type="primary" onClick={handleOpenCreateModal}>
            Create
          </Button>
        }
      >
        <Table
          loading={isLoadingGetAuthors}
          columns={columns}
          dataSource={renderAuthorList()}
          pagination={false}
        />
      </Card>

      <AuthorCreateModal
        open={isOpenCreateModal}
        onCancel={handleCloseCreateModal}
        onOk={handleSubmitCreateModal}
      />

      {isOpenUpdateModal && author && (
        <AuthorUpdateModal
          author={author as Author}
          onCancel={handleCloseUpdateModal}
          onOk={handleSubmitUpdateModal}
        />
      )}

      {isLoadingGetAuthor && <LoadingOverlay />}
    </>
  );
}

export default AuthorList;
