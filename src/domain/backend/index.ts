import { assetImpl } from "~/domain/repository/Asset";
import { userImpl } from "~/domain/repository/User";

export const backend = {
  user: userImpl,
  asset: assetImpl
};

export type Backend = typeof backend;
