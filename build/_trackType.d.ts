import { IDate, IMediaDB, IMediaLink, IMediaRelation, IMediaTitle } from "./_mediaType";
import { IPaginationResponse } from "./_paginationType";
import { IPersonRelation } from "./_personType";
import { ITrackType } from "./utils";
export interface ITrackRoot {
    type: ITrackType;
    name: IMediaTitle;
    releaseDate?: IDate;
    description?: string;
    cover?: IMediaRelation;
    artists?: IPersonRelation[];
    links?: IMediaLink[];
}
export type ITrack = ITrackRoot & {
    id: string;
};
export type ITrackDB = IMediaDB & ITrack;
export type ITrackPaginationResponse = IPaginationResponse<ITrack>;
//# sourceMappingURL=_trackType.d.ts.map