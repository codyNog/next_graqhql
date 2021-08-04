import { assetRequests } from "~/apis/asset";
import { Asset } from "~/domain/entity/Asset";

const getAsset = async (uid: string): Promise<Asset> => {
  const data = await assetRequests.getAsset(uid);
  return data;
};

export const assetImpl = {
  getAsset
};
