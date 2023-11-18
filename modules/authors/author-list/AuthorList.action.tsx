import { useGetAuthors } from "../../../queries/author";

function useAuthorListAction() {
  const { data, isLoading } = useGetAuthors();

  return {
    data,
    isLoading,
  };
}

export default useAuthorListAction;
