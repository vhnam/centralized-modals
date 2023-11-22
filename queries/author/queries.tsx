import { useMutation, useQuery } from "@tanstack/react-query";

import { invalidateUrl } from "../../utils/queryClient";

import {
  createAuthor,
  deleteAuthor,
  getAuthor,
  getAuthors,
  updateAuthor,
} from "./api";
import { AuthorConstants } from "./constants";

export function useGetAuthors() {
  return useQuery({
    queryKey: [AuthorConstants.GET_AUTHORS],
    queryFn: getAuthors,
  });
}

export function useGetAuthor(id?: string) {
  return useQuery({
    queryKey: [AuthorConstants.GET_AUTHOR, id],
    queryFn: getAuthor.bind(null, id),
    enabled: false,
  });
}

export function useCreateAuthor() {
  return useMutation({
    mutationFn: createAuthor,
    onSuccess: () => {
      invalidateAuthors();
    },
    onError(error, variables, context) {
      console.error(error);
    },
  });
}

export function useUpdateAuthor() {
  return useMutation({
    mutationFn: updateAuthor,
    onSuccess: () => {
      invalidateAuthors();
      invalidateAuthor();
    },
    onError(error, variables, context) {
      console.error(error);
    },
  });
}

export function useDeleteAuthor() {
  return useMutation({
    mutationFn: deleteAuthor,
    onSuccess: () => {
      invalidateAuthors();
      invalidateAuthor();
    },
    onError(error, variables, context) {
      console.error(error);
    },
  });
}

function invalidateAuthors() {
  invalidateUrl(AuthorConstants.GET_AUTHORS);
}

function invalidateAuthor() {
  invalidateUrl(AuthorConstants.GET_AUTHOR);
}
