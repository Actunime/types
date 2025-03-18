import { IMediaDB, IMediaTitle } from "./_mediaType";
import { IPaginationResponse } from "./_paginationType";

export interface IGroupeRoot {
  name: IMediaTitle;
}

export type IGroupe = IGroupeRoot & { id: string };
export type IGroupeDB = IMediaDB & IGroupe;
export type IGroupePaginationResponse = IPaginationResponse<IGroupe>;
