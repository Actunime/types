// import { IUserRoles } from '@actunime/utils/_userUtil';
import { Schema } from "mongoose";
import { IPaginationResponse } from "./_paginationType";
import { IImage } from "./_imageType";
import { IUserAnimeListStatus, IUserRoles } from "./utils";
import { IMediaDate } from "./_mediaType";

export interface IUser {
  // _id: Schema.Types.ObjectId;
  id: string;
  accountId: string;
  username: string;
  displayName: string;
  description?: string;
  roles: IUserRoles[];
  avatar?: {
    id: string;
    data?: IImage; // Virtual
  };
  banner?: {
    id: string;
    data?: IImage; // Virtual
  };
  disabled?: IUserDisabled; // Virtual
  premium?: IUserPremium; // Virtual
  preferences: IUserPreferences;
  animes?: IUserAnimeListe[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export type IUserPaginationResponse = IPaginationResponse<IUser>;
// export interface IUserPaginationResponse extends IPaginationResponse<IUser> {}

export interface IUserPreferences {
  displayUnverifiedMedia: boolean;
  displayUnverifiedImage: boolean;
}

export interface IUserDisabled {
  id: string;
  reason: string;
  user: { id: string; data?: IUser };
  by: { id: string; data?: IUser };

  updatedAt: Date;
  createdAt: Date;
}

export interface IUserPremium {
  id: string;
  level: number;
  expires: Date;
  user: { id: string; data?: IUser };

  updatedAt: Date;
  createdAt: Date;
}

export interface IUserAnimeListe {
  id: string;
  episode?: number;
  status: IUserAnimeListStatus;
  score?: number;
  note?: string;
  favoris?: boolean;
  rank?: number;
  startedAt?: IMediaDate;
  completedAt?: IMediaDate;

  createdAt?: Date;
  updatedAt?: Date;
}