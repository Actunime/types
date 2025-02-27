// import type { IAnimeFormat } from '@actunime/utils/_animeUtil';
// import type { ICharacterRole } from '@actunime/utils/_characterUtil';
import type { ICharacter } from "./_characterType";
import type { ICompany } from "./_companyType";
import type { IGroupe } from "./_groupeType";
import type { IManga } from "./_mangaType";
import type {
  IMediaBase,
  IMediaCharacterRelation,
  IMediaDate,
  IMediaLink,
  IMediaPersonRelation,
  IMediaRelation,
  IMediaRelationInput,
  IMediaRelationNeutre,
  IMediaRelationNeutreInput,
  IMediaTitle,
} from "./_mediaType";
// import type {
//   IMediaGenres,
//   IMediaParentLabel,
//   IMediaSource,
//   IMediaStatus
// } from '@actunime/utils/_mediaUtil';

import type { IPaginationResponse } from "./_paginationType";
import type { IPerson } from "./_personType";
import type { ITrack } from "./_trackType";
// import { IPersonRole } from '@actunime/utils/_personUtil';
import { IImage } from "./_imageType";
import {
  IMediaGenres,
  IMediaParentLabel,
  IMediaSource,
  IMediaStatus,
} from "./utils/_mediaUtil";
import { IAnimeFormat } from "./utils/_animeUtil";
import { ICharacterRole, IPersonRole } from "./utils";

export interface IAnimeEpisode {
  airing?: number;
  nextAiringDate?: string;
  total?: number;
  durationMinute?: number;
}

export interface IAnimeRoot extends IMediaBase {
  groupe: {
    id: string;
    data?: IGroupe; // Virtual
  };

  parent: {
    id?: string;
    parentLabel?: IMediaParentLabel;
    data?: IAnime; // Virtual
  };


  manga: {
    id: string;
    data?: IManga;
  };

  source: IMediaSource;

  title: IMediaTitle;
  synopsis?: string;
  date?: IMediaDate;
  status: IMediaStatus;
  trailer: string,
  format: IAnimeFormat;
  vf?: boolean;
  episodes?: IAnimeEpisode;
  adult?: boolean;
  explicit?: boolean;

  cover?: {
    id: string;
    data?: IImage; // Virtual
  };

  banner?: {
    id: string;
    data?: IImage; // Virtual
  };

  genres?: IMediaGenres[];
  // themes?: string[];
  links?: IMediaLink[];
}

export interface IAnime extends IAnimeRoot {
  companys: IMediaRelationNeutre<ICompany>[];
  staffs: IMediaPersonRelation<IPerson>[];
  characters: IMediaCharacterRelation<ICharacter>[];
  tracks: IMediaRelation<ITrack>[];
}

export interface IAnimeInput extends IAnimeRoot {
  companys: IMediaRelationNeutreInput<ICompany>[];
  staffs: IMediaRelationInput<IPerson>[];
  characters: IMediaRelationInput<ICharacter>[];
  tracks: IMediaRelationInput<ITrack>[];
}

export type IAnimePaginationResponse = IPaginationResponse<IAnime>;
