import { Schema } from "mongoose";

export interface IMedia {
  id: string;
  isVerified: boolean;
}

export interface IMediaDB {
  _id: Schema.Types.ObjectId;
  __v: number;
  updatedAt: Date | string;
  createdAt: Date | string;
}

export interface IMediaTitle {
  default: string;
  alias?: string[];
}
export type IMediaName = IMediaTitle;

export interface IDate {
  year?: number,
  month?: number,
  day?: number,
  hours?: number,
  minutes?: number,
  seconds?: number
}

export interface IMediaDate {
  start?: IDate;
  end?: IDate;
}

export interface IMediaLink {
  name: string;
  value: string;
}

export type IMediaDisplayVariant = "LIST" | "CARD" | "DEFAULT";

export type IMediaRelation = { id: string; }