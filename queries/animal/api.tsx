import api from "../../utils/api";

import { Animal } from "../../models/Animal.model";

export async function getAnimals() {
  const response = await api.get("/animals");
  return response.data as Animal[];
}

export async function getAnimal(id: string) {
  const response = await api.get(`/animals/${id}`);
  return response.data as Animal;
}

export async function createAnimal(formData: Animal) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await api.post("/animals", formData);
      resolve(response);
    }, 3000);
  });
}

export async function updateAnimal(formData: Animal) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await api.put(`/animals/${formData.id}`, formData);
      resolve(response);
    }, 3000);
  });
}

export async function deleteAnimal(id: string) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await api.get(`/animals/${id}`);
      resolve(response);
    }, 3000);
  });
}
