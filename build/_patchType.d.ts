import { IPaginationResponse } from "./_paginationType";
import { IPatchStatus, IPatchType, ITargetPath } from "./utils";
import { IMediaDB, IMediaRelation } from "./_mediaType";
export interface IPatchRoot<T = any> {
    ref?: IMediaRelation;
    type: IPatchType;
    status: IPatchStatus;
    target: IMediaRelation;
    targetPath: ITargetPath;
    description?: string;
    reason?: string;
    original: T;
    changes: T;
    isChangesUpdated: boolean;
    author: IMediaRelation;
    moderator?: IMediaRelation;
}
export type IPatch<T = any> = IPatchRoot<T> & {
    id: string;
};
export type IPatchDB<T = any> = IMediaDB & IPatch<T>;
export type IPatchPaginationResponse<T = any> = IPaginationResponse<IPatch<T>>;
//# sourceMappingURL=_patchType.d.ts.map