import { yupResolver } from "@hookform/resolvers/yup";
import { notification } from "antd";
import { useForm } from "react-hook-form";

import { generateAnimalImage } from "../../../utils/avatar";

import { Animal } from "../../../models/Animal.model";

import { useCreateAnimal } from "../../../queries/animal";

import animalFormSchema, { AnimalForm } from "../animal-form/AnimalForm.schema";

function useAnimalCreateAction() {
  const methods = useForm<AnimalForm>({
    resolver: yupResolver(animalFormSchema),
  });

  const { mutate, isLoading } = useCreateAnimal();

  const onSubmit = methods.handleSubmit((formData: AnimalForm) => {
    const image = generateAnimalImage();

    return new Promise((resolve, reject) => {
      mutate(
        {
          ...formData,
          image,
        } as Animal,
        {
          onSuccess: (res) => {
            notification.success({
              message: "Create animal successfully!",
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

export default useAnimalCreateAction;
