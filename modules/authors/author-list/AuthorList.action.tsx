import { useEffect, useState } from "react";

import { useGetAuthor, useGetAuthors } from "../../../queries/author";

function useAuthorListAction() {
  const [selectedAuthor, setSelectedAuthor] = useState<string>();

  const {
    data: authors,
    isLoading: isLoadingGetAuthors,
    fetchStatus: fetchStatusGetAuthors,
  } = useGetAuthors();
  const {
    data: author,
    isLoading: isLoadingGetAuthor,
    refetch: refetchAuthor,
  } = useGetAuthor(selectedAuthor);

  useEffect(() => {
    if (selectedAuthor) {
      refetchAuthor();
    }
  }, [selectedAuthor]);

  return {
    authors,
    author,
    isLoadingGetAuthors,
    isLoadingGetAuthor: isLoadingGetAuthor && fetchStatusGetAuthors !== "idle",
    setSelectedAuthor,
  };
}

export default useAuthorListAction;
