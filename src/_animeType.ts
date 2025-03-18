import type {
  IDate,
  IMediaDB,
  IMediaCharacterRelation,
  IMediaDate,
  IMediaLink,
  IMediaRelation,
  IMediaTitle,
  IMedia,
} from "./_mediaType";

import type { IPaginationResponse } from "./_paginationType";
import {
  IMediaGenres,
  IMediaParentLabel,
  IMediaSource,
  IMediaStatus,
} from "./utils/_mediaUtil";
import { IAnimeFormat } from "./utils/_animeUtil";
import { IPersonRelation } from "./_personType";

export interface IAnimeEpisode {
  airing?: number;
  nextAiringDate?: IDate;
  total?: number;
  durationMinutes?: number;
}

export type IAnimeRelation = IMediaRelation & { label?: string; };

export interface IAnimeRoot {
  groupe: IMediaRelation;
  parent?: IAnimeRelation;
  manga?: IMediaRelation;
  source?: IMediaSource;
  title: IMediaTitle;
  synopsis?: string;
  date?: IMediaDate;
  status: IMediaStatus;
  trailer?: string;
  format: IAnimeFormat;
  vf?: boolean;
  episodes?: IAnimeEpisode;
  adult?: boolean;
  explicit?: boolean;
  cover?: IMediaRelation;
  banner?: IMediaRelation;
  genres?: IMediaGenres[];
  links?: IMediaLink[];

  companys?: IMediaRelation[];
  staffs?: IPersonRelation[];
  characters?: IMediaCharacterRelation[];
  tracks?: IMediaRelation[];
}

export type IAnime = IAnimeRoot & IMedia;
export type IAnimeDB = IMediaDB & IAnime;
export type IAnimePaginationResponse = IPaginationResponse<IAnime>;