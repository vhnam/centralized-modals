import { yupResolver } from "@hookform/resolvers/yup";
import { notification } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useForm } from "react-hook-form";

import { generateAvatar } from "../../../utils/avatar";
import queryClient from "../../../utils/queryClient";

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

    mutate(
      {
        ...formData,
        avatar,
        employed: (formData.employed as Dayjs).toDate(),
      } as Author,
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["get-authors"] });
          notification.success({
            message: "Create author successfully!",
            duration: 5,
          });
        },
      }
    );
  });

  return {
    isLoading,
    methods,
    onSubmit,
  };
}

export default useAuthorCreateAction;
