import { IPaginationResponse } from "./_paginationType";
import { IPatchStatus, IPatchType, ITargetPath, ITargetPathType, ITargetPathTypeFull } from "./utils";
import { IMediaDB, IMediaRelation } from "./_mediaType";
import { IUserFull } from "./_userType";
export interface IPatchRoot<TPath extends ITargetPath = ITargetPath> {
    ref?: IMediaRelation;
    type: IPatchType;
    status: IPatchStatus;
    target: IMediaRelation;
    targetPath: TPath;
    description?: string;
    reason?: string;
    original?: ITargetPathType<TPath>;
    changes?: any;
    isChangesUpdated?: boolean;
    author: IMediaRelation;
    moderator?: IMediaRelation;
}
export type IPatch<TPath extends ITargetPath = ITargetPath> = IPatchRoot<TPath> & {
    id: string;
};
export interface IPatchFull<TPath extends ITargetPath = ITargetPath> extends IPatch<TPath> {
    ref: IPatchFull;
    target: IMediaRelation & ITargetPathTypeFull<TPath>;
    author: IUserFull;
    moderator?: IUserFull;
}
export type IPatchDB<TPath extends ITargetPath = ITargetPath> = IMediaDB & IPatch<TPath>;
export type IPatchPaginationResponse<TPath extends ITargetPath = ITargetPath> = IPaginationResponse<IPatch<TPath>>;
//# sourceMappingURL=_patchType.d.ts.map