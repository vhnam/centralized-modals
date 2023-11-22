import { notification } from "antd";

import { useDeleteAuthor } from "../../../queries/author";

function useAuthorDeleteAction() {
  const { mutate, isLoading } = useDeleteAuthor();

  const onSubmit = (id: string) => {
    return new Promise((resolve, reject) => {
      mutate(id, {
        onSuccess: (res) => {
          notification.success({
            message: "Delete author successfully!",
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

export default useAuthorDeleteAction;
