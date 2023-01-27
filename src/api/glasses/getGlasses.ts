// utils
import apiClient from "@/api";

export interface IGlass {
  id: number;
  name: string;
  configuration_name: string;
}

export interface IGetGlassesResponse {
  glasses: IGlass[];
}

export interface IGetGlassesParams {
  collection: string;
}

export const getGlasses = async (params: IGetGlassesParams) => {
  await apiClient.get<IGetGlassesResponse>(`/collections/${params.collection}`);
};
