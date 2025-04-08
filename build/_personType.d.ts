import { IImageFull, IPersonRole } from ".";
import type { IDate, IMedia, IMediaDB, IMediaLink, IMediaName, IMediaNameInput, IMediaRelation } from "./_mediaType";
import type { IPaginationResponse } from "./_paginationType";
export type IPersonRelation = IMediaRelation & {
    role?: IPersonRole;
};
export interface IPersonRoot {
    name: IMediaName;
    birthDate?: IDate;
    deathDate?: IDate;
    description?: string;
    avatar?: IMediaRelation;
    links?: IMediaLink[];
    isGroupe?: boolean;
}
export interface IPersonInputRoot extends Omit<IPersonRoot, 'name'> {
    name: IMediaNameInput;
}
export type IPersonInput = IPersonInputRoot & IMedia;
export type IPerson = IPersonRoot & IMedia;
export interface IPersonFull extends IPerson {
    avatar?: IImageFull;
}
export type IPersonDB = IPerson & IMediaDB;
export type IPersonPaginationResponse = IPaginationResponse<IPerson>;
