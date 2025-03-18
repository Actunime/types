import { IMedia, IMediaDB, IMediaTitle } from "./_mediaType";
import { IPaginationResponse } from "./_paginationType";

export interface IGroupeRoot {
  name: IMediaTitle;
}

export type IGroupe = IGroupeRoot & IMedia;
export interface IGroupeFull extends IGroupe { 
  /** Pas encore implementé */
}
export type IGroupeDB = IMediaDB & IGroupe;
export type IGroupePaginationResponse = IPaginationResponse<IGroupe>;
