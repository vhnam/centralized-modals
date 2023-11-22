import api from "../../utils/api";

import { Author } from "../../models/Author.model";

export async function getAuthors() {
  const response = await api.get("/authors");
  return response.data as Author[];
}

export async function getAuthor(id: string) {
  const response = await api.get(`/authors/${id}`);
  return response.data as Author;
}

export async function createAuthor(formData: Author) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await api.post("/authors", formData);
      resolve(response);
    }, 3000);
  });
}

export async function updateAuthor(formData: Author) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await api.put(`/authors/${formData.id}`, formData);
      resolve(response);
    }, 3000);
  });
}

export async function deleteAuthor(id: string) {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const response = await api.get(`/authors/${id}`);
      resolve(response);
    }, 3000);
  });
}
