import api from "../../utils/api";

import { Author } from "../../models/Author.model";

export async function getAuthors() {
  const response = await api.get("/authors");
  return response.data as Author[];
}

export function createAuthor(formData: Author) {
  return api.post("/authors", formData);
}
