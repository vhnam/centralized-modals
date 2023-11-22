import { useCallback } from "react";

import queryClient from "../../utils/queryClient";

const useInvalidateUrl = (key: string) => {
  return useCallback(
    () =>
      queryClient.invalidateQueries({
        queryKey: [key],
        refetchType: "active",
      }),
    [queryClient, key]
  );
};

export default useInvalidateUrl;
