import { IMangaFormat } from "./utils/_mangaUtil";
import {
  IMediaGenres,
  IMediaParentLabel,
  IMediaSource,
  IMediaStatus,
} from "./utils/_mediaUtil";
import { IAnime } from "./_animeType";
import { ICharacter } from "./_characterType";
import { ICompany } from "./_companyType";
import { IGroupe } from "./_groupeType";
import { IImage } from "./_imageType";
import {
  IDate,
  IMediaBase,
  IMediaCharacterRelation,
  IMediaDate,
  IMediaLink,
  IMediaPersonRelation,
  IMediaRelationInput,
  IMediaRelationNeutre,
  IMediaRelationNeutreInput,
  IMediaTitle,
} from "./_mediaType";
import { IPaginationResponse } from "./_paginationType";
import { IPerson } from "./_personType";

export interface IMangaChapterVolums {
  airing?: number;
  nextAiringDate?: IDate;
  total?: number;
}
export interface IMangaRoot extends IMediaBase {
  groupe?: {
    id: string;
    data?: IGroupe; // Virtual
  };

  parent?: {
    id?: string;
    parentLabel?: IMediaParentLabel;
    data?: IAnime; // Virtual
  };

  title: IMediaTitle;
  date?: IMediaDate;
  synopsis?: string;

  source?: {
    id?: string;
    sourceLabel?: IMediaSource;
    data?: IManga; // Virtual
  };

  format?: IMangaFormat;
  vf?: boolean;
  genres?: IMediaGenres[];
  themes?: string[];
  status?: IMediaStatus;
  chapters?: IMangaChapterVolums;
  volumes?: IMangaChapterVolums;
  adult?: boolean;
  explicit?: boolean;
  links?: IMediaLink[];

  cover?: {
    id: string;
    data?: IImage; // Virtual
  };
  banner?: {
    id: string;
    data?: IImage; // Virtual
  };
}

export interface IManga extends IMangaRoot {
  companys: IMediaRelationNeutre<ICompany>[];
  staffs: IMediaPersonRelation<IPerson>[];
  characters: IMediaCharacterRelation<ICharacter>[];
}

export interface IMangaInput extends IMangaRoot {
  companys: IMediaRelationNeutreInput<ICompany>[];
  staffs: IMediaRelationInput<IPerson>[];
  characters: IMediaRelationInput<ICharacter>[];
}

export type IMangaPaginationResponse = IPaginationResponse<IManga>;
