import { IPaginationResponse } from './_paginationType';
import { IUserRoles } from './utils';
import { IMediaDB, IMediaRelation } from './_mediaType';
import { IImageFull } from './_imageType';
export interface IUserRoot {
    accountId: string;
    displayName: string;
    description?: string;
    avatar?: IMediaRelation;
    banner?: IMediaRelation;
    options?: IUserOptions;
}
export type IUser = IUserRoot & {
    id: string;
};
export interface IUserFull extends IUser {
    username: string;
    roles: IUserRoles[];
    avatar?: IImageFull;
    banner?: IImageFull;
}
export type IUserDB = IMediaDB & IUser;
export type IUserPaginationResponse = IPaginationResponse<IUser>;
export interface IUserOptions {
    displayUnverified: boolean;
}
