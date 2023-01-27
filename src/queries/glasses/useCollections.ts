// utils
import { useQuery } from "@tanstack/vue-query";
import {
  getCollections,
  IGetCollectionsResponse,
} from "@/api/collections/getCollections";

export const useCollectionsQuery = (
  onSuccess?: (response: IGetCollectionsResponse) => void,
) => {
  const { data, isFetching } = useQuery(
    ["collections"],

    getCollections,
    {
      onSuccess: (response) => {
        onSuccess && onSuccess(response.data);
      },
    },
  );

  return { data, isFetching };
};
