import type { IDate, IMedia, IMediaDB, IMediaLink, IMediaRelation, IMediaTitle } from "./_mediaType";
import type { IPaginationResponse } from "./_paginationType";
export interface ICompanyRoot {
    type: "STUDIO" | "PRODUCER";
    name: IMediaTitle;
    description?: string;
    links?: IMediaLink[];
    logo?: IMediaRelation;
    createdDate?: IDate;
}
export type ICompany = ICompanyRoot & IMedia;
export type ICompanyDB = ICompany & IMediaDB;
export type ICompanyPaginationResponse = IPaginationResponse<ICompany>;
//# sourceMappingURL=_companyType.d.ts.map