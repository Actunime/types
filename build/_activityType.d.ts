import { Schema } from "mongoose";
import { IPaginationResponse } from "./_paginationType";
import { IActivityAction, IActivityType, ITargetPath } from "./utils";
export interface IActivity {
    _id: Schema.Types.ObjectId;
    id: string;
    type: IActivityType;
    action: IActivityAction;
    author?: {
        id: string;
    };
    targets: {
        path: ITargetPath;
        id: string;
    }[];
    params?: any;
    updatedAt?: Date;
    createdAt: Date;
}
export type IActivityPaginationResponse = IPaginationResponse<IActivity>;
export type IActivityCreateProps = Omit<IActivity, "id" | "_id" | "createdAt" | "updatedAt">;
//# sourceMappingURL=_activityType.d.ts.map