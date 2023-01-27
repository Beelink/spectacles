// utils
import apiClient from "@/api";

export interface ICollection {
  id: number;
  name: string;
  configuration_name: string;
}

export interface IGetGlassesResponse {
  collections: ICollection[];
}

export const getCollections = async () => {
  await apiClient.get<IGetGlassesResponse>("/collections");
};
