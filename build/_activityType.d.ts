import { IPaginationResponse } from "./_paginationType";
import { IActivityAction, IActivityType, ITargetPath, ITargetPathTypeFull } from "./utils";
import { IMediaDB, IMediaRelation } from "./_mediaType";
import { IUserFull } from "./_userType";
export type IActivityTarget<TPath extends ITargetPath = ITargetPath> = IMediaRelation & {
    path: TPath;
};
export type IActivityTargetFull<TPath extends ITargetPath = ITargetPath> = IActivityTarget<TPath> & ITargetPathTypeFull<TPath>;
export interface IActivityRoot {
    type: IActivityType;
    action: IActivityAction;
    targets: IActivityTarget[];
    author?: IMediaRelation;
    params?: any;
}
export type IActivity = IActivityRoot & {
    id: string;
};
export interface IActivityFull extends IActivity {
    author?: IUserFull;
    targets: IActivityTargetFull[];
}
export type IActivityDB = IMediaDB & IActivityRoot;
export type IActivityPaginationResponse = IPaginationResponse<IActivity>;
//# sourceMappingURL=_activityType.d.ts.map