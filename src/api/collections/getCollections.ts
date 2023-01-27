// utils
import apiClient from "@/api";

export interface ICollection {
  id: number;
  name: string;
  configuration_name: string;
}

export interface IGetCollectionsResponse {
  collections: ICollection[];
}

export const getCollections = async () => {
  return await apiClient.get<IGetCollectionsResponse>("/collections");
};
