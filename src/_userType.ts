import { IPaginationResponse } from './_paginationType';
import { IUserRoles } from './utils';
import { IMediaDB, IMediaRelation } from './_mediaType';
import { IImageFull } from './_imageType';

export interface IUserRoot {
  accountId: string;
  username: string;
  roles: IUserRoles[];
  displayName: string;
  description?: string;
  avatar?: IMediaRelation;
  banner?: IMediaRelation;
  options?: IUserOptions;
  // animes?: IUserAnimeListe[];
}

export type IUser = IUserRoot & { id: string };
export interface IUserFull extends IUser {
  avatar?: IImageFull;
  banner?: IImageFull;
}
export type IUserDB = IMediaDB & IUser;
export type IUserPaginationResponse = IPaginationResponse<IUser>;

export interface IUserOptions {
  displayUnverified?: boolean;
}

// export interface IUserAnimeListe {
//   id: string;
//   episode?: number;
//   status: IUserAnimeListStatus;
//   score?: number;
//   note?: string;
//   favoris?: boolean;
//   rank?: number;
//   startedDate?: IDate;
//   completedDate?: IDate;

//   createdAt?: Date;
//   updatedAt?: Date;
// }
