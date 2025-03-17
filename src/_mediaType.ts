import { Schema } from "mongoose";
import { ICharacterRole, IPersonRole } from "./utils";

export interface IMediaBase {
  _id: Schema.Types.ObjectId;
  id: string;
  isVerified: boolean;
  isPreAdded: boolean;
  updatedAt: Date | string;
  createdAt: Date | string;
}

export interface IMediaTitle {
  default: string;
  alias?: string[];
}

export interface IMediaDate {
  year?: number,
  month?: number,
  day?: number,
  hour?: number,
  minute?: number
}

export interface IMediaImage {
  cover?: string;
  banner?: string;
}

export interface IMediaLink {
  name: string;
  value: string;
}

export type IMediaDisplayVariant = "LIST" | "CARD" | "DEFAULT";

export interface IMediaRelation<T> {
  id: string;
  data?: T;
}

export interface IMediaCharacterRelation<T> {
  id: string;
  role?: ICharacterRole;
  data?: T;
}

export interface IMediaPersonRelation<T> {
  id: string;
  role?: IPersonRole;
  data?: T;
}

export interface IMediaRelationInput<T> {
  id: string;
  role?: string;
}

export interface IMediaRelationNeutre<T> {
  id: string;
  data?: T;
}

export interface IMediaRelationNeutreInput<T> {
  id: string;
}
