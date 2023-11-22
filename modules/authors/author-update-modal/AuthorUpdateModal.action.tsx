import { yupResolver } from "@hookform/resolvers/yup";
import { notification } from "antd";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";

import useInvalidateUrl from "../../../hooks/useInvalidateUrl";

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
  const invalidateAuthors = useInvalidateUrl("get-authors");
  const invalidateAuthor = useInvalidateUrl("get-author");

  const onSubmit = methods.handleSubmit((formData: AuthorForm) => {
    mutate(formData as Author, {
      onSuccess: (res) => {
        invalidateAuthors();
        invalidateAuthor();

        notification.success({
          message: "Update author successfully!",
          duration: 5,
        });
      },
    });
  });

  return {
    isLoading,
    methods,
    onSubmit,
  };
}

export default useAuthorUpdateAction;
