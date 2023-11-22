import { yupResolver } from "@hookform/resolvers/yup";
import { notification } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useForm } from "react-hook-form";

import { generateAvatar } from "../../../utils/avatar";

import { Author } from "../../../models/Author.model";

import { useCreateAuthor } from "../../../queries/author";

import authorFormSchema, { AuthorForm } from "../author-form/AuthorForm.schema";

function useAuthorCreateAction() {
  const methods = useForm<AuthorForm>({
    resolver: yupResolver(authorFormSchema),
    defaultValues: {
      isOnline: true,
      employed: dayjs(),
    },
  });

  const { mutate, isLoading } = useCreateAuthor();

  const onSubmit = methods.handleSubmit((formData: AuthorForm) => {
    const avatar = generateAvatar();

    return new Promise((resolve, reject) => {
      mutate(
        {
          ...formData,
          avatar,
          employed: (formData.employed as Dayjs).toDate(),
        } as Author,
        {
          onSuccess: (res) => {
            notification.success({
              message: "Create author successfully!",
              duration: 5,
            });

            resolve(res);
          },
          onError: reject,
        }
      );
    });
  });

  return {
    isLoading,
    methods,
    onSubmit,
  };
}

export default useAuthorCreateAction;
