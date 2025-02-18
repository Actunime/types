import { ITargetPath } from "./utils/_global";
import { IReportStatus, IReportSubject } from "./utils/_reportUtil";
import { Schema } from "mongoose";
import { IPaginationResponse } from "./_paginationType";
import { IUser } from "./_userType";

export interface IReport {
  _id: Schema.Types.ObjectId;
  id: string;
  status: IReportStatus;
  by?: {
    id: string;
    data?: IUser; // Virtual
  };
  target: {
    id: string;
    data?: any; // Virtual
  };
  targetPath: ITargetPath;
  subject: IReportSubject;
  message: string;
  author: {
    id: string;
    data?: IUser; // Virtual
  };

  updatedAt: Date;
  createdAt: Date;
}

export interface IReportPopulated extends IReport {
  author: IUser;
  by: IUser;
}

export interface IReportCreateProps
  extends Omit<IReport, "id" | "_id" | "status" | "createdAt" | "updatedAt"> {
  subject: IReportSubject;
}

export type IReportPaginationResponse = IPaginationResponse<IReportPopulated>;
