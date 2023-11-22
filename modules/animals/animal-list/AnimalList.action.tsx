import { useEffect, useState } from "react";

import { useGetAnimal, useGetAnimals } from "../../../queries/animal";

function useAnimalListAction() {
  const [selectedAnimal, setSelectedAnimal] = useState<string>();

  const {
    data: animals,
    isLoading: isLoadingGetAnimals,
    fetchStatus: fetchStatusGetAnimals,
  } = useGetAnimals();
  const {
    data: animal,
    isLoading: isLoadingGetAnimal,
    refetch: refetchAnimal,
  } = useGetAnimal(selectedAnimal);

  useEffect(() => {
    if (selectedAnimal) {
      refetchAnimal();
    }
  }, [selectedAnimal]);

  return {
    animals,
    animal,
    isLoadingGetAnimals,
    isLoadingGetAnimal: isLoadingGetAnimal && fetchStatusGetAnimals !== "idle",
    setSelectedAnimal,
  };
}

export default useAnimalListAction;
