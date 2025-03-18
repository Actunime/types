import { IDate, IMedia, IMediaDB, IMediaLink, IMediaRelation, IMediaTitle } from "./_mediaType";
import { IPaginationResponse } from "./_paginationType";
import { IPersonFull, IPersonRelation } from "./_personType";
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

export type ITrack = ITrackRoot & IMedia;
export interface ITrackFull extends ITrack {
  artists: (IPersonRelation & IPersonFull)[];
  cover: IMediaRelation;
}
export type ITrackDB = IMediaDB & ITrack;
export type ITrackPaginationResponse = IPaginationResponse<ITrack>;
