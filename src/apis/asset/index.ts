import { client } from "~/apis";

const getAsset = async (uid: string) => {
  const { data } = await client.Asset({ uid });
  return data.asset;
};

export const assetRequests = {
  getAsset
};
