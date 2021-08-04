import { client } from "~/apis";

const getAsset = async (uid: string) =>
  (await client.getAsset({ uid })).data.getAsset;

export const assetRequests = {
  getAsset
};
