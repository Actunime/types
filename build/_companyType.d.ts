import type { IDate, IMediaBase, IMediaLink, IMediaTitle } from "./_mediaType";
import type { IPaginationResponse } from "./_paginationType";
export interface ICompany extends IMediaBase {
    type: "STUDIO" | "PRODUCER";
    name: IMediaTitle;
    description?: string;
    links?: IMediaLink[];
    logo?: {
        id: string;
    };
    createdDate?: IDate;
}
export type ICompanyPaginationResponse = IPaginationResponse<ICompany>;
//# sourceMappingURL=_companyType.d.ts.map