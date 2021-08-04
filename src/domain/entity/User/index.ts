import { Asset } from "~/domain/entity/Asset";

export interface User {
  uid: string;
  name: string;
  age: number;
  assets: Asset[];
}
