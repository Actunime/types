import { ITargetPath } from "./utils/_global";
// import { IPatchStatus, IPatchType } from '@actunime/utils/_patchUtil';
import { Schema } from "mongoose";
import { IPaginationResponse } from "./_paginationType";
import { IUser } from "./_userType";
import { IPatchStatus, IPatchType } from "./utils/_patchUtil";

export interface IPatch<T = any> {
  _id: Schema.Types.ObjectId;
  id: string;
  type: IPatchType;
  note: string;
  moderatorNote: string;
  status: IPatchStatus;
  target?: { id: string; data?: T };
  targetPath: ITargetPath;
  ref?: { id: string; data?: IPatch };
  newValues?: T;
  oldValues?: T;
  author: { id: string; data?: IUser };
  currentModerator: { id: string; at: Date; data?: IUser };
  createdAt?: Date;
  updatedAt?: Date;
}

export type IPatchPaginationResponse = IPaginationResponse<IPatch>;
