import { IMangaFormat } from "./utils/_mangaUtil";
import { IMediaGenres, IMediaSource, IMediaStatus } from "./utils/_mediaUtil";
import { IDate, IMediaDB, IMediaCharacterRelation, IMediaDate, IMediaLink, IMediaTitle, IMediaRelation, IMedia } from "./_mediaType";
import { IPaginationResponse } from "./_paginationType";
import { IPersonRelation } from "./_personType";
export interface IMangaChapterVolums {
    airing?: number;
    nextAiringDate?: IDate;
    total?: number;
}
export type IMangaRelation = IMediaRelation & {
    label: string;
};
export interface IMangaRoot {
    groupe?: IMediaRelation;
    parent?: IMangaRelation;
    title: IMediaTitle;
    date?: IMediaDate;
    synopsis?: string;
    source?: IMediaSource;
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
    cover?: IMediaRelation;
    banner?: IMediaRelation;
    companys?: IMediaRelation[];
    staffs?: IPersonRelation[];
    characters?: IMediaCharacterRelation[];
}
export type IManga = IMangaRoot & IMedia;
export type IMangaDB = IMediaDB & IManga;
export type IMangaPaginationResponse = IPaginationResponse<IManga>;
//# sourceMappingURL=_mangaType.d.ts.map