import { IPaginationResponse } from "./_paginationType";
import { IUserAnimeListStatus, IUserRoles } from "./utils";
import { IDate, IMediaDB, IMediaRelation } from "./_mediaType";
import { IImageFull } from "./_imageType";
export interface IUserRoot {
    accountId: string;
    username: string;
    displayName: string;
    description?: string;
    roles: IUserRoles[];
    avatar?: IMediaRelation;
    banner?: IMediaRelation;
    preferences?: IUserPreferences;
    animes?: IUserAnimeListe[];
}
export type IUser = IUserRoot & {
    id: string;
};
export interface IUserFull extends IUser {
    avatar?: IImageFull;
    banner?: IImageFull;
}
export type IUserDB = IMediaDB & IUser;
export type IUserPaginationResponse = IPaginationResponse<IUser>;
export interface IUserPreferences {
    displayUnverifiedMedia: boolean;
    displayUnverifiedImage: boolean;
}
export interface IUserAnimeListe {
    id: string;
    episode?: number;
    status: IUserAnimeListStatus;
    score?: number;
    note?: string;
    favoris?: boolean;
    rank?: number;
    startedDate?: IDate;
    completedDate?: IDate;
    createdAt?: Date;
    updatedAt?: Date;
}
