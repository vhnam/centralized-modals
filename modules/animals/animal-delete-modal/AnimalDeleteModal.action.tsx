import { notification } from "antd";

import { useDeleteAnimal } from "../../../queries/animal";

function useAnimalDeleteAction() {
  const { mutate, isLoading } = useDeleteAnimal();

  const onSubmit = (id: string) => {
    return new Promise((resolve, reject) => {
      mutate(id, {
        onSuccess: (res) => {
          notification.success({
            message: "Delete animal successfully!",
            duration: 5,
          });

          resolve(res);
        },
        onError: reject,
      });
    });
  };

  return {
    isLoading,
    onSubmit,
  };
}

export default useAnimalDeleteAction;
