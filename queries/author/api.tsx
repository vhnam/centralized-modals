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
  return await api.post("/authors", formData);
}

export async function updateAuthor(formData: Author) {
  return await api.put(`/authors/${formData.id}`, formData);
}
