// import { ITrackType } from '@actunime/utils/_trackUtil';
import { IImage } from "./_imageType";
import { IMediaBase, IMediaLink } from "./_mediaType";
import { IPaginationResponse } from "./_paginationType";
import { IPerson } from "./_personType";
import { ITrackType } from "./utils";

export interface ITrack extends IMediaBase {
  type: ITrackType; // ITrackType;
  name: { default: string; alias: { content: string }[] };
  pubDate: Date | string;
  bio?: string;
  cover?: {
    id: string;
    data?: IImage; // Virtual
  };
  artists: { id: string; data?: IPerson }[];
  links: IMediaLink[];
}

export interface ITrackPopulated extends Omit<ITrack, "persons"> {
  persons: IPerson[];
}

export type ITrackPaginationResponse = IPaginationResponse<ITrack>;
