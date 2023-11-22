import { yupResolver } from "@hookform/resolvers/yup";
import { notification } from "antd";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";

import { Author } from "../../../models/Author.model";

import { useUpdateAuthor } from "../../../queries/author";

import authorFormSchema, { AuthorForm } from "../author-form/AuthorForm.schema";

function useAuthorUpdateAction(author: Author) {
  const methods = useForm<AuthorForm>({
    resolver: yupResolver(authorFormSchema),
    defaultValues: {
      ...author,
      employed: dayjs(author.employed),
    } as AuthorForm,
  });

  const { mutate, isLoading } = useUpdateAuthor();

  const onSubmit = methods.handleSubmit((formData: AuthorForm) => {
    return new Promise((resolve, reject) => {
      mutate(formData as Author, {
        onSuccess: (res) => {
          notification.success({
            message: "Update author successfully!",
            duration: 5,
          });

          resolve(res);
        },
        onError: reject,
      });
    });
  });

  return {
    isLoading,
    methods,
    onSubmit,
  };
}

export default useAuthorUpdateAction;
