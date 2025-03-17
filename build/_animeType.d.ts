import type { ICharacter } from "./_characterType";
import type { ICompany } from "./_companyType";
import type { IGroupe } from "./_groupeType";
import type { IManga } from "./_mangaType";
import type { IDate, IMediaBase, IMediaCharacterRelation, IMediaDate, IMediaLink, IMediaPersonRelation, IMediaRelation, IMediaRelationInput, IMediaRelationNeutre, IMediaRelationNeutreInput, IMediaTitle } from "./_mediaType";
import type { IPaginationResponse } from "./_paginationType";
import type { IPerson } from "./_personType";
import type { ITrack } from "./_trackType";
import { IImage } from "./_imageType";
import { IMediaGenres, IMediaParentLabel, IMediaSource, IMediaStatus } from "./utils/_mediaUtil";
import { IAnimeFormat } from "./utils/_animeUtil";
export interface IAnimeEpisode {
    airing?: number;
    nextAiringDate?: IDate;
    total?: number;
    durationMinutes?: number;
}
export interface IAnimeRoot extends IMediaBase {
    groupe: {
        id: string;
        data?: IGroupe;
    };
    parent: {
        id?: string;
        parentLabel?: IMediaParentLabel;
        data?: IAnime;
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
    trailer: string;
    format: IAnimeFormat;
    vf?: boolean;
    episodes?: IAnimeEpisode;
    adult?: boolean;
    explicit?: boolean;
    cover?: {
        id: string;
        data?: IImage;
    };
    banner?: {
        id: string;
        data?: IImage;
    };
    genres?: IMediaGenres[];
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
//# sourceMappingURL=_animeType.d.ts.map