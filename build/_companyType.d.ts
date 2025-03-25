import { IImageFull } from "./_imageType";
import type { IDate, IMedia, IMediaDB, IMediaLink, IMediaName, IMediaRelation } from "./_mediaType";
import type { IPaginationResponse } from "./_paginationType";
export interface ICompanyRoot {
    type: "STUDIO" | "PRODUCER";
    name: IMediaName;
    description?: string;
    links?: IMediaLink[];
    logo?: IMediaRelation;
    createdDate?: IDate;
}
export type ICompany = ICompanyRoot & IMedia;
export interface ICompanyFull extends ICompany {
    logo?: IImageFull;
}
export type ICompanyDB = ICompany & IMediaDB;
export type ICompanyPaginationResponse = IPaginationResponse<ICompany>;
