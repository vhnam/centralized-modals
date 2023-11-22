import { useMutation, useQuery } from "@tanstack/react-query";

import { invalidateUrl } from "../../utils/queryClient";

import {
  createAnimal,
  deleteAnimal,
  getAnimal,
  getAnimals,
  updateAnimal,
} from "./api";
import { AnimalConstants } from "./constants";

export function useGetAnimals() {
  return useQuery({
    queryKey: [AnimalConstants.GET_ANIMALS],
    queryFn: getAnimals,
  });
}

export function useGetAnimal(id?: string) {
  return useQuery({
    queryKey: [AnimalConstants.GET_ANIMAL, id],
    queryFn: getAnimal.bind(null, id),
    enabled: false,
  });
}

export function useCreateAnimal() {
  return useMutation({
    mutationFn: createAnimal,
    onSuccess: () => {
      invalidateAnimals();
    },
    onError(error, variables, context) {
      console.error(error);
    },
  });
}

export function useUpdateAnimal() {
  return useMutation({
    mutationFn: updateAnimal,
    onSuccess: () => {
      invalidateAnimals();
      invalidateAnimal();
    },
    onError(error, variables, context) {
      console.error(error);
    },
  });
}

export function useDeleteAnimal() {
  return useMutation({
    mutationFn: deleteAnimal,
    onSuccess: () => {
      invalidateAnimals();
      invalidateAnimal();
    },
    onError(error, variables, context) {
      console.error(error);
    },
  });
}

function invalidateAnimals() {
  invalidateUrl(AnimalConstants.GET_ANIMALS);
}

function invalidateAnimal() {
  invalidateUrl(AnimalConstants.GET_ANIMAL);
}
