import { notification } from "antd";

import useInvalidateUrl from "../../../hooks/useInvalidateUrl";

import { useDeleteAuthor } from "../../../queries/author";

function useAuthorDeleteAction() {
  const { mutate, isLoading } = useDeleteAuthor();
  const invalidateAuthors = useInvalidateUrl("get-authors");
  const invalidateAuthor = useInvalidateUrl("get-author");

  const onSubmit = (id: string) => {
    return new Promise((resolve, reject) => {
      mutate(id, {
        onSuccess: (res) => {
          invalidateAuthors();
          invalidateAuthor();

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
