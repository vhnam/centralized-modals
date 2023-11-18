import { useMutation, useQuery } from "@tanstack/react-query";

import { createAuthor, getAuthors } from "./api";

export function useGetAuthors() {
  return useQuery({
    queryKey: ["get-authors"],
    queryFn: getAuthors,
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
