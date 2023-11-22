import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function invalidateUrl(key) {
  queryClient.invalidateQueries({
    queryKey: [key],
    refetchType: "active",
  });
}

export default queryClient;
