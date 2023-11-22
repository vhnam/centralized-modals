import { useMutation, useQuery } from "@tanstack/react-query";

import {
  createAuthor,
  deleteAuthor,
  getAuthor,
  getAuthors,
  updateAuthor,
} from "./api";

export function useGetAuthors() {
  return useQuery({
    queryKey: ["get-authors"],
    queryFn: getAuthors,
  });
}

export function useGetAuthor(id?: string) {
  return useQuery({
    queryKey: ["get-author", id],
    queryFn: getAuthor.bind(null, id),
    enabled: false,
  });
}

export function useCreateAuthor() {
  return useMutation({
    mutationFn: createAuthor,
    onError(error, variables, context) {
      console.error(error);
    },
  });
}

export function useUpdateAuthor() {
  return useMutation({
    mutationFn: updateAuthor,
    onError(error, variables, context) {
      console.error(error);
    },
  });
}

export function useDeleteAuthor() {
  return useMutation({
    mutationFn: deleteAuthor,
    onError(error, variables, context) {
      console.error(error);
    },
  });
}
