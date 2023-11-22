import { yupResolver } from "@hookform/resolvers/yup";
import { notification } from "antd";
import { useForm } from "react-hook-form";

import { Animal } from "../../../models/Animal.model";

import { useUpdateAnimal } from "../../../queries/animal";

import animalFormSchema, { AnimalForm } from "../animal-form/AnimalForm.schema";

function useAnimalUpdateAction(animal: Animal) {
  const methods = useForm<AnimalForm>({
    resolver: yupResolver(animalFormSchema),
    defaultValues: animal,
  });

  const { mutate, isLoading } = useUpdateAnimal();

  const onSubmit = methods.handleSubmit((formData: AnimalForm) => {
    return new Promise((resolve, reject) => {
      mutate(formData as Animal, {
        onSuccess: (res) => {
          notification.success({
            message: "Update animal successfully!",
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

export default useAnimalUpdateAction;
