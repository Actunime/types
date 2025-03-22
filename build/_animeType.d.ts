import type { IDate, IMediaDB, IMediaDate, IMediaLink, IMediaRelation, IMediaTitle, IMedia } from "./_mediaType";
import type { IPaginationResponse } from "./_paginationType";
import { IMediaGenres, IMediaSource, IMediaStatus } from "./utils/_mediaUtil";
import { IAnimeFormat } from "./utils/_animeUtil";
import { IPersonFull, IPersonRelation } from "./_personType";
import { IGroupeFull } from "./_groupeType";
import { IMangaFull, IMangaRelation } from "./_mangaType";
import { ICompanyFull } from "./_companyType";
import { ICharacterFull, ICharacterRelation } from "./_characterType";
import { IImageFull } from "./_imageType";
import { ITrackFull } from "./_trackType";
export interface IAnimeEpisode {
    airing?: number;
    nextAiringDate?: IDate;
    total?: number;
    durationMinutes?: number;
}
export type IAnimeRelation = IMediaRelation & {
    label?: string;
};
export interface IAnimeRoot {
    groupe: IMediaRelation;
    parent?: IAnimeRelation;
    manga?: IMangaRelation;
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
    characters?: ICharacterRelation[];
    tracks?: IMediaRelation[];
}
export type IAnime = IAnimeRoot & IMedia;
export interface IAnimeFull extends IAnime {
    groupe: IGroupeFull;
    parent: IAnimeRelation & IAnimeFull;
    manga: IMangaRelation & IMangaFull;
    cover: IImageFull;
    banner: IImageFull;
    companys: ICompanyFull[];
    staffs: (IPersonRelation & IPersonFull)[];
    characters: (ICharacterRelation & ICharacterFull)[];
    tracks: ITrackFull[];
}
export type IAnimeDB = IMediaDB & IAnime;
export type IAnimePaginationResponse<T extends IAnime | IAnimeFull = IAnime> = IPaginationResponse<T>;
