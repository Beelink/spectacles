// utils
import apiClient from "@/api";

export interface IGlass {
  id: number;
  name: string;
  configuration_name: string;
  glass_variants: {
    media: { url: string }[];
  }[];
}

export interface IGetGlassesResponse {
  glasses: IGlass[];
  meta: {
    total_count: number;
  };
}

export interface IGetGlassesParams {
  collection: string;
  colours?: string[];
  perPage?: number;
  page?: number;
}

export const getGlasses = async (params: IGetGlassesParams) => {
  const filtersStrl = params.colours?.reduce((prev, cur) => {
    return (
      prev +
      `filters[glass_variant_frame_variant_colour_tag_configuration_names][]=${cur}`
    );
  }, "");

  return await apiClient.get<IGetGlassesResponse>(
    `/collections/${params.collection}/glasses?${filtersStrl}`,
    {
      params: {
        page: {
          number: params.page,
          limit: params.perPage,
        },
      },
    },
  );
};
