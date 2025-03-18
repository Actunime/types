import { IPaginationResponse } from "./_paginationType";
import { IActivityAction, IActivityType, ITargetPath } from "./utils";
import { IMediaDB, IMediaRelation } from "./_mediaType";
export type IActivityTarget = IMediaRelation & {
    path: ITargetPath;
};
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
export type IActivityDB = IMediaDB & IActivityRoot;
export type IActivityPaginationResponse = IPaginationResponse<IActivity>;
//# sourceMappingURL=_activityType.d.ts.map