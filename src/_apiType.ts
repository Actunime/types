import { IPatch } from "./_patchType";
import { IAPICode } from "./utils/_apiUtil";

export interface IAPIResponse<T> {
  success: boolean;
  message: string;
  code: IAPICode;
  error: string | null;
  data: T | null;
  patch: IPatch | undefined;
  status: number;
}
