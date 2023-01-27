// utils
import { Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { getGlasses, IGetGlassesResponse } from "@/api/glasses/getGlasses";

export const useGlassesQuery = (
  params: {
    page: Ref<number>;
    perPage: number;
    collection: Ref<string>;
    colours: Ref<string[]>;
  },
  onSuccess: (response: IGetGlassesResponse) => void,
) => {
  const { data, isFetching } = useQuery(
    ["glasses", params],
    () =>
      getGlasses({
        collection: params.collection.value,
        page: params.page.value,
        perPage: params.perPage,
        colours: params.colours.value,
      }),
    {
      onSuccess: (response) => {
        onSuccess(response.data);
      },
    },
  );

  return { data, isFetching };
};
