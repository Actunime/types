import { IMedia, IMediaDB, IMediaTitle } from "./_mediaType";
import { IPaginationResponse } from "./_paginationType";
export interface IGroupeRoot {
    name: IMediaTitle;
}
export type IGroupe = IGroupeRoot & IMedia;
export type IGroupeDB = IMediaDB & IGroupe;
export type IGroupePaginationResponse = IPaginationResponse<IGroupe>;
//# sourceMappingURL=_groupeType.d.ts.map