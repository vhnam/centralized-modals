import { Avatar, Button, Card, Table, Typography } from "antd";
import { MouseEvent, useCallback } from "react";

import { Animal } from "../../../models/Animal.model";

import useAnimalCreateAction from "../animal-create-modal/AnimalCreateModal.action";
import useAnimalListAction from "./AnimalList.action";

import LoadingOverlay from "../../../components/LoadingOverlay";
import { openModal } from "../../../components/Modal";

import AnimalCreateModal from "../animal-create-modal";
import AnimalUpdateModal from "../animal-update-modal";
import animalDeleteModal from "../animal-delete-modal";

const { Title } = Typography;

const columns = [
  {
    title: "ANIMAL",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "",
    key: "action",
    dataIndex: "action",
  },
];

function AnimalList() {
  const { animals, isLoadingGetAnimals, isLoadingGetAnimal } =
    useAnimalListAction();

  const {
    methods,
    isLoading: isLoadingCreateAnimal,
    onSubmit,
  } = useAnimalCreateAction();

  const handleSubmitCreateAnimal = (e: MouseEvent<HTMLElement>) => {
    return onSubmit();
  };

  const renderAnimalList = useCallback(() => {
    if (!animals) {
      return [];
    }

    return animals.map((animal: Animal) => ({
      key: animal.id,
      name: (
        <Avatar.Group>
          <Avatar shape="square" size={40} src={animal.image}></Avatar>
          <div className="avatar-info">
            <Title level={5}>{animal.name}</Title>
          </div>
        </Avatar.Group>
      ),
      action: (
        <div className="ant-action">
          <Button
            type="link"
            onClick={handleOpenUpdateAnimalModal.bind(null, animal)}
          >
            Update
          </Button>
          <Button
            type="link"
            danger
            onClick={handleOpenDeleteAnimalModal.bind(null, animal)}
          >
            Delete
          </Button>
        </div>
      ),
    }));
  }, [animals]);

  const handleOpenCreateAnimalModal = () => {
    openModal(AnimalCreateModal, {
      methods,
      isLoading: isLoadingCreateAnimal,
      onSubmit: handleSubmitCreateAnimal,
    });
  };

  const handleOpenUpdateAnimalModal = (animal: Animal) => {
    openModal(AnimalUpdateModal, {
      animal,
    });
  };

  const handleOpenDeleteAnimalModal = (animal: Animal) => {
    openModal(animalDeleteModal, {
      animal,
    });
  };

  return (
    <>
      <Card
        bordered={false}
        title="Animals Table"
        extra={
          <Button type="primary" onClick={handleOpenCreateAnimalModal}>
            Create
          </Button>
        }
      >
        <Table
          loading={isLoadingGetAnimals}
          columns={columns}
          dataSource={renderAnimalList()}
          pagination={false}
        />
      </Card>

      {isLoadingGetAnimal && <LoadingOverlay />}
    </>
  );
}

export default AnimalList;
