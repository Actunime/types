import { IMedia, IMediaDB, IMediaTitle, IMediaTitleInput } from "./_mediaType";
import { IPaginationResponse } from "./_paginationType";
export interface IGroupeRoot {
    name: IMediaTitle;
}
export interface IGroupeInputRoot extends Omit<IGroupeRoot, 'name'> {
    name: IMediaTitleInput;
}
export type IGroupeInput = IGroupeInputRoot & IMedia;
export type IGroupe = IGroupeRoot & IMedia;
export interface IGroupeFull extends IGroupe {
}
export type IGroupeDB = IMediaDB & IGroupe;
export type IGroupePaginationResponse = IPaginationResponse<IGroupe>;
