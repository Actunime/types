import { Schema } from "mongoose";
import { IPaginationResponse } from "./_paginationType";
import { IImageLabel } from ".";

export interface IImage {
  _id: Schema.Types.ObjectId;
  id: string;
  label: IImageLabel
  url: string; // Virtual
  location: string; // Virtual;
  target: { id: string }
  targetPath: string;
  isVerified: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type IImagePaginationResponse = IPaginationResponse<IImage>;
// export interface IImagePaginationResponse extends IPaginationResponse<IImage> { }
