import { IMangaFormat } from './utils/_mangaUtil';
import { IMediaGenres, IMediaSource, IMediaStatus } from './utils/_mediaUtil';
import { IDate, IMediaDB, IMediaDate, IMediaLink, IMediaTitle, IMediaRelation, IMedia, IMediaTitleInput } from './_mediaType';
import { IPaginationResponse } from './_paginationType';
import { IPersonFull, IPersonRelation } from './_personType';
import { IImageFull } from './_imageType';
import { ICharacterFull, ICharacterRelation } from './_characterType';
import { IGroupeFull } from './_groupeType';
import { ICompanyFull } from './_companyType';
export interface IMangaChapterVolums {
    airing?: number;
    nextAiringDate?: IDate;
    total?: number;
}
export type IMangaRelation = IMediaRelation & {
    label?: string;
};
export interface IMangaRoot {
    groupe: IMediaRelation;
    parent?: IMangaRelation;
    title: IMediaTitle;
    date?: IMediaDate;
    synopsis?: string;
    source?: IMediaSource;
    format: IMangaFormat;
    vf?: boolean;
    trailer?: string;
    genres?: IMediaGenres[];
    status?: IMediaStatus;
    chapters?: IMangaChapterVolums;
    volumes?: IMangaChapterVolums;
    adult?: boolean;
    explicit?: boolean;
    links?: IMediaLink[];
    cover?: IMediaRelation;
    banner?: IMediaRelation;
    companys?: IMediaRelation[];
    staffs?: IPersonRelation[];
    characters?: ICharacterRelation[];
}
export interface IMangaInputRoot extends Omit<IMangaRoot, 'title'> {
    title: IMediaTitleInput;
}
export type IMangaInput = IMangaInputRoot & IMedia;
export type IManga = IMangaRoot & IMedia;
export interface IMangaFull extends IManga {
    groupe: IGroupeFull;
    parent: IMangaRelation & IMangaFull;
    cover: IImageFull;
    banner: IImageFull;
    companys: ICompanyFull[];
    staffs: (IPersonRelation & IPersonFull)[];
    characters: (ICharacterRelation & ICharacterFull)[];
}
export type IMangaDB = IMediaDB & IManga;
export type IMangaPaginationResponse = IPaginationResponse<IManga>;
