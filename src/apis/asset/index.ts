import { Asset, AssetDocument } from "~/graphql/types";
import { client } from "..";

const getAsset = async (uid: string) => {
  return await client.request<Asset>(AssetDocument, { uid });
};

export const assetRequests = {
  getAsset
};
