// utils
import { useQuery } from "vue-query";
import {
  getGlasses,
  IGetGlassesParams,
  IGetGlassesResponse,
} from "@/api/glasses/getGlasses";

export const useGlassesQuery = (
  params: IGetGlassesParams,
  callbacks?: {
    onSuccess?: (response: IGetGlassesResponse) => void;
  },
) => {
  const { data, isLoading } = useQuery(
    ["glasses", params],
    () => getGlasses(params),
    {
      onSuccess: callbacks?.onSuccess,
    },
  );

  return { data, isLoading };
};
