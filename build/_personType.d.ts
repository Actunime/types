import { IPersonRole } from ".";
import type { IDate, IMediaDB, IMediaLink, IMediaName, IMediaRelation } from "./_mediaType";
import type { IPaginationResponse } from "./_paginationType";
export type IPersonRelation = IMediaRelation & {
    role?: IPersonRole;
};
export interface IPersonRoot {
    name: IMediaName;
    birthDate?: IDate;
    deathDate?: IDate;
    description?: string;
    avatar?: IMediaRelation;
    links?: IMediaLink[];
    isGroupe?: boolean;
}
export type IPerson = IPersonRoot & {
    id: string;
};
export type IPersonDB = IPerson & IMediaDB;
export type IPersonPaginationResponse = IPaginationResponse<IPerson>;
//# sourceMappingURL=_personType.d.ts.map